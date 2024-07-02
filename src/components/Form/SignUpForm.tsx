import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function SignUpForm() {
  // 1. Define your form.
  //   const form = useForm<z.infer<typeof formSchema>>({
  //      resolver: zodResolver(formSchema),
  //      defaultValues: {
  //        username: "",
  //      },
  //    })

  //    // 2. Define a submit handler.
  //    function onSubmit(values: z.infer<typeof formSchema>) {
  //      // Do something with the form values.
  //      // ✅ This will be type-safe and validated.
  //      console.log(values)
  //    }
  return (
    <>
      <div className="mx-auto max-w-xs ">
        <input
          className="w-full rounded-lg border border-gray-200 bg-gray-100 px-8 py-3 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
          type="email"
          placeholder="Email"
        />
        <input
          className="mt-3 w-full rounded-lg border border-gray-200 bg-gray-100 px-8 py-3 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
          type="email"
          placeholder="Username"
        />
        <div className="mt-3 flex gap-3">
          <input
            className="w-full rounded-lg border border-gray-200 bg-gray-100 px-8 py-3 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
            type="email"
            placeholder="First Name"
          />
          <input
            className="w-full rounded-lg border border-gray-200 bg-gray-100 px-8 py-3 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
            type="email"
            placeholder="Last Name"
          />
        </div>
        <input
          className="mt-3 w-full rounded-lg border border-gray-200 bg-gray-100 px-8 py-3 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
          type="password"
          placeholder="Password"
        />
        <input
          className="mt-3 w-full rounded-lg border border-gray-200 bg-gray-100 px-8 py-3 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
          type="password"
          placeholder="Confirm Password"
        />
        <button className="focus:shadow-outline mt-5 flex w-full items-center justify-center rounded-lg bg-indigo-500 py-3 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out hover:bg-indigo-700 focus:outline-none">
          <svg
            className="-ml-2 h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <path d="M20 8v6M23 11h-6" />
          </svg>
          <span className="ml-3">Sign Up</span>
        </button>
      </div>
    </>
  );
}
