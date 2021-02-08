import React, {useEffect} from 'react'
import { getCondition, getProducts } from '../Redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import Card from './Card';
// import '../css/Catalog.scss'



function Catalog() {
    const style = { 
        
       border:"red"
        // // grid-template-columns: " repeat(auto-fit, minmax(25rem, 25rem))",
        // gap: "0.25rem",
        // justify-content: "center",
        // width: "75%"
    }
    const dispatch = useDispatch()
    const Product = useSelector(state => state.currentproduct)
    const Products = useSelector(state => state.products)
    const Page = useSelector(state => state.currentoffset)
    const Sort = useSelector(state => state.currentsort)
    const Condition = useSelector(state => state.condition)
    let sort_asc = 'price_asc'
    let sort_desc = 'price_desc'
    let nuevo = '2230284'
    let usado = '2230581'

    useEffect(() => {
        dispatch(getProducts(Product, Page, Sort))
        dispatch(getCondition(Condition))
    }, [getProducts, getCondition])

    return (
        <div >
            <div  style={{fontSize:'20px', cursor:'pointer', justifyContent:'space-between', display:'flex', paddingTop:'20px', paddingBottom:'20px'}}>
                    <label><button type="button" className="btn btn-outline-primary" onClick={() => { dispatch(getProducts(Product, Page - 10, Sort)) }} >  ⏪        
 </button></label>
                    <button type="button" className="btn btn-outline-primary" onClick={() => { dispatch(getProducts(Product, Page + 10, Sort)) }}> ⏩ </button>

            </div>
        <div   >
            <div  >
                <div classname='sort' style={{fontSize:'20px', cursor:'pointer', justifyContent:'space-between', display:'flex', paddingTop:'20px', paddingBottom:'20px'}}>
                   <div className="btn-group" >
                        <span class="btn btn-outline-primary" onClick={() => { dispatch(getProducts(Product, Page, sort_asc)) }}>Menor Precio</span>
                    <span class="btn btn-outline-primary" onClick={() => { dispatch(getProducts(Product, Page, sort_desc)) }}>Mayor Precio</span>
                    </div>
                    <div className="btn-group">
                        <span class="btn btn-outline-primary" onClick={() => { dispatch(getCondition(Product, Page, Sort, usado)) }}>Usado </span>
                    
                    <span class="btn btn-outline-primary" onClick={() => { dispatch(getCondition(Product, Page, Sort,nuevo )) }}>Nuevo </span>
                </div>
                </div>

            <div style={{
                            "object-fit": "cover",

         "display": "grid",
         "margin-top": "5rem",
         "grid-template-columns": "repeat(auto-fit, minmax(25rem, 25rem))",
         "gap": "0.25rem",
         "justify-content": "center",
         "width": "100%",
            
            
         }}> 
            {
                Products.map(product =>
                    <Card
                    
                    imagen={product.thumbnail}
                    title={product.title}
                    price={product.price}
                    condition={product.condition}
                    stock={product.available_quantity}
                    id={product.id}
                    key={product.id}
                />)}
                </div>
            </div>
            
        </div>
        
    </div>

    )
}
export default Catalog