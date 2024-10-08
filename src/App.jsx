import Header from "./Componentes/Header"
import { Outlet } from 'react-router-dom';
import Footer from "./Componentes/Footer";

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
