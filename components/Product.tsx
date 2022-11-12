import React from "react"
import Button from "./Button"

const products = [
    {
      id: 1,
      name: ' Best Chair forner ',
      href: '#',
      imageSrc: '/img-11.png',
      imageAlt: "Front of men's Basic Tee in black.",
     
      
    },
    {
    id: 2,
    name: ' Best Chair forner ',
    href: '#',
    imageSrc: '/img-13.png',
    imageAlt: "Front of men's Basic Tee in black.",
   
    
  },


    // More products...
  ]
  
  export default function Product() {
    return (
      <div className="bg-white">
        <div className="px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-2xl tracking-tight text-[60px] text-gray-900 font-Playfairdisplay md:text-center">Our Livestock </h2>
  
          <div className="grid grid-cols-1 p-3 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-200 md:flex">
                 <div className="items-center justify-center p-4 mt-4 sm:text-center sm:mx-10 ">
                  <div>
                    <h3 className="text-sm text-[30px] sm:text-center text-gray-400 font-bold uppercase  p-6 ">
                      <a href={product.href}>
                        <span aria-hidden="true" className="" />
                        {product.name}
                      </a>
                    </h3>
                    
                  </div>
                  
                 

                       
                </div>
                <div className="w-full overflow-hidden rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-cover object-center w-full h-full lg:h-full lg:w-full"
                  />
                </div>
               
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  