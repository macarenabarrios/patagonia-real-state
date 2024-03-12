import { useContext, createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("🍟 User 🍟", currentUser);
    });
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ createUser, googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  )
};

// Makes the context available throrought the application
export const UserAuth = () => {
  return useContext(AuthContext);
};