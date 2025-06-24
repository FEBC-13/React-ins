import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux';

// Redux
// import store from '@redux/store';

// redux toolkit
import store from '@/redux-toolkit/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </StrictMode>,
)
