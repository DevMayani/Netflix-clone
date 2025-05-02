import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homescreen from "./screens/HomeScreen/homescreen";
import Loginscreen from "./screens/LoginScreen/loginscreen";
import Profilescreen from "./screens/ProfileScreen/profilescreen";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from './app/features/userSlices';
import { Provider } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscried = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in,you can set a state
        // console.log(userAuth);
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }))
      } else {
        // user is signed out or logout
        dispatch(logout());
      }
    });
    return unsubscried;
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Loginscreen />
        ) : (
          <Routes>
             <Route path="/profile" element={<Profilescreen />} />
            <Route path="/" element={<Homescreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
