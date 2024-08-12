/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Loading from '@/components/Loading'

const Home = lazy(() => import('@/pages/Home'))
const Blog = lazy(() => import('@/pages/Blog'))
const Code = lazy(() => import('@/pages/Code'))
const About = lazy(() => import('@/pages/About'))
const Layout = lazy(() => import('@/pages/Layout'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'blog',
        element: (
          <Suspense fallback={<Loading />}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: 'code',
        element: (
          <Suspense fallback={<Loading />}>
            <Code />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <div>404.。。。。</div>,
  },
])

export default router
