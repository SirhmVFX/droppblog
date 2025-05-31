import { BrowserRouter, Route, Routes } from 'react-router'
import SignUp from './Authentication/SignUp'
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
        <Route />

        {/* {dashboard} */}
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

export default App


