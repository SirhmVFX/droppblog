import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import SignUp from './Authentication/SignUp';
import SignIn from './Authentication/SignIn';
import ErrorBoundary from './ErrorBoundary';
import HomePage from './HomePage';
import Header from './Header';
import HomeHeader from './HomeHeader';
import UserProfile from './src/UserProfile' // ✅ Import your UserProfile

function AppContent() {
  const location = useLocation();

  // List of auth routes where we want the default Header (not HomeHeader)
  const authRoutes = ['/Login', '/Signup'];
  const isAuthRoute = authRoutes.includes(location.pathname);

  return (
    <>
      {/* ✅ Conditionally render Header based on route */}
      {isAuthRoute ? <Header /> : <HomeHeader />}

      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <HomePage />
            </ErrorBoundary>
          }
        />
        <Route
          path="/Signup"
          element={
            <ErrorBoundary>
              <SignUp />
            </ErrorBoundary>
          }
        />
        <Route
          path="/Login"
          element={
            <ErrorBoundary>
              <SignIn />
            </ErrorBoundary>
          }
        />
        <Route
          path="/profile"
          element={
            <ErrorBoundary>
              <UserProfile />
            </ErrorBoundary>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
