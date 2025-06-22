import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Login Page Component
export const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login - in real app, this would validate credentials
    onLogin({
      name: email.split("@")[0] || "User",
      email: email,
      profileImage: "https://images.pexels.com/photos/31587201/pexels-photo-31587201.jpeg",
    });
    navigate("/feed");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYXxlbnwwfHx8Ymx1ZXwxNzUwNTk5ODM4fDA&ixlib=rb-4.1.0&q=85" 
              alt="Facebook Logo" 
              className="h-16 w-16 rounded-full"
            />
          </div>
          <h1 className="text-6xl font-bold text-blue-600 mb-2">facebook</h1>
          <p className="text-gray-600 text-lg">Connect with friends and the world around you on Facebook.</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-semibold text-lg hover:bg-blue-700 transition duration-200"
            >
              Log In
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link to="/anonymous-login" className="text-blue-600 hover:underline">
              Forgotten password?
            </Link>
          </div>

          <hr className="my-6" />

          <div className="text-center space-y-4">
            <Link
              to="/signup"
              className="inline-block bg-green-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-600 transition duration-200"
            >
              Create New Account
            </Link>
            <div>
              <Link
                to="/anonymous-login"
                className="text-blue-600 hover:underline text-sm"
              >
                Login Anonymously
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Signup Page Component
export const SignupPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Mock signup - in real app, this would create account
    onLogin({
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      profileImage: "https://images.pexels.com/photos/7277960/pexels-photo-7277960.jpeg",
    });
    navigate("/feed");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">Sign Up</h1>
          <p className="text-gray-600">It's quick and easy.</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="New password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 px-4 rounded-md font-semibold text-lg hover:bg-green-600 transition duration-200"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Anonymous Login Component
