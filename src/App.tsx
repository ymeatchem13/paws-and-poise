import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        {/* <Route index path="home" element={<Home />} />
        <Route path="tv-shows" element={<TVShows />} />
        <Route path="movies" element={<Movies />} />
        <Route path="new-popular" element={<NewPopular />} />
        <Route path="my-list" element={<MyList />} />
        <Route path="browse-language" element={<BrowseLanguage />} />
        <Route path="sign-in" element={<Signin />} />
        <Route path="sign-up" element={<Signup />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
