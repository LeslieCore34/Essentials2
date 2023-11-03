import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App-container">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
