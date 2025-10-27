import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { QueryProvider } from './app/Providers/QueryProvider'
import App from './pages/App'
import { Provider } from 'react-redux'
import { store } from './app/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryProvider>
          <App />
      </QueryProvider>
    </Provider>
  </StrictMode>,
)
