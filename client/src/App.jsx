import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre-nosotros' element={<About />} />
        <Route path='/perfil' element={<Profile />} />
        <Route path='/iniciar-sesion' element={<SignIn />} />
        <Route path='/crear-usuario' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}
