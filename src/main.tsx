import ReactDOM from 'react-dom/client'
import './index.scss'
import AppLoader from './AppLoader'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppLoader />
)

postMessage({ payload: 'removeLoading' }, '*')