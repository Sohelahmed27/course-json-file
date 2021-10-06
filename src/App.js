
import './App.css';
import Courses from './Component/Courses/Courses';

import NotFound from './Component/NotFound/NotFound'
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';

import Header from './Component/Header/Header';
import Search from './Component/Search/Search';
import Contact from './Component/Contact/Contact';
import Banner from './Component/Banner/Banner';

function App() {
  return (
    <div>
     <Router>
     <Header></Header>
     <Banner></Banner>
       <Switch>
         
         <Route path='/home'>
           <Home></Home>
        </Route>
        <Route path='/search'>
          <Search></Search>

        </Route>
        <Route path='/About'>
          <About></About>
        </Route>
        <Route path='/courses'>
          <Courses></Courses>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
