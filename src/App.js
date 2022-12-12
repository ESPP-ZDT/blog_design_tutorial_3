import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage";
import Pasja from "./pages/Pasja";

function App() {
  return (
    <>


    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path="/pasja" element={<Pasja />} />
    </Routes>
    </>
  );
}

export default App;
