import ReactDOM from 'react-dom/client'
import {BrowserRouter, RouterProvider} from 'react-router-dom'
import { router } from './router'
import './reset.sass'
import './pages/page.sass'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="https://loicmaes.github.io/oc-p5-kasa">
    <RouterProvider router={router} />
  </BrowserRouter>,
)
