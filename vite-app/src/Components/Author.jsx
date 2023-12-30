import React from 'react';

import { FaLinkedinIn, FaTwitter, FaFacebook } from "react-icons/fa";
import profilePic from './goku.jpg'

const Author = () => {
  return (
    <section id="author" className="flex-grow py-4 px-36">
      <div className="h-full flex space-x-36">
        <div className="w-36 flex flex-col justify-center items-center space-y-24">
          <h1 className="uppercase text-center shadow-xl text-shadow">
            about author
          </h1>
          <a href="https://www.linkedin.com/in/abdool-kader-sayed-0613380220/" target="_blank"
          className="hover:text-linkedin hover:border-b-2"><FaLinkedinIn size={30} /></a>
          <a href="https://twitter.com/" target="_blank"
          className="hover:text-twitter hover:border-b-2"><FaTwitter size={30} /></a>
          <a href="https://facebook.com/" target="_blank"
          className="hover:text-facebook hover:border-b-2"><FaFacebook size={30} /></a>
        </div>
        <div className="w-96">
          <img src={profilePic} alt="profile-picture"
          className="w-full h-[574px] object-cover rounded-full border-4 border-white" />
        </div>
        <div>
          <div className="h-full text-sm text-justify flex flex-col">
          <p className="w-96 shadow-2xl p-2">
            Mr. A.K.Sayed <a href="https://www.linkedin.com/in/abdool-kader-sayed-0613380220/"
            target="_blank" className="uppercase font-bold hover:text-yellow-100 text-shadow cursor-pointer">
              "abdool kader sayed"
              </a> was born in <a href="https://en.wikipedia.org/wiki/Glencoe,_KwaZulu-Natal"
              target="_blank" className="font-bold hover:text-yellow-100 text-shadow cursor-pointer">
                Glencoe
              </a> in South Africa on the 23 rd November 1941. In his youth, he was a founding\member and secretary of the <a href="https://mym.za.org/" target="_blank"
              className="font-bold hover:text-yellow-100 text-shadow cursor-pointer">
                Muslim Youth Movement (MYM, Tongaat)
              </a> and secretary and trustee of the <a href="https://www.facebook.com/p/Buffelsdale-muslim-society-100064997350268/"
              target="_blank" className="font-bold hover:text-yellow-100 text-shadow cursor-pointer">
                Buffelsdale Muslim Society
              </a> in Tongaat (KZN) in 1961 and then for the next 18 years he was employed at
                the <a href="https://sasa.org.za/"
              target="_blank" className="font-bold hover:text-yellow-100 text-shadow cursor-pointer">
                South African Sugar Association
              </a> Experiment Station at Mount Edgecombe (KZN), first working in the Agronomy
                department and then in the Biometrics, computer and records department. During the
                80’s he owned a chain of bakeries.
          </p>
          <p className="w-96 ml-16 shadow-2xl p-2">
            Furthermore, during the last 50 years, Mr. Sayed has written numerous letters defending Islam in the mass media.
            Some of the letters are entitled <span className="font-extrabold hover:text-yellow-800 hover:border-b-2 hover:border-black cursor-pointer">Islam is compatible with democracy</span>
            , <span className="font-extrabold hover:text-yellow-800 hover:border-b-2 hover:border-black cursor-pointer">Islam is less flawed than the constitution of South Africa</span>
            , <span className="font-extrabold hover:text-yellow-800 hover:border-b-2 hover:border-black cursor-pointer">All fundamentalism is evil</span>
            , <span className="font-extrabold hover:text-yellow-800 hover:border-b-2 hover:border-black cursor-pointer">Godless science is an impaired vision</span>
            , <span className="font-extrabold hover:text-yellow-800 hover:border-b-2 hover:border-black cursor-pointer">South Africa’s diversity is its strength</span>.
          </p>
          <p className="w-96 ml-32 shadow-2xl px-2">
            In addition, Mr. Sayed has lived through the apartheid era and also witnessed the making of the new rainbow nation.
            Thus, he has a very broad and deep knowledge and experience of science, religion, politics and business, which inspired
            him to perceive the post- modernway of life that is found in the Faith of Abraham.
          </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Author;