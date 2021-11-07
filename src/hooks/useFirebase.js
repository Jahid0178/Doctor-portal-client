import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/LogIn/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getIdToken,
  signOut,
} from "firebase/auth";

// initializeFirebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");
  const auth = getAuth();
  // Providers
  const googleProvider = new GoogleAuthProvider();

  // Register new user
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to the database
        saveUser(email, name, "POST");
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
      })
      .catch((error) => {
        setError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  // Log in with email & password
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetch(`http://localhost:4000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user?.email]);

  // Log out user
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        user({});
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("http://localhost:4000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  // Register with google
  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        saveUser(user.email, user.displayName, "PUT");
        const destination = location?.state?.form || "/";
        history.push(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  return {
    user,
    admin,
    token,
    signInWithGoogle,
    registerUser,
    loginUser,
    logOut,
    error,
    isLoading,
  };
};

export default useFirebase;
