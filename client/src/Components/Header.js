import React from 'react'
import { NavLink } from 'react-router-dom';



export default function Header() {
    function home() {
        window.location.href = 'http://localhost:3000'
    }
    return (
        <div className="d-grid gap-2"> 
        <button type="button" class="btn btn-info" onClick={() => home()}> 🏘 </button>
           
        </div>
    )
}
