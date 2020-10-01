import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import GlobalStyle from './global';
import Footer from './components/Footer';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Produtos from './pages/Produtos';
import ProdutoDetalhe from './pages/Produtos/ProdutoDetalhe';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Header />


        <Switch>
          <Route path="/" exact component={Produtos} />
          <Route path="/produto/:id" component={ProdutoDetalhe} />
          <Route path="/criar-conta" component={Cadastro} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
