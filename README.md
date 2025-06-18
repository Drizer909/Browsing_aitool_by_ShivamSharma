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
![Main Page Light](https://private-us-east-1.manuscdn.com/sessionFile/Nd1YICwHVl35ZcqVyJ4vxI/sandbox/eV7Hrxeki16o2QwXfWLLoz-images_1750226941631_na1fn_L2hvbWUvdWJ1bnR1L3NjcmVlbnNob3QtbWFpbi1saWdodA.webp?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTmQxWUlDd0hWbDM1WmNxVnlKNHZ4SS9zYW5kYm94L2VWN0hyeGVraTE2bzJRd1hmV0xMb3otaW1hZ2VzXzE3NTAyMjY5NDE2MzFfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwzTmpjbVZsYm5Ob2IzUXRiV0ZwYmkxc2FXZG9kQS53ZWJwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzY3MjI1NjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=c3kH7x6sQMmXJvyUFUqL~hWxCWGXSKq6p27opL-j-ZxpOQq~Ae9tUHSpUYQWgEBRKt0jWiTljGKkhuU-Rpr9SKos07dfdV-NVx6Fwu1XE0YNglmLm7H8fgUUsZWABOCyevbihc-ug~kGlY6kYq2v~566LesRgxJojwfTH9BQcPzZ2Sj23io9hSgvYLu7EqhiaKFsKhxL5swN63AN4p-RNm9kwlr4mYWvDBKq60VCGuQLjejugszYAMys92xDn7Ka6i9~Nr~qXiXG~KavYWhf~V073mY8mGii4Mt1fuAZMyZQmn6M7bGH5CLlrkybD1iqLDSAwbHB0BzOmjdtlJ6Rdw__)

### Main Page (Dark Mode) with Chart
![Main Page Dark](https://private-us-east-1.manuscdn.com/sessionFile/Nd1YICwHVl35ZcqVyJ4vxI/sandbox/eV7Hrxeki16o2QwXfWLLoz-images_1750226941632_na1fn_L2hvbWUvdWJ1bnR1L3NjcmVlbnNob3QtbWFpbi1kYXJr.webp?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTmQxWUlDd0hWbDM1WmNxVnlKNHZ4SS9zYW5kYm94L2VWN0hyeGVraTE2bzJRd1hmV0xMb3otaW1hZ2VzXzE3NTAyMjY5NDE2MzJfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwzTmpjbVZsYm5Ob2IzUXRiV0ZwYmkxa1lYSnIud2VicCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc2NzIyNTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=lEv4pZLU-ck1XB69o7eRxalnfJE6dVsLL8iJv-YpOjFzIJDVG8gT6QKm3CdStMRLomp95WoDjc9ae93iJNdl3X5zXYZI9F6b0aIHOO3UvO1uClPMvCooGxyP3cDMCfrf4~henGzNvFa9tr1oITaV8fU3-cv-qMOW~YSZ4mx6mpcbopHzTW8FIpKdBD2~bJMbtUEsd5QNYnLUTtv~yJ8nEvd5rf0DIIrBaPChvqIib6~p4UCTKa6BbNk3CC7RbzNHsApT1LSW2WrFubwtS929GUcuBkF8ABvM1YOJRn9KLdgI1efxRwKW78FcBL8M6F3-eqYZCmQIz4d3W2FJ0HxDpw__)

### Favorites Page
![Favorites Page](https://private-us-east-1.manuscdn.com/sessionFile/Nd1YICwHVl35ZcqVyJ4vxI/sandbox/eV7Hrxeki16o2QwXfWLLoz-images_1750226941633_na1fn_L2hvbWUvdWJ1bnR1L3NjcmVlbnNob3QtZmF2b3JpdGVz.webp?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTmQxWUlDd0hWbDM1WmNxVnlKNHZ4SS9zYW5kYm94L2VWN0hyeGVraTE2bzJRd1hmV0xMb3otaW1hZ2VzXzE3NTAyMjY5NDE2MzNfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwzTmpjbVZsYm5Ob2IzUXRabUYyYjNKcGRHVnoud2VicCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc2NzIyNTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fW0g~9yuF-aItJ6JgFMRae64MNfp01eIQS3RqFkY5EplObI2NEveu3UuApelncIf6sotzbd6wJTeRe63v3HOJdkof2LpOFcvYX0sNVd30vwuZY9sGTwCOscIxOEEmhKCPVoL6GJsm8vE18WVQYQpiyExQL0OJaJsID-1t7UZIqBu0ukxeQdTbhE~gCHhh-Il81-JNpSsk9YZ0hn9C6eWiZT~oVTngdUP~tPRcSPBewVIRaKOkXg0LduyszOLTlrmoEACrTEHnb7OZkkK~5QtComPMKPPlPYWOfgZgy7hz-NivPVN9ZWOucXdwQi6OJijylZCTSgeGSru4pbhDjSq8Q__)

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

