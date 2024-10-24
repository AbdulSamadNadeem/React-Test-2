import React from 'react'
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
      <h1 className='text-4xl text-center font-light'>SignUp Form</h1>
     <div className='bg-blue-300 flex  items-center justify-center gap-8  w-[400px] h-80 mx-auto'>
     <form className='bg-blue-300 flex flex-col justify-between' onSubmit={handleSubmit(onSubmit)}>
     
     <input  className='w-40 h-12 rounded-lg border-2'  {...register("email" , {required : true})} />

     {errors.email && <span>This field is required</span>}
     
  
     <input className='w-40 h-12 rounded-lg border-2' {...register("password", { required: true })} />
 
     {errors.password && <span>This field is required</span>}
     
     <input className='w-40 h-6 border-2' type="submit" />
   </form>
     </div>
    </>
  )
}

export default Contact