import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import AppHome from '../AppHome';
import Header from '../Layouts/Header';
import AboutPage from '../Pages/AboutPage'


const AppRouter =() => (

    <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" component={AppHome} exact={true} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  </BrowserRouter>

)

export default AppRouter