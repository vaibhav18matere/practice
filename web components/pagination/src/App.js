import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import ClientSidePagination from './components/ClientSidePagination';
import ServerSidePagination from './components/ServerSidePagination';
function App() {


  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='client' element={<ClientSidePagination />} />
          <Route path='server' element={<ServerSidePagination />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App; 
