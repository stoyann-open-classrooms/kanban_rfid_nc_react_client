import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
function App() {
  console.log(process.env.REACT_APP_APP_BASE_URL);
  return (
    <Router>
    <div className="flex flex-col justify-between h-screen">
      <Navbar/>
      <main>
        content 
      </main>
    </div>
      <Footer/>
    </Router>
  );
}

export default App;
