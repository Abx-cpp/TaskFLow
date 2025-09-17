import React, { useEffect } from 'react';
import {FaTasks, FaUserFriends , FaCheckCircle} from 'react-icons/fa'
import {FiFacebook , FiTwitter, FiInstagram} from 'react-icons/fi'

const App = () => {

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const onScroll = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100){
          section.classList.add("visible")
        }
      })
    }
    window.addEventListener("scroll",onScroll);
    onScroll();
    return () => window.removeEventListener("scroll",onScroll); 
  } , []);

  return (
    <>
    <div className='font-sans'>

      {/* This  is the header / top /  hero section */}

      <section className='bg-yellow-400 text-black py-16 px-6 text-center rounded-2xl'>
        <h1 className='text-5xl font-bold mb-4'>TaskFlow</h1>
        <p className='text-lg mb-6'>A tool that helps you organize your task seamlessly.</p>
        <button
        className='bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition'
        > Get Started 
        </button>
      </section>

        {/* This is the App features section */}

            <section className="section py-16 px-6 text-center bg-white rounded-3xl">
        <h2 className="text-3xl font-bold mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FaTasks className="text-4xl mx-auto mb-4 text-yellow-500" />
            <h3 className="text-xl font-semibold mb-2">Organize Tasks</h3>
            <p>Keep all your tasks in one simple dashboard.</p>
          </div>
          <div className="p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FaUserFriends className="text-4xl mx-auto mb-4 text-yellow-500" />
            <h3 className="text-xl font-semibold mb-2">Collaborate</h3>
            <p>Work together with your team in real time.</p>
          </div>
          <div className="p-6 rounded-2xl shadow hover:shadow-lg transition">
            <FaCheckCircle className="text-4xl mx-auto mb-4 text-yellow-500" />
            <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
            <p>Monitor progress and complete tasks efficiently.</p>
          </div>
        </div>
      </section>


      {/* THis is the review section */}
         <section className="section py-16 px-6 bg-gray-50 rounded-3xl">
        <h2 className="text-3xl font-bold mb-10 text-center">What Users Say</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <p className="italic">
              “TaskFlow changed the way I manage my day. Highly recommend!”
            </p>
            <span className="block mt-4 font-semibold">– Abubakar </span>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <p className="italic">
              “Our team productivity skyrocketed after using TaskFlow.”
            </p>
            <span className="block mt-4 font-semibold">– Umer </span>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <p className="italic">
              “Simple, effective, and beautiful design. Love it.”
            </p>
            <span className="block mt-4 font-semibold">– Arslan</span>
          </div>
        </div>
      </section>


      {/* THis is the Pricing  section */}
      <section className="section py-16 px-6 bg-white  rounded-3xl">
        <h2 className="text-3xl font-bold mb-10 text-center">Pricing</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-2xl shadow text-center hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Free</h3>
            <p className="mb-4">Basic task management</p>
            <p className="text-3xl font-bold mb-4">$0</p>
            <button className="bg-yellow-400 px-4 py-2 rounded-full hover:bg-black hover:text-yellow-400">
              Choose
            </button>
          </div>
          <div className="p-6 border rounded-2xl shadow text-center hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Pro</h3>
            <p className="mb-4">Advanced features for professionals</p>
            <p className="text-3xl font-bold mb-4">$9/mo</p>
            <button className="bg-yellow-400 px-4 py-2 rounded-full hover:bg-black hover:text-yellow-400">
              Choose
            </button>
          </div>
          <div className="p-6 border rounded-2xl shadow text-center hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Team</h3>
            <p className="mb-4">Collaboration for teams</p>
            <p className="text-3xl font-bold mb-4">$29/mo</p>
            <button className="bg-yellow-400 px-4 py-2 rounded-full hover:bg-black hover:text-yellow-400">
              Choose
            </button>
          </div>
        </div>
      </section>

      {/* This is the Footer / bottom */}
         <footer className="section bg-black text-white py-10 px-6 text-center">
        <h3 className="text-lg mb-4">Contact Us</h3>
        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="hover:text-yellow-400">
            <FiFacebook size={24} />
          </a>
          <a href="#" className="hover:text-yellow-400">
            <FiTwitter size={24} />
          </a>
          <a href="#" className="hover:text-yellow-400">
            <FiInstagram size={24} />
          </a>
        </div>
        <p className="text-sm">&copy; 2025 TaskFlow. All rights reserved.</p>
      </footer>
    </div>
    </>
  )
}

export default App;
