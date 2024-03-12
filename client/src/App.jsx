import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import { AuthContextProvider } from './context/AuthContext';

import Protected from './components/Protected';

export default function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre-nosotros' element={<About />} />
          <Route path='/perfil' element={<Protected><Profile /></Protected>} />
          <Route path='/iniciar-sesion' element={<SignIn />} />
          <Route path='/crear-usuario' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}
