import axios from "axios";

const URL = "http://localhost:8000";

export const createPost = async (post) => {
   try{
      return await axios.post(`${URL}/create`, post) ;
      console.log(`create post successful`);
   }catch(err){
       console.log(`error in create post`,err)
   }
}

export const getAllPosts = async()=>{
   try{
       let res =  await axios.get(`${URL}/posts`);
      //  console.log(res.data);
       return res.data;
   }catch(err){
      console.log(err);
   }
}


export const getPost = async(id)=>{
   try{
       let res = await axios.get(`${URL}/post/${id}`);;
       return res.data;
   }catch(err){
      console.log(`erre on getpsot api`);
   }
}

export const updatePost = async (id, dt)=>{
   try{
       await axios.post(`${URL}/update/${id}`, dt);
   }catch(err){
      console.log(`erre on update api`);
   }
}