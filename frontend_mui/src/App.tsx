import React from 'react';
import { Provider } from "react-redux";
import './App.css';
import Home from './pages/Home';
import configureStore from './store/RootStore';


const store = configureStore();

function App() {
  
  return <Provider store={store}>
    <Home />
  </Provider>

}

export default App;
