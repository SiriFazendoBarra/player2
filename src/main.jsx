import { BrowserRouter } from 'react-router-dom'
import DataProvider from './context/DataContext'
import LoginProvider from './context/LoginContext'
import FavoritesProvider from './context/FavoritesContext'
import RegisterProvider from './context/RegisterContext'
import CartProvider from './context/CartContext'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import SearchProvider from './context/SearchContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <DataProvider>
    <BrowserRouter>
      <SearchProvider>
        <RegisterProvider>
          <LoginProvider>
            <FavoritesProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </FavoritesProvider>
          </LoginProvider>
        </RegisterProvider>
      </SearchProvider>
    </BrowserRouter>
  </DataProvider>
  // </React.StrictMode>,
)
