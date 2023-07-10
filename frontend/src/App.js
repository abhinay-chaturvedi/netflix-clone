
import './App.scss';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  const user = true;
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={user? <Home />: <Navigate to= "/register"/>}/>
        <Route path="/movies" element={ user? <Home  type="movie" />: <Navigate to= "/register"/>}/>
        <Route path="/series" element={user? <Home  type="series" />: <Navigate to= "/register"/>}/>
        <Route path="/watch" element={user? <Watch />: <Navigate to= "/register"/>}/>
        <Route path="/register" element={user? <Navigate to= "/"/>: <Register />}/>
        <Route path="/login" element={user? <Navigate to= "/"/>: <Login />}/>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
