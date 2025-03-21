import { createRoot } from 'react-dom/client'
import './index.css'
import ProvidersConfig from './provider/Providers'
import { RouterComponents } from './router'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
 <ProvidersConfig>
  <RouterProvider router={RouterComponents}/> 
 </ProvidersConfig>
)
