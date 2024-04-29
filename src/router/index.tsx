import {createBrowserRouter, RouteObject} from 'react-router-dom'
import Home from '../pages/home'
import NotFound from '../pages/notFound'
import Layout from "../layouts/Layout.tsx"
import RentViewer from '../pages/rentViewer'
import About from "../pages/about";

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'rent/:id',
        element: <RentViewer />
      }
    ]
  }
]

export const router = createBrowserRouter(routes, {
  basename: '/oc-p5-kasa',
})
