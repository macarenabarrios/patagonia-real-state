import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch('/api/auth/signup',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(formData)
        });

      const data = await res.json();

      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }

      setLoading(false);
      setError(null);
      navigate('/iniciar-sesion');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Registrarse</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='text' placeholder='usuario' className='border p-3 rpimded-lg' id='username' onChange={handleChange} />
        <input type='email' placeholder='email' className='border p-3 rpimded-lg' id='email' onChange={handleChange} />
        <input type='password' placeholder='contraseña' className='border p-3 rpimded-lg' id='password' onChange={handleChange} />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Cargando...' : 'Crear usuario'}</button>
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
