import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";


const Addproduct = () => {
    const [productimageUrl,setProductImgUrl]=useState(null)
    console.log(productimageUrl);
    const { register, handleSubmit,  formState: { errors } } = useForm();
const onSubmit = data => {
    const servicedata = {
        productName:data.productName,
        image:productimageUrl,
        price:data.price
    }
    console.log(servicedata)
    const method = {
        method: "POST",
        body: JSON.stringify(servicedata),
        headers:{'Content-type' : 'application/json'}
    }
    fetch( 'http://localhost:5055/addproduct',method )
    .then(res=>console.log(res))
};



const handleimage = (e) => {
   // console.log(e.target.files[0],"data");
    const imageData = new FormData(); // object
    imageData.set('key' , 'ae3c515ab41c43f012abab9c059cbb08');
     imageData.append('image', e.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload', imageData)
    .then(res => {
        setProductImgUrl(res.data.display_url)
    })
    .catch(error  =>{
        
        console.log(error)
    })
}

    return (
        <div>
            
  <form onSubmit={handleSubmit(onSubmit)}>
    
      <input className="form-control" placeholder="productName"  defaultValue="test" {...register("productName")} />
      {errors.productName && <span>This field is required</span>}
      <br/>
      <input  className="form-control" placeholder="price"  {...register("price", { required: true })} />
      {errors.price && <span>This field is required</span>}
      <br/>
      <input type='file' onClick={handleimage} placeholder="image" className="form-control" {...register("image", { required: true })} />
      {errors.image && <span>This field is required</span>}
      <br/>
      <input type="submit" />
    </form>
        </div>
            );
};

            export default Addproduct;