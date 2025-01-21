// import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Cloader, Footer, SubFooter } from './Component';
import Header from './Component/Navbar/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./Pages/Home'));

function App() {
  return (
    <div>
    <Header />
    {/* <div style={{ height: '0px', padding: '0px' }}></div> */}
    <Suspense fallback={<Cloader />}>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Suspense>
    <SubFooter />
    <Footer />
  </div>
  );
}

export default App;
