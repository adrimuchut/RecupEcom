import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default function Card({imagen, title, price, condition, stock, id}){
return(

<div className="card" style={{width: "18rem"}}>


   <div>
       <Link className="card-img-top" to={`/products/${id}`}>
           <img src={imagen} style={{width : "10rem"}}></img>
       </Link>
       <div className="card-body" >
           <NavLink 
           to={`/products/${id}`} >
               <h5 className="card-title" > titulo {title}</h5>
           </NavLink>
           <ul className="list-group list-group-flush"> 
           <p className="list-group-item">Precio: ${price}</p>
           <p className="list-group-item">Estado: {condition}</p>
           <p className="list-group-item">Stock disponible {stock}</p>
           <p className="list-group-item">Id del producto: {id}</p>
           <a href={`/products/${id}`} class="btn btn-success">Ver Más </a>
           </ul>
      </div>
</div>
</div>
)
}



