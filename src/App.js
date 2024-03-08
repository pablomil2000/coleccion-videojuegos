import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Error from './components/Error'
import Plataformas from './components/plataformas'
import Login from './components/Login'
import Registro from './components/Registro'
import Logout from './components/Logout'
import Container from './components/Container'

function App () {
  return (
    <div className='bg-clip-text bg-gradient-to-r from-primary to-secondary'>
      {/* Version 6 */ }
      <Container>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/home" element={ <Home /> } />
            <Route path="/plataformas" element={ <Plataformas /> } />


            <Route path="/login" element={ <Login /> } />
            <Route path="/registro" element={ <Registro /> } />

            <Route path="/logout" element={ <Logout /> } />

            {/* Si ninguna pagina coincide */ }
            <Route path="*" element={ <Error /> } />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
