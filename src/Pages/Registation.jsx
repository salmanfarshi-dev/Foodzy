import React, { useState } from "react";
import { Form, Input, Button } from "@heroui/react";
import PageBreadcrumb from "../Components/PageBreadcrumb";
import { HiOutlineEye } from "react-icons/hi";
import { HiOutlineEyeOff } from "react-icons/hi";
import { Link } from "react-router";

function Registation() {
  const [eye, setEye] = useState(false);

  const handleeye = () => {
    setEye(!eye);
  };

  return (
    <>
      <PageBreadcrumb title="Registation" />
      <div className="px-3 md:px-0">
        <div className="md:w-150 border border-secondary2 shadow mx-auto rounded-[5px] px-3 md:px-5 py-3 md:py-6 my-3 md:my-8 lg:my-15">
          <div className="flex justify-center items-center text-center">
            <img src="/registrationlogo.png" alt="" />
          </div>

          <Form className="w-full mt-2 md:mt-4 flex flex-col gap-4">
            <div className="flex flex-wrap justify-between gap-y-6">
              <Input
                isRequired
                errorMessage="Please enter a valid username"
                label="First Name"
                labelPlacement="outside"
                name="firstname"
                placeholder="Enter your First Name"
                type="text"
                className="md:w-[45%]"
              />
              <Input
                isRequired
                errorMessage="Please enter a valid username"
                label="Last Name"
                labelPlacement="outside"
                name="lastname"
                placeholder="Enter your Last Name"
                type="text"
                className="md:w-[45%]"
              />

              <Input
                isRequired
                errorMessage="Please enter a valid email"
                label="Email"
                labelPlacement="outside"
                name="email"
                placeholder="Enter your email"
                type="email"
                className="md:w-[45%]"
              />
              <Input
                isRequired
                errorMessage="Please enter a valid phone number"
                label="Phone Number"
                labelPlacement="outside"
                name="phone"
                placeholder="Enter your Phone Number"
                type="tel"
                className="md:w-[45%]"
              />
            </div>
            <div className="w-full ">
             <div className="relative">
               <Input
                isRequired
                errorMessage="Please enter Password"
                label="Password"
                labelPlacement="outside"
                name="password"
                placeholder="Enter your password"
                type={eye ? "text" : "password"}
              />
              <div
                onClick={handleeye}
                className="absolute top-1/2 -translate-1/2 right-5"
              >
                {eye ? <HiOutlineEye /> : <HiOutlineEyeOff />}
              </div>
             </div>
            </div>
            <Input
              isRequired
              errorMessage="Please enter this field"
              label="Address"
              labelPlacement="outside"
              name="address"
              placeholder="Enter your Address"
              type="text"
            />
            <div className="flex flex-wrap justify-between gap-y-6">
              <Input
                isRequired
                errorMessage="Please enter this field"
                label="City"
                labelPlacement="outside"
                name="city"
                placeholder="City"
                type="text"
                className="md:w-[45%]"
              />
              <Input
                errorMessage="Please enter this field"
                label="Post Code"
                labelPlacement="outside"
                name="PostCode"
                placeholder="Post Code"
                type="text"
                className="md:w-[45%]"
              />

              <Input
                isRequired
                errorMessage="Please enter this field"
                label="Country"
                labelPlacement="outside"
                name="country"
                placeholder="Country"
                type="text"
                className="md:w-[45%]"
              />
              <Input
                isRequired
                errorMessage="Please enter this field"
                label="Region State"
                labelPlacement="outside"
                name="region"
                placeholder="Region/state"
                type="tel"
                className="md:w-[45%]"
              />
            </div>

            <div className="flex justify-between items-center mt-2 md:mt-4 w-full">
              <Button className="text-sm md:text-[16px] bg-primary rounded text-white">
                SignUp
              </Button>

             <Link to="/login">
              <Button className="text-sm md:text-[16px] bg-transparent rounded ">
                Have an account?
              </Button>
             </Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Registation;
