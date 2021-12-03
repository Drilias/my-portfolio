import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import Contact from './pages/Contact/Contact';
import Courses from './pages/Courses/Courses';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
         <Route component={Home} path='/' exact/>
         <Route component={Project} path='/projetos' exact/>
         <Route component={Courses} path='/cursos' exact/>
         <Route component={Contact} path='/contato' exact/>         
      </Switch>          
    </BrowserRouter>    
  );
}

export default App;

