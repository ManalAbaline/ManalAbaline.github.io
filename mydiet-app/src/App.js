import React,{Component} from 'react';


import TopNavBar from './components/TopNavBar';
import Welcome from './components/Welcome';
import Bienvenue from './components/Bienvenue';
import keto from './components/keto';
import musclebuilding from './components/musclebuilding';
import weightloss from './components/weightloss';
import Quiz from './components/Quiz';
import Results from './components/Results';
import Footer from './components/Footer';


import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

class App extends Component {

  render () {
    return (

      <div className = "App" key={Math.random} >

      <BrowserRouter>
            
          <TopNavBar className="navigation"/>

            <Switch>
              <Route exact path='/welcome' component={Welcome} />
              <Route exact path='/bienvenue' component={Bienvenue} />
              <Route exact path='/keto' component={keto} />
              <Route exact path='/musclebuilding' component={musclebuilding} />
              <Route exact path='/weightloss' component={weightloss} />
              <Route exact path='/quiz' component={Quiz} />
              <Route exact path='/results' component={Results} />
              <Route exact path='/' component={Welcome} />
              <Route render={() => <Redirect to="/mistake"/>} />
            </Switch>

      </BrowserRouter> 

      <Footer />

      </div>

    );
  }
}

export default App
