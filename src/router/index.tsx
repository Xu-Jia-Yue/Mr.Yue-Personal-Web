/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('@/pages/Home'))
const Blog = lazy(() => import('@/pages/Blog'))
const Code = lazy(() => import('@/pages/Code'))
const About = lazy(() => import('@/pages/About'))
const Layout = lazy(() => import('@/pages/Layout'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading....</div>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading....</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'blog',
        element: (
          <Suspense fallback={<div>Loading....</div>}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: 'code',
        element: (
          <Suspense fallback={<div>Loading....</div>}>
            <Code />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<div>Loading....</div>}>
            <About />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element:<div>404.。。。。</div>
  }
])

export default router
