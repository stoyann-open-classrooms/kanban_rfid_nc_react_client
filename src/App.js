import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Kanbans from "./components/pages/Kanbans";
import Orders from "./components/pages/Orders";
import Products from "./components/pages/Products";
import Requests from "./components/pages/Requests";
function App() {
  console.log(process.env.REACT_APP_APP_BASE_URL);
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
