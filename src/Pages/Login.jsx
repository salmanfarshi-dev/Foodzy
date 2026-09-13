import React from 'react'
import {Form, Input, Button} from "@heroui/react";
import PageBreadcrumb from '../Components/PageBreadcrumb';


function Login() {
  return (
      <>
  <PageBreadcrumb title="Login"/>
    <div className='md:w-100 border border-secondary2 shadow mx-auto rounded-[5px] px-3 md:px-5 py-3 md:py-6 my-3 md:my-8 lg:my-15'>
      <div className="flex justify-center items-center text-center">
        <img src="/registrationlogo.png" alt="" />
      </div>

      <Form
      className="w-full mt-2 md:mt-4 flex flex-col gap-4"

    >
     
      
      <Input
        isRequired
        errorMessage="Please enter a valid email"
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
          className=''
      />
     <div className="w-full">
           <Input
             isRequired
             errorMessage="Please enter Password"
             label="Password"
             labelPlacement="outside"
             name="password"
             placeholder="Enter your password"
             type="password"
            
           />
          </div>
    
      

     <div className="flex justify-between items-center mt-2 md:mt-4 w-full">
      <Button className='text-sm md:text-[16px] bg-primary rounded text-white'>Login</Button>
      
      <Button className='text-sm md:text-[16px] bg-transparent rounded '>SignUp</Button>
     </div>
      
      
    </Form>
    </div>
  </>
  )
}

export default Login