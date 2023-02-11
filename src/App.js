import TopBar from "./components/topbar/TopBar";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Write from "./pages/write/Write"
import Settings from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home"
import Single from './pages/single/Single'



function App() {
  const user = true;
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={user? <Home/>:<Login/>}/>
        <Route path='/register' element={user? <Home/>:<Register/>}/>
        <Route path='/write' element={user? <Write/>:<Register/>}/>
        <Route path='/settings' element={user? <Settings/>: <Register/>}/>
        <Route path='/post/:postId' element={<Single/>}/>
      </Routes>
    </Router>
  );
}

export default App;
