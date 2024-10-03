import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { Provider } from './context/NoteAapp.jsx'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'
import { applyMiddleware, createStore } from '@reduxjs/toolkit'
import reducer from './reducer/index.jsx'


const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
