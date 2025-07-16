import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNav from "./components/SideNav";
import Dashboard from "./components/pages/Dashboard";
import Products from "./components/pages/Kart";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SideNav />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='products' element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
