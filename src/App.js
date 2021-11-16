import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import ShowTimer from './Timer/ShowTimer'
import CoinList from './Bitcoin/CoinList'

import "./App.css"
export default function App() {
  return (
    <div>
             <h2>Enocta için Hazırladığım React Web Uygulamasına Hoşgeldiniz. Lütfen seçim yapınız.</h2>
    
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
          <Route path="/Timer/ShowTimer" element={<ShowTimer/>} />
          <Route path="/Bitcoin/CoinList" element={<CoinList/>} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
 
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Timer/ShowTimer" > ShowTimer</Link>
          </li>
          <li>
            <Link to="/Bitcoin/CoinList">Bitcoin List</Link>
          </li>
         
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Lütfen yukarıdan seçim yapınız.</h2>
   
    </div>
  );
}



function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
