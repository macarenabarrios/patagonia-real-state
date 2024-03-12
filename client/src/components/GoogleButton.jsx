import { useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function GoogleButton() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user != null) {
      navigate('/');
    }
  }, [user])

  return (
    <button
      onClick={handleGoogleSignIn}
      typeof='button'
      className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'
    >
      Continuar con Google
    </button>
  )
}
