import {Routes, Route} from "react-router-dom"
import './App.scss';
import Navbar from "./components/Navbar"
import CreateUser from "./components/CreateUser"
import UserList from "./components/UserList"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/CreateUser" element={<CreateUser />} />
          <Route path="/edit/:id" element={<CreateUser />} /> {/*For editing specific users  */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
