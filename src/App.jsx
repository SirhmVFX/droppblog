import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Authentication/SignUp';
import SignIn from './Authentication/SignIn';
import ErrorBoundary from './ErrorBoundary';
import HomePage from './HomePage'; 
import HomeHeader from '../HomeHeader';
import PostCard from './PostCard';
import UserProfile from './UserProfile'; // Import UserProfile component

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <HomePage />
              <PostCard />
            </ErrorBoundary>
          }
        />

        {/* Register or Signup */}
        <Route
          path="/Signup"
          element={
            <ErrorBoundary>
              <SignUp />
            </ErrorBoundary>
          }
        />

        {/* Login */}
        <Route
          path="/Login"
          element={
            <ErrorBoundary>
              <SignIn />
            </ErrorBoundary>
          }
        />

        {/* User Profile */}
        <Route
          path="/profile"
          element={
            <ErrorBoundary>
              <UserProfile />
            </ErrorBoundary>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
