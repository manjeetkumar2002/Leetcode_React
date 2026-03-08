import { useForm } from "react-hook-form";
import { z } from 'zod'; // zod for validation
import { zodResolver } from '@hookform/resolvers/zod'; // resolver for using zod


// schema validation for signup form
// attach this schema using resolver in useForm()
const loginSchema = z.object({
  emailId :z.string().email("Invalid Email"),
  password:z.string().min(8,"Password should contain at least 8 character"),
})


const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver:zodResolver(loginSchema)}); // attaching the signSchema using resolver 

  const submittedData = (data) => {
    console.log(data)
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full p-2">
    <form className="bg-base-100 shadow-xl flex card w-96 border-2 p-7 flex-col gap-5" onSubmit={handleSubmit(submittedData)}>
      <h3 className="text-center text-3xl text-white font-bold">Leetcode</h3>
      <label for="emailId">Email</label>
      <input id="emailId" className="input"  placeholder="John@gmail.com" {...register("emailId", { required: true })} />
      {errors.emailId &&(<p className="text-error">{errors.emailId.message}</p>)}
      <label for="password">Password</label>
      <input id="password" className="input"  placeholder="John@123" {...register("password")} />
      {errors.password && (<p className="text-error">{errors.password.message}</p>)}
      <input className="btn btn-primary" type="submit" value="Sign Up"/>
    </form> 
    </div>
  );
};

export default Login;

