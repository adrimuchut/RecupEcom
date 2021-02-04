import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Redux/actions';


export default function Searchbar () {
    const [ input, setInput ] = useState('');
    const dispatch = useDispatch();

    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getProducts(input));
        setInput('');
    }
    
    return (
        <nav onSubmit={(e) => 
                handleSubmit(e)} 
                ClassName="navbar navbar-light bg-light">
          <div class="container-fluid">
            <form class="d-flex">
              <input class="form-control me-2" type="search" value={input} placeholder="Busca un producto" aria-label="Search"   onChange={e => setInput(e.target.value)}></input>
              <button class="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
        </nav>
               
            )
        }