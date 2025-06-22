import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  MainFeed,
  AnonymousLogin
} from "./components";

function App() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  // Mock initial posts data
  useEffect(() => {
    const mockPosts = [
      {
        id: 1,
        user: {
          name: "Alex Johnson",
          profileImage: "https://images.pexels.com/photos/31587201/pexels-photo-31587201.jpeg",
        },
        content: "Just had an amazing coffee at the new café downtown! ☕️ The atmosphere is perfect for catching up with friends. Highly recommend their signature latte!",
        timestamp: "2 hours ago",
        likes: 24,
        comments: 8,
        shares: 3,
        image: null,
      },
      {
        id: 2,
        user: {
          name: "Maria Rodriguez",
          profileImage: "https://images.pexels.com/photos/7277960/pexels-photo-7277960.jpeg",
        },
        content: "Beautiful sunset from my hiking trip today 🌅 Sometimes you need to disconnect from technology and reconnect with nature. Feeling grateful for moments like these!",
        timestamp: "4 hours ago",
        likes: 156,
        comments: 23,
        shares: 12,
        image: "https://images.unsplash.com/photo-1619208110262-90c0438c174d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxkaXZlcnNlJTIwcGVvcGxlfGVufDB8fHxibHVlfDE3NTA1OTk4MzB8MA&ixlib=rb-4.1.0&q=85",
      },
      {
        id: 3,
        user: {
          name: "David Chen",
          profileImage: "https://images.pexels.com/photos/7279111/pexels-photo-7279111.jpeg",
        },
        content: "Excited to announce that I just started my new job at a tech startup! 🚀 Looking forward to building amazing products and working with an incredible team. The future is bright!",
        timestamp: "6 hours ago",
        likes: 89,
        comments: 34,
        shares: 7,
        image: null,
      },
      {
        id: 4,
        user: {
          name: "Sarah Williams",
          profileImage: "https://images.pexels.com/photos/31587201/pexels-photo-31587201.jpeg",
        },
        content: "Family game night was a huge success! 🎲 Nothing beats quality time with loved ones. We laughed so hard my cheeks hurt! What's your favorite family activity?",
        timestamp: "8 hours ago",
        likes: 67,
        comments: 19,
        shares: 5,
        image: null,
      },
      {
        id: 5,
        user: {
          name: "Michael Thompson",
          profileImage: "https://images.pexels.com/photos/7277960/pexels-photo-7277960.jpeg",
        },
        content: "Just finished reading an incredible book about artificial intelligence and its impact on society. 📚 The insights about the future of work and creativity are fascinating. Anyone else interested in AI?",
        timestamp: "12 hours ago",
        likes: 43,
        comments: 15,
        shares: 8,
        image: null,
      }
    ];
    setPosts(mockPosts);
  }, []);

  const addPost = (newPost) => {
    const post = {
      id: Date.now(),
      user: user || { name: "Anonymous User", profileImage: "https://images.pexels.com/photos/7279111/pexels-photo-7279111.jpeg" },
      content: newPost,
      timestamp: "Just now",
      likes: 0,
      comments: 0,
      shares: 0,
      image: null,
    };
    setPosts([post, ...posts]);
  };

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div className="App min-h-screen bg-gray-100">
      <BrowserRouter>
        <Routes>
          <Route 
            path="/login" 
            element={
              user ? <Navigate to="/feed" /> : <LoginPage onLogin={login} />
            } 
          />
          <Route 
            path="/signup" 
            element={
              user ? <Navigate to="/feed" /> : <SignupPage onLogin={login} />
            } 
          />
          <Route 
            path="/anonymous-login" 
            element={
              user ? <Navigate to="/feed" /> : <AnonymousLogin onLogin={login} />
            } 
          />
          <Route 
            path="/feed" 
            element={
              user ? (
                <MainFeed 
                  user={user} 
                  posts={posts} 
                  onAddPost={addPost} 
                  onLogout={logout} 
                />
              ) : (
                <Navigate to="/login" />
              )
            } 
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;