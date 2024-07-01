
import SignInForm from '@/components/Form/SignInForm';
import React from 'react';

const SignInPage = () => {
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
            <h2 className="text-2xl font-extrabold xl:text-3xl order-1">Sign In</h2>
            <div className="mt-6 w-full flex-1 order-3">
              <div className="flex flex-col items-center ">
                <button className="focus:shadow-outline flex w-full max-w-xs cursor-not-allowed items-center justify-center rounded-lg bg-indigo-100 py-3 font-bold text-gray-800 opacity-55 shadow-sm transition-all duration-300 ease-in-out hover:shadow focus:shadow-sm focus:outline-none ">
                  <div className="p rounded-full bg-white  cursor-not-allowed">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span className="ml-4 cursor-not-allowed">
                    Sign In with Google{' '}
                    <span className="text-xs italic text-gray-500">
                      (updating...)
                    </span>
                  </span>
                </button>
              </div>

              <div className="my-7 border-b text-center">
                <div className="inline-block translate-y-1/2 transform bg-white px-2 text-sm font-medium leading-none tracking-wide text-gray-600">
                  Or sign in with e-mail
                </div>
              </div>

              {/* Sign In Form */}
              <SignInForm/>
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

export default SignInPage;