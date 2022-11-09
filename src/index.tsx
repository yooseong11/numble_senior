import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BROWSER_PATH } from './constants/path'

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
        path: `${BROWSER_PATH}/:id`,
        element: <OnboardingPage />,
      },
      {
        path: BROWSER_PATH.SKIPORSTART,
        element: <SkipOrStartPage />,
      },
      {
        path: BROWSER_PATH.MAIN,
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
