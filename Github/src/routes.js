//Importar as dependências
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Importar as páginas
import Main from './pages/Main';
import SobreEmpresa from './pages/SobreEmpresa';
import Login from './pages/Login';

//Criar o componentes com as rotas
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/dashboard" component={SobreEmpresa} />
                <Route path="/contato" component={Login} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;