import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import VendingMachine from './VendingMachine';
import Food from './Food';

function App() {
  //base nave bar modified from example 
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendingMachine/>} />
        <Route path="/:name" element={<Food/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
