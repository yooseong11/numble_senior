import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = React.lazy(() => import('./App'))
const Onboarding = React.lazy(() => import('./routes/onboarding'))
const Splash = React.lazy(() => import('./routes/splash'))

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
