import { lazy } from 'react';
import { Footer } from './Component';
import Header from './Component/Navbar/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Counselling from './Component/Counselling/Counselling';
import CookieConsent from './Utils/CookieConsent';

const Home = lazy(() => import('./Pages/Home'));

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Home />} />
          <Route path='/counselling' element={<Counselling />} />
        </Routes> 
        <CookieConsent />
      <Footer />
    </div> 
  );
}

export default App;
