import React from 'react'
import { Link } from 'react-router-dom';



export default function Header() {
    function home() {
        window.location.href = 'http://localhost:3000'
    }
    return (
        <div> 
        <div className="d-grid gap-2"> 
        <button type="button" class="btn btn-info" onClick={() => home()}> Página PRINCIPAL </button>
           
       <Link to= '/'> 
       <button class="btn btn-success"> ir a la búsqueda </button>
       </Link>
        </div>
        </div>
    )
}
