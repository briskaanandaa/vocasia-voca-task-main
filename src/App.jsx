import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Task from "./pages/Task";
import UpdateProfile from "./pages/UpdateProfile";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] bg-slate-100 flex flex-col justify-center items-center">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/task" element={<Task />} />
          <Route path="/updateProfile" element={<UpdateProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
