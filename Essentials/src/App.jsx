import { Outlet } from "react-router-dom";
import { ContextProvider } from "./context/context";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <ContextProvider>
      <div className="App-container">
        <NavBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
