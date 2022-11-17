import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Kanbans from "./pages/Kanbans";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Requests from "./pages/Requests";
function App() {
  
  return (
    <Router>
    <div className="flex flex-col h-screen">
      <Navbar/>
      <main className="container mx-auto px-3 pb-12">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/kanbans" element={<Kanbans/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/requests" element={<Requests/>}/>
      </Routes>
      </main>
    </div>
      <Footer/>
    </Router>
  );
}

export default App;
