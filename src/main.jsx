import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import ErrorElement from './components/ErrorElemet.jsx'
import HomePage from './components/HomePage.jsx'
import LoginPage from './components/LoginPage.jsx'
import AccountRegisterPage from './components/AccountRegisterPage.jsx'
import { RouterProvider } from 'react-router-dom'
import ProfilePage from './components/ProfilePage.jsx'

const appRouter = createBrowserRouter([{
  path:"/",
  element : <App/>,
  children : [
    {
      path : "/",
      element : <HomePage/>
    },
    {
      path : "/login",
      element : <LoginPage/>
    },
    {
      path : "/register",
      element : <AccountRegisterPage/>
    },
    {
      path : "/profile",
      element : <ProfilePage/>
    }
  ],
  errorElement : <ErrorElement/>
}]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}>
      <StrictMode>
        <App />
      </StrictMode>
  </RouterProvider>,
)
