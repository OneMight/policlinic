import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { QueryProvider } from './app/QueryProvider'
import App from './pages/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>

        <App />

    </QueryProvider>
  </StrictMode>,
)
