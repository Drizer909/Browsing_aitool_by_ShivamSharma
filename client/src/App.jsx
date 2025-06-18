import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx';
import { Heart, Search, Moon, Sun, BarChart3, Sparkles, ExternalLink, Trash2 } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import confetti from 'canvas-confetti';
import './App.css';

const API_BASE_URL = 'http://localhost:3001/api';

// Custom hook for dark mode
const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return [isDark, setIsDark];
};

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

// Error message component
const ErrorMessage = ({ message, onRetry }) => (
  <div className="text-center p-8">
    <p className="text-destructive mb-4">{message}</p>
    {onRetry && (
      <Button onClick={onRetry} variant="outline">
        Try Again
      </Button>
    )}
  </div>
);

// Tool card component
const ToolCard = ({ tool, onFavorite, isFavorited, onRemoveFavorite, showRemove = false }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleFavorite = async () => {
    setIsLoading(true);
    try {
      if (showRemove) {
        await onRemoveFavorite(tool.id);
      } else {
        await onFavorite(tool.id);
        // Trigger confetti animation
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-lg mb-2">{tool.name}</CardTitle>
            <Badge variant="secondary" className="mb-2">
              {tool.category}
            </Badge>
          </div>
          <Button
            variant={isFavorited || showRemove ? "destructive" : "outline"}
            size="sm"
            onClick={handleFavorite}
            disabled={isLoading}
            className="ml-2"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
            ) : showRemove ? (
              <Trash2 className="h-4 w-4" />
            ) : (
              <Heart className={`h-4 w-4 ${isFavorited ? 'fill-current' : ''}`} />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">{tool.excerpt}</CardDescription>
        <div className="flex flex-wrap gap-1 mb-4">
          {tool.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <Badge variant={tool.pricing === 'Free' ? 'default' : tool.pricing === 'Freemium' ? 'secondary' : 'destructive'}>
            {tool.pricing}
          </Badge>
          <Button variant="ghost" size="sm" asChild>
            <a href={tool.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Chart component
const CategoryChart = ({ tools }) => {
  const categoryData = tools.reduce((acc, tool) => {
    acc[tool.category] = (acc[tool.category] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(categoryData).map(([category, count]) => ({
    name: category,
    value: count
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658'];

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          Tools by Category
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

// Main tools page
const ToolsPage = () => {
  const [tools, setTools] = useState([]);
  const [filteredTools, setFilteredTools] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showChart, setShowChart] = useState(false);

  // Get unique categories
  const categories = [...new Set(tools.map(tool => tool.category))];

  useEffect(() => {
    fetchTools();
    fetchFavorites();
  }, []);

  useEffect(() => {
    filterTools();
  }, [tools, searchTerm, selectedCategory]);

  const fetchTools = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/tools`);
      setTools(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch tools');
    } finally {
      setLoading(false);
    }
  };

  const fetchFavorites = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/favorites`);
      setFavorites(response.data);
    } catch (err) {
      console.error('Failed to fetch favorites:', err);
    }
  };

  const filterTools = () => {
    let filtered = tools;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(tool => 
        tool.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(tool =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredTools(filtered);
  };

  const handleFavorite = async (toolId) => {
    try {
      await axios.post(`${API_BASE_URL}/favorites`, { toolId });
      fetchFavorites();
    } catch (err) {
      if (err.response?.status === 409) {
        setError('Tool is already in favorites');
      } else {
        setError('Failed to save favorite');
      }
      setTimeout(() => setError(''), 3000);
    }
  };

  const isFavorited = (toolId) => {
    return favorites.some(fav => fav.id === toolId);
  };

  if (loading) return <LoadingSpinner />;
  if (error && !tools.length) return <ErrorMessage message={error} onRetry={fetchTools} />;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
          <Sparkles className="h-8 w-8 text-primary" />
          AI Tools Hub
        </h1>
        <p className="text-muted-foreground">Discover and organize your favorite AI tools</p>
      </div>

      {/* Error message */}
      {error && (
        <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-2 rounded-md">
          {error}
        </div>
      )}

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search tools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Select category" />
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectTrigger>
        </Select>
        <Button
          variant="outline"
          onClick={() => setShowChart(!showChart)}
          className="flex items-center gap-2"
        >
          <BarChart3 className="h-4 w-4" />
          {showChart ? 'Hide' : 'Show'} Chart
        </Button>
      </div>

      {/* Chart */}
      {showChart && <CategoryChart tools={tools} />}

      {/* Tools grid */}
      {filteredTools.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No tools found</p>
          <p className="text-sm text-muted-foreground mt-2">
            Try adjusting your search or filter criteria
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map(tool => (
            <ToolCard
              key={tool.id}
              tool={tool}
              onFavorite={handleFavorite}
              isFavorited={isFavorited(tool.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Favorites page
const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/favorites`);
      setFavorites(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch favorites');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveFavorite = async (toolId) => {
    try {
      await axios.delete(`${API_BASE_URL}/favorites/${toolId}`);
      fetchFavorites();
    } catch (err) {
      setError('Failed to remove favorite');
      setTimeout(() => setError(''), 3000);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error && !favorites.length) return <ErrorMessage message={error} onRetry={fetchFavorites} />;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
          <Heart className="h-8 w-8 text-red-500 fill-current" />
          My Favorites
        </h1>
        <p className="text-muted-foreground">Your saved AI tools</p>
      </div>

      {/* Error message */}
      {error && (
        <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-2 rounded-md">
          {error}
        </div>
      )}

      {/* Favorites grid */}
      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground text-lg">No favorites yet</p>
          <p className="text-sm text-muted-foreground mt-2">
            Start exploring tools and add them to your favorites!
          </p>
          <Button asChild className="mt-4">
            <Link to="/">Browse Tools</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map(tool => (
            <ToolCard
              key={tool.id}
              tool={tool}
              onRemoveFavorite={handleRemoveFavorite}
              showRemove={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Navigation component
const Navigation = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useDarkMode();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <Button
              variant={location.pathname === '/' ? 'default' : 'ghost'}
              asChild
            >
              <Link to="/">All Tools</Link>
            </Button>
            <Button
              variant={location.pathname === '/favorites' ? 'default' : 'ghost'}
              asChild
            >
              <Link to="/favorites">My Favorites</Link>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsDark(!isDark)}
            className="flex items-center gap-2"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            {isDark ? 'Light' : 'Dark'}
          </Button>
        </div>
      </div>
    </nav>
  );
};

// Main App component
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<ToolsPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

