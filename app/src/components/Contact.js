
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xwkyyppr");
  if (state.succeeded) {
      return <p>Thanks for the message!</p>;
  }
  return (

      <form onSubmit={handleSubmit} method="POST" className="grid grid-cols-1 gap-y-6">

      <input
        id="email"
        type="email"
        name="email"
        autoComplete="email"
        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
        placeholder="Email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
        placeholder="Message"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
        Submit
      </button>
    </form>
  );
}

export default function Example() {
  return (
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Get in touch</h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Question/comment/concern?  Let us know!
            </p>

          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
