import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/estaticos/navbar/navbar';
import Footer from './componentes/estaticos/footer/footer';
import CadastroUsuario from './paginas/cadastro/CadastroUsuario';
import Home from './paginas/home/home';
import Login from './paginas/login/login';
import './App.css';
import ListaTema from './componentes/temas/listatemas/ListaTema';
import ListaPostagem from './componentes/postagens/listapostagem/ListaPostagem';
import CadastroPost from './componentes/postagens/cadastroPost/CadastroPost';
import CadastroTema from './componentes/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './componentes/postagens/deletarPostagem/deletarPostagem';
import DeletarTema from './componentes/temas/deletarTema/DeletarTema';


function App() {
  return (
    <Router>
      <Navbar />
    
        <div style={{ minHeight: '100vh' }}>
        <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/cadastrousuario" element={<CadastroUsuario />} />

        <Route path="/temas" element={<ListaTema />} />

        <Route path="/posts" element={<ListaPostagem />} />

        <Route path="/formularioPostagem" element={<CadastroPost />} />

        <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

        <Route path="/formularioTema" element={<CadastroTema />} />

        <Route path="/formularioTema/:id" element={<CadastroTema />} />

        <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

        <Route path="/deletarTema/:id" element={<DeletarTema />} />


        </Routes>
        </div>
     
      <Footer />
    </Router>
  );
}

export default App;