export const AnonymousLogin = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleAnonymousLogin = () => {
    onLogin({
      name: "Anonymous User",
      email: "anonymous@facebook.com",
      profileImage: "https://images.pexels.com/photos/7279111/pexels-photo-7279111.jpeg",
    });
    navigate("/feed");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Anonymous Login</h1>
          <p className="text-gray-600 mb-8">Browse Facebook without creating an account</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Browse Anonymously</h3>
            <p className="text-gray-600 text-sm">
              You can view posts and interact with content without revealing your identity.
            </p>
          </div>

          <button
            onClick={handleAnonymousLogin}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-semibold text-lg hover:bg-blue-700 transition duration-200 mb-4"
          >
            Continue as Anonymous
          </button>

          <div className="text-center">
            <Link to="/login" className="text-blue-600 hover:underline text-sm">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Header Component
export const Header = ({ user, onLogout }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-blue-600">facebook</h1>
            <div className="hidden md:block">
              <input
                type="text"
                placeholder="Search Facebook"
                className="bg-gray-100 rounded-full px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="p-2 rounded-full hover:bg-gray-100 transition duration-200">
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition duration-200">
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition duration-200">
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" />
              </svg>
            </button>
            
            <div className="flex items-center space-x-2">
              <img
                src={user.profileImage}
                alt={user.name}
                className="w-8 h-8 rounded-full"
              />
              <span className="hidden md:block text-sm font-medium text-gray-900">
                {user.name}
              </span>
              <button
                onClick={onLogout}
                className="ml-2 text-sm text-gray-600 hover:text-gray-900 transition duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Post Creation Component
export const PostCreation = ({ user, onAddPost }) => {
  const [postContent, setPostContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postContent.trim()) {
      onAddPost(postContent);
      setPostContent("");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      <div className="flex space-x-3">
        <img
          src={user.profileImage}
          alt={user.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            <textarea
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              placeholder={`What's on your mind, ${user.name}?`}
              className="w-full p-3 rounded-2xl bg-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              rows="3"
            />
            <div className="flex justify-between items-center mt-3">
              <div className="flex space-x-4">
                <button type="button" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Photo/Video</span>
                </button>
                <button type="button" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zM9 9a1 1 0 011-1v-2.5a.5.5 0 011 0V8a1 1 0 011 1v4a1 1 0 11-2 0V9z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Feeling/Activity</span>
                </button>
              </div>
              <button
                type="submit"
                disabled={!postContent.trim()}
                className={`px-6 py-2 rounded-md font-medium transition duration-200 ${
                  postContent.trim()
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Individual Post Component
export const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      // In a real app, this would add comment to the post
      setNewComment("");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
      {/* Post Header */}
      <div className="p-4">
        <div className="flex items-center space-x-3 mb-3">
          <img
            src={post.user.profileImage}
            alt={post.user.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-gray-900">{post.user.name}</h3>
            <p className="text-sm text-gray-500">{post.timestamp}</p>
          </div>
        </div>

        {/* Post Content */}
        <p className="text-gray-900 mb-3">{post.content}</p>

        {/* Post Image */}
        {post.image && (
          <img
            src={post.image}
            alt="Post content"
            className="w-full rounded-lg mb-3"
          />
        )}

        {/* Post Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-4">
            <span>{post.likes + (liked ? 1 : 0)} likes</span>
            <span>{post.comments} comments</span>
            <span>{post.shares} shares</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="border-t border-gray-200 pt-3">
          <div className="flex space-x-4">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 flex-1 justify-center py-2 rounded-md transition duration-200 ${
                liked
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span>Like</span>
            </button>
            <button
              onClick={() => setShowComments(!showComments)}
              className="flex items-center space-x-2 flex-1 justify-center py-2 rounded-md text-gray-600 hover:bg-gray-100 transition duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
              </svg>
              <span>Comment</span>
            </button>
            <button className="flex items-center space-x-2 flex-1 justify-center py-2 rounded-md text-gray-600 hover:bg-gray-100 transition duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Comments Section */}
        {showComments && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <form onSubmit={handleComment} className="flex space-x-3 mb-4">
              <img
                src="https://images.pexels.com/photos/7279111/pexels-photo-7279111.jpeg"
                alt="Your profile"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-1">
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write a comment..."
                  className="w-full px-3 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </form>
            
            {/* Mock Comments */}
            <div className="space-y-3">
              <div className="flex space-x-3">
                <img
                  src="https://images.pexels.com/photos/31587201/pexels-photo-31587201.jpeg"
                  alt="Commenter"
                  className="w-8 h-8 rounded-full"
                />
                <div className="bg-gray-100 rounded-xl px-3 py-2 flex-1">
                  <h4 className="font-semibold text-sm">Emma Wilson</h4>
                  <p className="text-sm">This looks amazing! Thanks for sharing 😊</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <img
                  src="https://images.pexels.com/photos/7277960/pexels-photo-7277960.jpeg"
                  alt="Commenter"
                  className="w-8 h-8 rounded-full"
                />
                <div className="bg-gray-100 rounded-xl px-3 py-2 flex-1">
                  <h4 className="font-semibold text-sm">James Miller</h4>
                  <p className="text-sm">Totally agree! Great perspective on this topic.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Sidebar Component
export const Sidebar = ({ user }) => {
  const menuItems = [
    { icon: "👤", label: user.name, highlight: true },
    { icon: "👥", label: "Friends" },
    { icon: "📱", label: "Pages" },
    { icon: "🛍️", label: "Marketplace" },
    { icon: "📺", label: "Watch" },
    { icon: "📅", label: "Events" },
    { icon: "🏢", label: "Groups" },
    { icon: "🎮", label: "Gaming" },
    { icon: "📰", label: "News" },
    { icon: "🔍", label: "Most Recent" },
  ];

  return (
    <div className="w-80 bg-white h-screen sticky top-14 overflow-y-auto">
      <div className="p-4">
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition duration-200 ${
                item.highlight
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <hr className="my-4" />

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Shortcuts</h3>
          <div className="space-y-2">
            <button className="w-full flex items-center space-x-3 p-3 rounded-lg text-left hover:bg-gray-100 text-gray-700 transition duration-200">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-sm font-bold">WC</span>
              </div>
              <span>Web Creators Community</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-3 rounded-lg text-left hover:bg-gray-100 text-gray-700 transition duration-200">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-sm font-bold">TG</span>
              </div>
              <span>Tech Gadgets</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Right Sidebar Component
export const RightSidebar = () => {
  return (
    <div className="w-80 bg-white h-screen sticky top-14 overflow-y-auto">
      <div className="p-4">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Sponsored</h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <img
              src="https://images.unsplash.com/photo-1491951931722-5a446214b4e2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxzb2NpYWwlMjBtZWRpYXxlbnwwfHx8Ymx1ZXwxNzUwNTk5ODM4fDA&ixlib=rb-4.1.0&q=85"
              alt="Ad"
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
            <h4 className="font-semibold text-gray-900">Connect with Friends</h4>
            <p className="text-sm text-gray-600">Find people you know and expand your network</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Contacts</h3>
          <div className="space-y-3">
            {[
              { name: "Jennifer Lopez", image: "https://images.pexels.com/photos/31587201/pexels-photo-31587201.jpeg", online: true },
              { name: "Robert Garcia", image: "https://images.pexels.com/photos/7277960/pexels-photo-7277960.jpeg", online: true },
              { name: "Lisa Anderson", image: "https://images.pexels.com/photos/7279111/pexels-photo-7279111.jpeg", online: false },
              { name: "Mark Johnson", image: "https://images.pexels.com/photos/31587201/pexels-photo-31587201.jpeg", online: true },
              { name: "Sofia Martinez", image: "https://images.pexels.com/photos/7277960/pexels-photo-7277960.jpeg", online: false },
            ].map((contact, index) => (
              <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition duration-200">
                <div className="relative">
                  <img
                    src={contact.image}
                    alt={contact.name}
                    className="w-8 h-8 rounded-full"
                  />
                  {contact.online && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <span className="text-sm text-gray-900">{contact.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Feed Component
export const MainFeed = ({ user, posts, onAddPost, onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header user={user} onLogout={onLogout} />
      
      <div className="flex max-w-7xl mx-auto">
        {/* Left Sidebar */}
        <div className="hidden lg:block">
          <Sidebar user={user} />
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-2xl mx-auto p-4">
          {/* Stories Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
            <div className="flex space-x-4 overflow-x-auto">
              <div className="flex-shrink-0">
                <div className="w-24 h-40 bg-gradient-to-b from-blue-400 to-purple-500 rounded-lg relative cursor-pointer">
                  <img
                    src={user.profileImage}
                    alt="Your story"
                    className="w-full h-28 object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-xs text-center text-white font-medium mt-1">Create Story</p>
                </div>
              </div>
              
              {[
                { name: "Alex", image: "https://images.pexels.com/photos/31587201/pexels-photo-31587201.jpeg" },
                { name: "Maria", image: "https://images.pexels.com/photos/7277960/pexels-photo-7277960.jpeg" },
                { name: "David", image: "https://images.pexels.com/photos/7279111/pexels-photo-7279111.jpeg" },
                { name: "Sarah", image: "https://images.pexels.com/photos/31587201/pexels-photo-31587201.jpeg" },
              ].map((story, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="w-24 h-40 bg-gray-200 rounded-lg relative cursor-pointer overflow-hidden">
                    <img
                      src={story.image}
                      alt={`${story.name}'s story`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-8 h-8 rounded-full border-2 border-blue-500"
                      />
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <p className="text-xs text-white font-medium">{story.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <PostCreation user={user} onAddPost={onAddPost} />
          
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:block">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};