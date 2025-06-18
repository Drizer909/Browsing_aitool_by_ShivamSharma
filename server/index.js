const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Load tools data
const toolsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'tools.json'), 'utf8'));

// In-memory storage for favorites
let favorites = [];

// GET /api/tools - Return all AI tools or filter by category
app.get('/api/tools', (req, res) => {
  try {
    const { category } = req.query;
    
    if (category) {
      // Case-insensitive category filtering
      const filteredTools = toolsData.filter(tool => 
        tool.category.toLowerCase() === category.toLowerCase()
      );
      return res.json(filteredTools);
    }
    
    res.json(toolsData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tools' });
  }
});

// POST /api/favorites - Save a tool to favorites
app.post('/api/favorites', (req, res) => {
  try {
    const { toolId } = req.body;
    
    if (!toolId) {
      return res.status(400).json({ error: 'Tool ID is required' });
    }
    
    // Check if tool exists
    const tool = toolsData.find(t => t.id === toolId);
    if (!tool) {
      return res.status(404).json({ error: 'Tool not found' });
    }
    
    // Check if already favorited (prevent duplicates)
    const existingFavorite = favorites.find(fav => fav.id === toolId);
    if (existingFavorite) {
      return res.status(409).json({ error: 'Tool is already in favorites' });
    }
    
    // Add to favorites
    favorites.push(tool);
    res.status(201).json({ message: 'Tool added to favorites', tool });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save favorite' });
  }
});

// GET /api/favorites - List all saved favorites
app.get('/api/favorites', (req, res) => {
  try {
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch favorites' });
  }
});

// DELETE /api/favorites/:id - Remove a tool from favorites
app.delete('/api/favorites/:id', (req, res) => {
  try {
    const toolId = parseInt(req.params.id);
    const initialLength = favorites.length;
    
    favorites = favorites.filter(fav => fav.id !== toolId);
    
    if (favorites.length === initialLength) {
      return res.status(404).json({ error: 'Favorite not found' });
    }
    
    res.json({ message: 'Tool removed from favorites' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove favorite' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'AI Tools API is running' });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

