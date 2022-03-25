import React, { useState } from "react";
import { createPost } from "./service/api";
import {useNavigate} from "react-router-dom";


const initialvalue = {
  title:"",
  cost:"",
  picture:"",
  createDate:new Date()
};

const Blog =() => {
    const url = "https://images.pexels.com/photos/7938382/pexels-photo-7938382.jpeg";
    
    const [post, setPost] = useState(initialvalue);
    const navigate = useNavigate();
     
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]:e.target.value })
    }

    const savePost = async (e) =>{
       console.log(post); 
       e.preventDefault();
       await createPost(post); 
       navigate("/");
    }

    return(
        <form onSubmit={savePost}>
        <div style={{width:"100vw", height:"90vh"}}>
            <div className="detailCont" style={{ margin:"auto", marginTop:"10vh", backgroundColor:"#F4F4F6", borderRadius: "3%"}}>
               <img style={{ width:"100%",height:"65%", objectFit:"cover",  borderRadius: "3%" ,marginBottom:"3%"}} src= {post.picture || url}></img> 
               <div style={{ marginTop:"3%",backgroundColor:"#F4F4F6" ,display:"flex", flexDirection:"column", justifyContent:"space-evenly", height:"35%"}}>
                 <input onChange={(e) => handleChange(e)}  style={{borderStyle:"none", margin:"2%"}} name="title"  style={{height:"10%", borderRadius:"4px", padding:"12px 20px" ,border:"none"}} placeholder="title" value={post.title}></input>
                 <input onChange={(e) => handleChange(e)} style={{borderStyle:"none", margin:"2%"}} name="cost"  style={{height:"10%", borderRadius:"4px", padding:"12px 20px" ,border:"none"}} placeholder="cost" value={post.cost}></input>
                 <input onChange={(e) => handleChange(e)} style={{borderStyle:"none", margin:"2%"}} name="picture"  style={{height:"10%", borderRadius:"4px", padding:"12px 20px" ,border:"none"}} placeholder="image url" value={post.picture}></input>
                 <button type="submit" style={{padding:"12px", width:"20%" ,margin:"0px auto", borderRadius:"10px", border:"none", backgroundColor:"grey"}} type="submit">Create</button>
               </div>
            </div>    
        </div>
       </form>
    )
}

export default Blog;