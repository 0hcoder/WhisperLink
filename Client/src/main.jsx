import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Provider} from "react-redux"
import './index.css'
import store from './store/store.js'
import  { Toaster } from "react-hot-toast";
import NavBar from './components/Navbar.jsx'

createRoot(document.getElementById("root")).render(
 
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
);
