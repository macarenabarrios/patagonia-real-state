import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Registrarse</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='usuario' className='border p-3 rpimded-lg' id='username' />
        <input type='text' placeholder='email' className='border p-3 rpimded-lg' id='email' />
        <input type='text' placeholder='contraseña' className='border p-3 rpimded-lg' id='password' />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Crear usuario</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Ya tiene una cuenta?</p>
        <Link to={'/iniciar-sesion'}>
          <span className='text-blue-700'>Iniciar sesión</span>
        </Link>
      </div>
    </div>
  )
}
