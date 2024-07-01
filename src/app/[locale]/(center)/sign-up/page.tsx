import SignUpForm from '@/components/Form/SignUpForm';
import React from 'react';

const SignUpPage = () => {
  return (
    <div className="flex min-h-screen justify-center bg-gray-100 text-gray-900 py-4">
      <div className="m-0 flex max-h-[90vh] mt-2 max-w-screen-xl flex-1 justify-center bg-white shadow sm:m-10 sm:rounded-lg">
        <div className="p-5 sm:p-11 lg:w-1/2 xl:w-5/12">
          <div>
            <img
              src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
              className="mx-auto w-32"
            />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h2 className="text-2xl font-extrabold xl:text-3xl order-1">Sign Up</h2>
            <div className="mt-6 w-full flex-1 order-3">
              <div className="flex flex-col items-center ">
                
              </div>


              {/* Sign Up Form */}
                <SignUpForm/>
              {/*  */}
            </div>
          </div>
        </div>
        <div className="hidden flex-1 bg-indigo-100 text-center lg:flex">
          <div
            className="m-12 w-full bg-contain bg-center bg-no-repeat xl:m-16"
            style={{
              background:
                "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg');",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;