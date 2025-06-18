# AI Tools Hub

A full-stack web application for browsing, filtering, and favoriting AI tools. Built with Node.js/Express backend and React frontend with modern UI components and responsive design.

## 🚀 Features

### Core Features
- **Browse AI Tools**: View all available AI tools in an organized card layout
- **Category Filtering**: Filter tools by category using dropdown selection
- **Search Functionality**: Search tools by name, description, or tags
- **Favorites Management**: Save and manage your favorite AI tools
- **Responsive Design**: Mobile-friendly interface that works on all devices

### Bonus Features ✨
- **Dark Mode Toggle**: Switch between light and dark themes with persistence
- **Interactive Charts**: Pie chart showing distribution of tools by category
- **Confetti Animation**: Celebratory animation when adding favorites
- **Advanced Search**: Search across tool names, descriptions, and tags
- **Error Handling**: Comprehensive error messages and loading states
- **Edge Case Handling**: Prevents duplicate favorites and handles empty results

## 📸 Screenshots

### Main Page (Light Mode)
![screenshot-main-light](https://github.com/user-attachments/assets/944cec2c-c31b-4bc5-a6d5-4c01e43f3114)


### Main Page (Dark Mode) with Chart
![screenshot-main-dark](https://github.com/user-attachments/assets/76083a51-9907-4d5a-a9b7-fcf92ce09b6a)



### Favorites Page
![screenshot-favorites](https://github.com/user-attachments/assets/baa8d39f-22e4-4a20-8fd2-23692c30bd4f)


## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **JSON** - In-memory data storage

### Frontend
- **React** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI components
- **Lucide Icons** - Beautiful icons
- **Recharts** - Chart library for data visualization
- **Canvas Confetti** - Confetti animations
- **Axios** - HTTP client

## 📁 Project Structure

```
ai-tools-hub/
├── server/                 # Backend (Node.js/Express)
│   ├── index.js           # Main server file
│   ├── tools.json         # AI tools data
│   ├── package.json       # Backend dependencies
│   └── package-lock.json
├── client/                 # Frontend (React)
│   ├── src/
│   │   ├── App.jsx        # Main React component
│   │   ├── App.css        # Styles
│   │   ├── main.jsx       # Entry point
│   │   └── components/    # UI components
│   ├── public/
│   ├── package.json       # Frontend dependencies
│   └── index.html
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or pnpm

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-tools-hub
   ```

2. **Setup Backend**
   ```bash
   cd server
   npm install
   npm start
   ```
   The backend server will start on `http://localhost:5000`

3. **Setup Frontend** (in a new terminal)
   ```bash
   cd client
   pnpm install
   pnpm run dev
   ```
   The frontend will start on `http://localhost:5173`

4. **Access the Application**
   Open your browser and navigate to `http://localhost:5173`

## 🔧 API Endpoints

### Tools
- `GET /api/tools` - Get all AI tools
- `GET /api/tools?category=Writing` - Filter tools by category

### Favorites
- `POST /api/favorites` - Add a tool to favorites
  ```json
  { "toolId": 1 }
  ```
- `GET /api/favorites` - Get all favorite tools
- `DELETE /api/favorites/:id` - Remove a tool from favorites

### Health Check
- `GET /api/health` - Check server status

## 🎯 Usage

### Browsing Tools
1. Visit the main page to see all available AI tools
2. Use the search bar to find specific tools
3. Filter by category using the dropdown
4. Click the chart button to view category distribution

### Managing Favorites
1. Click the heart icon on any tool card to add it to favorites
2. Navigate to "My Favorites" to view saved tools
3. Click the trash icon to remove tools from favorites
4. Enjoy the confetti animation when adding favorites!

### Dark Mode
- Click the moon/sun icon in the top-right to toggle dark mode
- Your preference is automatically saved

## 🔍 Edge Cases Handled

- **Duplicate Favorites**: Prevents adding the same tool twice
- **Empty Results**: Shows appropriate message when no tools match filters
- **Loading States**: Displays spinners during API calls
- **Error Handling**: Shows user-friendly error messages
- **Mobile Responsiveness**: Optimized for all screen sizes

## 🎨 Design Features

- **Modern UI**: Clean, professional design with shadcn/ui components
- **Smooth Animations**: Hover effects, transitions, and confetti
- **Accessibility**: Proper contrast ratios and keyboard navigation
- **Performance**: Optimized rendering and efficient state management

## 🧪 Testing

The application has been thoroughly tested for:
- ✅ All API endpoints functionality
- ✅ Frontend component interactions
- ✅ Mobile responsiveness
- ✅ Dark/light mode switching
- ✅ Search and filtering
- ✅ Favorites management
- ✅ Error handling and edge cases

## 🚀 Deployment

### Frontend Deployment
The React application can be deployed to platforms like:
- Vercel
- Netlify
- GitHub Pages

### Backend Deployment
The Express server can be deployed to:
- Heroku
- Railway
- DigitalOcean
- AWS

## 📝 Development Notes

- The backend uses in-memory storage for favorites (resets on server restart)
- All API endpoints include proper error handling and status codes
- The frontend implements proper loading states and error boundaries
- Dark mode preference is persisted in localStorage
- The application is fully responsive and mobile-friendly

## 🎉 Bonus Features Implemented

1. **Dark Mode Toggle** ✅ - Complete with localStorage persistence
2. **Category Chart** ✅ - Interactive pie chart with Recharts
3. **Advanced Search** ✅ - Search by name, description, and tags
4. **Confetti Animation** ✅ - Celebratory animation on favorite save

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using React and Node.js

