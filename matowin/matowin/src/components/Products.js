import React from 'react';
import "../assets/css/Products.css";
import home from "../assets/images/home_img.jpeg";
import alloy from "../assets/images/alloy.jpg";
import Cotter from "../assets/images/cotter.jpg";
import Bushes from "../assets/images/Bushes.jpg";
import Casting from "../assets/images/castings.jpg";
import arches from "../assets/images/arches.jpg";
const Products = () => {

    const productsData = [
        {
            img: home,
            name: 'Shackle Pins'
        },
        {
            img: alloy,
            name: 'Alloy'
        },
        {
            img: Cotter,
            name: 'Cotter'
        },
        {
            img: Bushes,
            name: 'Bushes'
        },
        {
            img: Casting,
            name: 'Casting'
        },
        {
            img: arches,
            name: 'Arches'
        }
    ]

  return (
      <div id='products' className='matowin_products'>
        <h1><span className='service'>O</span>ur <span className='service'>P</span>roducts</h1>
        <div className='products_lists'>
            {productsData?.map((obj,i)=>{
                return <div className='product'>
                <img src={obj?.img} alt='products' />
                <div className='product_name'>
                <p>{obj?.name}</p>
                </div>
            </div>
            })}
            
        </div>
    </div>
  )
}

export default Products
