import { Suspense, lazy } from 'react';
import { Cloader, Footer, SubFooter } from './Component';
import Header from './Component/Navbar/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Counselling from './Component/Counselling/Counselling';

const Home = lazy(() => import('./Pages/Home'));

function App() {
  return (
    <div>
      <Header />
    
      <Suspense fallback={<Cloader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Home />} />
          <Route path='/counselling' element={<Counselling />} />
        </Routes>
      </Suspense>
      <SubFooter />
      <Footer />
    </div>
  );
}

export default App;
