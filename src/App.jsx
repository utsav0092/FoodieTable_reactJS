import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import Success from "./Pages/Success.jsx";
import Error from "./Pages/Error.jsx";
import ProtectedRoute from './Components/ProtectedRoute.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/success' element={<ProtectedRoute element={<Success />} />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App