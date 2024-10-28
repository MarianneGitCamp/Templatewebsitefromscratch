import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const{products} =useContext(ShopContext);
    const[bestSeller,setBestseller] = useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestseller(bestProduct.slice(0,5))
    }, [])
  return (
    <div className='my-10'>
     <div className='text-center text-3xl py-8'>
        <Title  text1={'BEST'} text2={'SELLERS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>nde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conséquuntur magni dolores eos qui ratione voluptatem sequi neque porro quisquam est, qui dolorem ips </p>
        </div> 
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
            bestSeller.map((item,index)=>(
              <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            ))
            }
        </div>
    </div>
  )
}

export default BestSeller
