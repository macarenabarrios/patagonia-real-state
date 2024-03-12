import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

export default function Header() {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap' >
            <span className='text-slate-500'>Patagonia</span>
            <span className='text-slate-700'>Estate</span>
          </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input type='text' placeholder='Buscar...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
          <FaSearch className='text-slate-600' />
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>Inicio</li>
          </Link>
          <Link to='/sobre-nosotros'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>Nosotros</li>
          </Link>
          {user?.displayName ?
            <button onClick={handleSignOut}><li className='text-slate-700 hover:underline'>Cerrar sesión</li></button>
            :
            <Link to='/iniciar-sesion'>
              <li className='text-slate-700 hover:underline'>Iniciar sesión</li>
            </Link>
          }

        </ul>
      </div>
    </header>
  )
}
