import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = lazy(() => import('./App'))
const OnboardingPage = lazy(() => import('./routes/onboarding'))
const SkipOrStartPage = lazy(() => import('./routes/skipOrStart'))
const ErrorPage = lazy(() => import('./routes/error'))
const MainPage = lazy(() => import('./routes/main'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/onboarding/:id',
        element: <OnboardingPage />,
      },
      {
        path: '/skipOrStart',
        element: <SkipOrStartPage />,
      },
      {
        path: '/main',
        element: <MainPage />,
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
