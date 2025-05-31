import { BrowserRouter, Route, Routes } from 'react-router'
import SignUp from './Authentication/SignUp'
import SignIn from './Authentication/SignIn'
import ErrorBoundary from './ErrorBoundary'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* {home} */}
        <Route />

        {/* {register or signup} */}
        <Route
          path='/Signup'
          element={
            <ErrorBoundary>
              <SignUp />
            </ErrorBoundary>
          }
        />

        {/* {login} */}
        <Route
          path='/Login'
          element={
            <ErrorBoundary>
              <SignIn/>
            </ErrorBoundary>
          }
          />

        {/* {dashboard} */}
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

export default App


