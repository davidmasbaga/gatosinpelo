import React from 'react'
import { Image } from "astro:assets";
import products from "../data/products.json";


function SingleProductCard(product, url, image_url, list, width, heigth) {
   
    
    const productImg = "https://placehold.co/400x600";
    
  


  return (
    <div>
<a href={url || "#"} target="_blank">
  <div className="card card-side bg-base-200 shadow-xl p-5 my-10">
    <div className="flex flex-row justify-around content-between items-stretch">
      <figure className="pl-10">
        {/* <Image
          className="hover:scale-95 ease-in duration-150"
          src={image_url || productImg}
          alt="Comida Royal Canin Sphynx"
          width={width || 200}
          height={heigth || 400}
        /> */}
      </figure>
      <div className="card-body w-4/5">
        <div className="badge badge-accent animate-pulse">Artículo destacado</div>
        <h2 className="text-4xl text-gray-800 font-semibold">
          {product || "Título del producto"}
        </h2>
        
        <h2 className="text-4xl text-gray-800 font-semibold">
          {list}
        </h2>
        
          
        
        <div className="card-actions justify-end">
          <p
            className="bg-success hover:bg-accent text-white font-bold py-2 px-4 rounded-full text-center"
          >
            Comprar Royal Canin Sphynx
          </p>
        </div>
      </div>
    </div>
  </div>
</a>


    </div>
  )
}

export default SingleProductCard