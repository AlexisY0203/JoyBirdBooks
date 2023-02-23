import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductItems } from "./ProductItems.js";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { SINGLE_ITEM_QUERY2, ITEM_QUERY } from '../../lib/query'
import { useQuery } from 'urql';

// this determines how many items on page by screen size
const responsive = {
    superLargeDesktop: {
    breakpoint: { max: 4000, min: 2240 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1
  },
  desktop: {
    breakpoint: { max: 2239, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 900 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 899, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

function Product() {
    return (
      <div>
          <ProductCard/>
       </div> 
    )
}




//Building model for product card so it can be populated with data later on refer to ProductItems.js for data structure
// function ProductCard() {
   //fetch products from strapi
   //const[results] = useQuery({ query: ITEM_QUERY });
  //  const[results] = useQuery({ query: SINGLE_ITEM_QUERY2, variables: {slug: "the-hating-game"} });
     
  //  const { data, fetching, error } = results;

  //  if (fetching) return <p>Loading...</p>;
  //     if (error) return <p>Oh no... {error.message}</p>;

     

  //     const items = data.items.data;
   
    //formatting how products are displayed 
  
  
//   return (
//     <>

//       {items.map((item) => {
//       return (
//       <li key={item.attributes.slug}>
//       <div className="card">
      
//       <div className="body">
//           <Link to={`/product/}`} style={{ textDecoration: 'none', color: 'inherit'}}> 
//         <img className="image" src={item.attributes.image.data.attributes.formats.large.url} alt="book"/>
//         <h1 className="title">{item.attributes.name}</h1>
//         <p className="price">${item.attributes.price}</p>
//          </Link>
//         <p className="description">{item.attributes.description}</p>
        
       
//         </div>
      
//       </div>
//       </li>
//     )
//     })}
//     </>
//   )
// }


function ProductCard() {

     //fetch products from strapi
   const[results] = useQuery({ query: ITEM_QUERY });
     
   const { data, fetching, error } = results;

   if (fetching) return <p>Loading...</p>;
      if (error) return <p>Oh no... {error.message}</p>;

      const items = data.items.data;
      console.log(items);
  
  return (
     <div className="wrapper">
          <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
  
        
        keyBoardControl={true}
        customTransition="all .5"
       transitionDuration={500}
       containerClass="carousel-container"
       removeArrowOnDeviceType={["tablet", "mobile"]}
  
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"

        
        
>

      {items.map((item) => {
      return (
      <div key={item.attributes.slug}>
      <div className="card">
      
      <div className="body">
          <Link to={`/product/${item.attributes.slug}`} style={{ textDecoration: 'none', color: 'inherit'}}> 
        <img className="image" src={item.attributes.image.data.attributes.formats.medium.url} alt={item.attributes.name}/>
        <h1 className="title">{item.attributes.name}</h1>
        <p className="price">${item.attributes.price}</p>
         </Link>
        <p className="description">{item.attributes.description}</p>
        
       
        </div>
      
      </div>
      </div>
    )
    })}
    </Carousel>
    </div>
  )
}

export default Product;
