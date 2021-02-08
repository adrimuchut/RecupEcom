import React, { useEffect } from 'react';
import { getDetails } from '../Redux/actions'
import { useSelector, useDispatch } from "react-redux"
import ProductInfo from './ProductInfo'

const Details = ({match}) => {

    const dispatch = useDispatch()
    const Details = useSelector(state => state.details)
    const Img = useSelector(state => state.photos)
    const Img2 = useSelector(state => state.photos2)
    const Img3 = useSelector(state => state.photos3)
    
     
     

    useEffect(() => {
        dispatch(getDetails(match.params.id));
    }, [getDetails])
    return (
        <div class="catalogue">
          
               {
                <ProductInfo 
                    image={Img}
                    image2={Img2}
                    image3={Img3}
                    title={Details.title}
                    price={Details.price}
                    condition={Details.condition}
                    stock={Details.available_quantity}
                    id={Details.id}
                    
                />}
        </div>
    )
}

export default Details;