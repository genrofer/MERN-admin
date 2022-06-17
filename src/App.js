import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Orders from './components/Orders/Orders';
import NewRestaurant from './components/NewRestaurant/NewRestaurant';
import NewBranch from './components/NewBranch/NewBranch';
import NewItem from './components/NewItem/NewItem';

function App() {
  return (
    <div className='flex'>
      <Navbar />
      <div className="next">

        <Routes>
          <Route path="/" element={<Orders />} />
          <Route path="/newrestaurant" element={<NewRestaurant />} />
          <Route path="/newbranch" element={<NewBranch />} />
          <Route path="/newitem" element={<NewItem />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
