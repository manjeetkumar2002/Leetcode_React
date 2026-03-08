import { useForm } from "react-hook-form";
import { z } from 'zod'; // zod for validation
import { zodResolver } from '@hookform/resolvers/zod'; // resolver for using zod


// schema validation for signup form
// attach this schema using resolver in useForm()
const signupSchema = z.object({
  firstName:z.string().min(3,"Name should contain atleast 3 char"),// firstname is string, minlength:3
  emailId :z.string().email("Invalid Email"),
  password:z.string().min(8,"Password should contain at least 8 character"),
})


const Signup = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver:zodResolver(signupSchema)}); // attaching the signSchema using resolver 

  const submittedData = (data) => {
    console.log(data)
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full p-2">
    <form className="bg-base-100 shadow-xl flex card w-96 border-2 p-7 flex-col justify-center items-center gap-5" onSubmit={handleSubmit(submittedData)}>
      <h3 className="text-3xl text-white font-bold">Leetcode</h3>
      <input  className="input" placeholder="John" {...register("firstName",{ required: true })} />
      {errors.firstName && (<p className="text-error">{errors.firstName.message}</p>)}
      <input className="input"  placeholder="John@gmail.com" {...register("emailId", { required: true })} />
      {errors.emailId &&(<p className="text-error">{errors.emailId.message}</p>)}
      <input className="input"  placeholder="John@123" {...register("password")} />
      {errors.password && (<p className="text-error">{errors.password.message}</p>)}
      <input className="btn btn-primary" type="submit" value="Sign Up"/>
    </form> 
    </div>
  );
};

export default Signup;

// import React, { useState } from 'react'

// const Signup = () => {
//     const [name,setName] = useState('')
//     const [email,setEmail] = useState('')
//     const [password,setPassword] = useState('')

//     const handleSubmit = (e)=>{
//         e.preventDefault()
//         console.log(name,password,email)
//         // validation ham frontend me bhi validation karenege
//         // Que : fir hamne beckend me bhi validation kyu kiya h vo isliye kyuki koi postman se bhi request maar sake without frontend
//         // form ko submit kar denge
//         // save to beckend
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name :'/>
//             <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email :'/>
//             <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password :'/>
//             <button type='submit'>Submit</button>
//         </form>
//     )
// }

// export default Signup
