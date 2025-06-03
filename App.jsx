import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import SignUp from './Authentication/SignUp';
import SignIn from './Authentication/SignIn';
import HomePage from './HomePage';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import HomeHeader from './HomeHeader';
// import Dashboard from './Dashboard'; // Uncomment when ready

// Handles conditional headers based on route
const Layout = ({ children }) => {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  const isAuthPage = path === '/login' || path === '/signup';
  const HeaderComponent = isAuthPage ? Header : HomeHeader;

  return (
    <>
      <HeaderComponent />
      {children}
    </>
  );
};
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
      <ErrorBoundary>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            {/* Add a 404 fallback if needed */}
          </Routes>
        </Layout>
      </ErrorBoundary>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
