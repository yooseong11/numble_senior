import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = lazy(() => import('./App'))
const Onboarding = lazy(() => import('./routes/onboarding'))
const SkipOrStart = lazy(() => import('./routes/skipOrStart'))
const ErrorPage = lazy(() => import('./routes/error'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/onboarding/:id',
        element: <Onboarding />,
      },
      {
        path: '/skipOrStart',
        element: <SkipOrStart />,
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
