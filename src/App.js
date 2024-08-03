import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/item/:id" element={<DetailPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;



