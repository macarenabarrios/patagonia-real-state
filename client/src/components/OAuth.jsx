import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  siginInSuccess,
  signInFailure
} from '../redux/user/userSlice.js';

export default function OAuth() {

  const dispatch = useDispatch();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL
        }),
      })
      const data = await res.json();
      dispatch(siginInSuccess(data));
      //navigate('/');
    } catch (error) {
      console.log("No se ha podido iniciar sesión con Google", error);
    }
  }

  return (
    <button
      onClick={handleGoogleClick}
      typeof='button'
      className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'
    >
      Continuar con Google
    </button>
  )
}
