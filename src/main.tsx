import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FoodProvider } from './data/FoodProvider.tsx'


createRoot(document.getElementById('root')!).render(
    <FoodProvider children={<App />}/>
)
