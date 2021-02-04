import Card from './Components/Card';
import {Route} from 'react-router-dom';
import Main from './Components/Main';
import Details from './Components/Details';
import Header from './Components/Header';
import SearchBar from './Components/Searchbar'

function App() {
  return (
    <div className="App">
    <Route path = '/'component={Header} />
    <Route exact path='/' component={SearchBar} />
    <Route exact path = '/' component={Main} />
    <Route exact  path="/products/:id" 
        component={Details}
        />

     
    </div>);
}

export default App;
