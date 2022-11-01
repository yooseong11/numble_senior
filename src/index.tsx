import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = lazy(() => import('./App'))
const Onboarding = lazy(() => import('./routes/onboarding'))
const Splash = lazy(() => import('./routes/splash'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/onboarding/:id',
        element: <Onboarding />,
      },
      {
        path: '/splash',
        element: <Splash />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

reportWebVitals()
