import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="flex-grow bg-yellow-50/20 py-4 px-36">
      <div className="w-full h-full flex">
        <div className="w-[50%] border-2">
          <form action="" className="flex flex-col items-center p-4 space-y-8 border-2 border-black m-2">
            <div>
              <input
                type="text" placeholder="my name is..." required
                className="p-2 uppercase text-center rounded-full text-lg"
              />
              <input
                type="email" placeholder="my email ID is..." required
                className="p-2 uppercase text-center rounded-full text-lg" />
            </div>
            <div>
              <input
                type="text" placeholder="i'm from" required
                className="p-2 uppercase text-center rounded-full text-lg"
              />
              <input
                type="email" placeholder="subject" required
                className="p-2 uppercase text-center rounded-full text-lg" />
            </div>
            <div className="flex flex-col w-[95%]">
              <textarea name="" id="" cols="50" rows="10" className="p-4 rounded-3xl"></textarea>
            </div>
            <div className="text-center cursor-pointer">
              <a href="" className="border-[1px] rounded-full uppercase w-full px-8 py-4 font-bold text-white text-shadow">submit</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;