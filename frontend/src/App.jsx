import { useSpring, animated } from 'react-spring';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import mujerLaptopGif from './assets/image/mujerlaptop.gif';
import MainPage from './assets/components/MainPage';
import AcercaDe from './assets/components/AcercaDe';
import Contacto from './assets/components/Contacto';
import Estudiante from './assets/components/Estudiante';
import SignUp from './assets/components/SignUp';
import Login from './assets/components/Login';
import AdministratorModule from './assets/components/AdministratorModule';
import CargaMasiva from './assets/components/CargaMasiva';

function App() {
  const animation = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0)' },
  });

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <MainPage/>
              <div className='w-full h-screen flex items-start justify-between bg-gradient-to-r from-white to-indigo-600'>
                <div className='w-1/2 h-full flex flex-col items-start justify-center pl-10'>
                  <animated.h1 style={animation} className='text-indigo-600 text-5xl font-bold'>USocial</animated.h1>
                  <animated.p style={animation} className='text-indigo-600 text-xl'>Conéctate, comparte y únete a la conversación universitaria en un solo lugar.</animated.p>
                  <animated.button style={animation} className='mt-4 bg-indigo-600 text-white px-6 py-2 rounded'>Únete ahora</animated.button>
                </div>
                <div className='w-1/2 h-full flex items-center justify-center'>
                  <img src={mujerLaptopGif} alt="Mujer con laptop" className='w-3/4 h-auto' />
                </div>
              </div>
            </>
          }/>
          <Route path="/estudiante" element={<Estudiante  />} />
          <Route path="/acerca-de" element={<AcercaDe  />} />
          <Route path="/contacto" element={<Contacto  />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdministratorModule />} />
          <Route path="/carga-masiva" element={<CargaMasiva />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;