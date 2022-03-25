import React from "react";
import { Link } from "react-router-dom";

const Product = ({item}) => {
    console.log(item.title);
    const url = item.picture || "https://images.pexels.com/photos/7938382/pexels-photo-7938382.jpeg";
    return(
        <>
                <div className="detaildiv">
                          <a style={{height:"80%",width:"100%"}} href={`details/${item._id}`}>
                                <img src={url} style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"4%"}} ></img>                              
                          </a>
                      <div className="content">
                         <p style={{color:"black" ,fontWeight:"800"}}>{item.title}</p>
                       </div>    
                </div>
               
        </>
    )
}

export default Product;