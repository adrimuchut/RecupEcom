import React,{useState} from 'react';
import {Carousel} from 'react-bootstrap';
import  'bootstrap/dist/css/bootstrap.min.css'; 
 

function ProductInfo({image,image2,image3,title, price, condition, stock }) {
    
   return ( 
   
     
<div className="card" >
         <div>
         <Carousel 
         style={{
         "display": "grid",
         "margin-top": "5rem",
         "justify-content": "center",
         "width": "100%"
         }}>
  <Carousel.Item interval={4000}>
    <img
   
      className="d-block w-100"
      src={image}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
    
      className="d-block w-100"
      src={image2}
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
    
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />


  </Carousel.Item>
</Carousel>
         </div>
         <style type="text/css">
    {`
    .carousel-control-next-icon{
      background-color: gray;
     
    }
    .carousel-control-prev-icon{
      background-color: gray;
     
    }
    
    
    `}
  </style>
            <h3  classClass="card-title">{title}</h3>
            <ul className="list-group list-group-flush"> 
           <p className="list-group-item">Precio: ${price}</p>
           <p className="list-group-item">Estado: {condition}</p>
           <p className="list-group-item">Stock disponible {stock}</p>
          
           
           </ul>
                
               
             
            
        </div>
    )
}


export default ProductInfo;