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
    </BrowserRouter>
  );
}

export default App;
