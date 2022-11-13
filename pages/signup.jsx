import React from 'react'
import { useRouter } from 'next/router';
import { useWindowDimensions } from '../hooks'
import loadable from '@loadable/component'

const Link = loadable(()=>import('next/link'))
const Image = loadable(()=>import("next/image"))

import JkcareLogo from '../components/assets/jkcare-logo.png'

function SignUp() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-24 md:pb-20">
              <Link href='/'>
                <Image src={JkcareLogo} width='80' className='mx-auto mb-8'/>
              </Link>
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-12">
                <h1 className='text-3xl font-bold text-[#2A2867]'>Create Your Account</h1>
              </div>

              <div className="max-w-sm mx-auto">
                <form>

                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-base font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                      <input id="email" type="email" className="form-input w-full p-2 text-gray-800" placeholder="Enter your email address" required/>
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-base font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
                      <input id="name" type="text" className="form-input w-full p-2 text-gray-800" placeholder="Enter your name" required/>
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-base font-medium mb-1" htmlFor="name">Phone <span className="text-red-600">*</span></label>
                      <input id="name" type="text" className="form-input w-full p-2 text-gray-800" placeholder="Enter your name" required/>
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-base font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                      <input id="password" type="password" className="form-input w-full p-2 text-gray-800" placeholder="Enter your password" required/>
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-base font-medium mb-1" htmlFor="password">Confirm Password <span className="text-red-600">*</span></label>
                      <input id="password" type="password" className="form-input w-full p-2 text-gray-800" placeholder="Enter your password" required/>
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="text-base font-semibold px-4 py-2 rounded text-white bg-[#2A2867] hover:bg-blue-700 w-full">
                        Sign Up
                      </button>
                    </div>
                  </div>

                  <div className="text-sm text-gray-500 text-center mt-3">
                    By creating an account, you agree to the{" "}
                    <a className="underline" href="#0">terms & conditions</a>, and our{" "}
                    <a className="underline" href="#0">privacy policy</a>.
                  </div>
                </form>

                <div className="text-gray-600 text-center mt-6">
                  Already have an account? <a href='/login' className='text-center text-sm text-blue-700'>Login</a>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignUp;