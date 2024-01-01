import React from "react";

import { FaLinkedinIn, FaTwitter, FaFacebook } from "react-icons/fa";

const Author = () => {
  return (
    <section className="flex-grow bg-orange-950/10">
      {/* Desktop page */}
      <div className="md:flex hidden w-[90%] h-full m-auto px-16 py-4 space-x-8">
        <div className="w-full">
          <div className="h-[50%] flex space-x-10 p-4">
            <div className="w-[50%] h-64 rounded-3xl border-4 border-yellow-800 shadow-2xl bg-ProfilePic bg-cover"></div>
            <div className="w-[50%] p-4">
              <div className="flex flex-col items-center space-y-5">
                <h1 className="uppercase text-center font-extrabold text-2xl text-shadow">
                  abdool kader sayed
                </h1>
                <a href="https://www.linkedin.com/in/abdool-kader-sayed-0613380220/" target="_blank"
                className="hover:text-linkedin"><FaLinkedinIn size={30} /></a>
                <a href="https://twitter.com/" target="_blank"
                className="hover:text-twitter"><FaTwitter size={30} /></a>
                <a href="https://facebook.com/" target="_blank"
                className="hover:text-facebook"><FaFacebook size={30} /></a>
              </div>
            </div>
          </div>
          <div className="h-[50%] p-4">
            <div className="h-full pr-14">
              <p className="text-justify">
                Mr. A.K.Sayed <a href="https://www.linkedin.com/in/abdool-kader-sayed-0613380220/"
                target="_blank" className="uppercase font-bold hover:text-yellow-100 text-shadow cursor-pointer">
                  "abdool kader sayed"
                  </a> was born in <a href="https://en.wikipedia.org/wiki/Glencoe,_KwaZulu-Natal"
                  target="_blank" className="font-bold hover:text-yellow-100 text-shadow cursor-pointer">
                    Glencoe
                    </a> in South Africa on the 23 rd November 1941. In his youth, he was a founding member and secretary of the <a href="https://mym.za.org/" target="_blank"
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
                department and then in the Biometrics, computer and records department. During the 80’s he owned a chain of bakeries.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="h-[75%] p-4">
            <div className="h-full pl-20 flex flex-col space-y-6">
              <p className="text-justify">
                Furthermore, during the last 50 years, Mr. Sayed has written numerous letters defending Islam in the
                mass media. Some of the letters are entitled as,
              </p>
              <ul className="pl-4 list-disc">
                <li className="font-extrabold hover:text-yellow-800 hover:border-b-2 hover:border-black cursor-pointer">Islam is compatible with democracy</li>
                <li className="font-extrabold hover:text-yellow-800 hover:border-b-2 hover:border-black cursor-pointer">Islam is less flawed than the constitution of South Africa</li>
                <li className="font-extrabold hover:text-yellow-800 hover:border-b-2 hover:border-black cursor-pointer">All fundamentalism is evil</li>
                <li className="font-extrabold hover:text-yellow-800 hover:border-b-2 hover:border-black cursor-pointer">Godless science is an impaired vision</li>
                <li className="font-extrabold hover:text-yellow-800 hover:border-b-2 hover:border-black cursor-pointer">South Africa’s diversity is its strength</li>
              </ul>
              <p className="text-justify">
                In addition, Mr. Sayed has lived through the apartheid era and also witnessed the making of the new
                rainbow nation. Thus, he has a very broad and deep knowledge and experience of science, religion,
                politics and business, which inspired him to perceive the post- modernway of life that is found in
                the Faith of Abraham.
              </p>
            </div>
          </div>
          <div className="h-[25%] p-4 border-[1px]">
            <div className="flex flex-col text-center">
              <span><a href="">Article 1</a></span>
              <span><a href="">Article 2</a></span>
              <span><a href="">Article 3</a></span>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile page */}
      <div className="md:hidden w-full h-full m-auto flex flex-col p-2">
        <div className="w-full h-full py-2 pl-2 flex space-x-24">
          <div className="w-[48%] p-2 flex flex-col">
            <h1 className="uppercase text-center text-2xl font-extrabold text-shadow">abdool kader sayed</h1>
            <div className="flex h-full space-x-2">
              <div className="w-[80%] bg-ProfilePic bg-cover rounded-full border-4 border-yellow-800"></div>
              <div className="w-[20%] pt-4 flex flex-col items-center space-y-16">
                <a href="https://www.linkedin.com/in/abdool-kader-sayed-0613380220/" target="_blank"
                className="hover:text-linkedin"><FaLinkedinIn size={30} /></a>
                <a href="https://twitter.com/" target="_blank"
                className="hover:text-twitter"><FaTwitter size={30} /></a>
                <a href="https://facebook.com/" target="_blank"
                className="hover:text-facebook"><FaFacebook size={30} /></a>
              </div>
            </div>
          </div>
          <div className="w-[48%] pl-6 pr-1">
            <p className="text-[12.8px] text-justify">
              Furthermore, during the last 50 years, Mr. Sayed has written numerous letters defending Islam in the
              mass media. Some of the letters are entitled as,
            </p>
            <ul className="text-[12.8px] pl-4 list-disc text-shadow text-shadow-white">
              <li className="font-bold hover:text-yellow-800 hover:border-b-2 hover:border-black cursor-pointer">Islam is compatible with democracy</li>
              <li className="font-bold hover:text-yellow-800 hover:border-b-2 hover:border-black cursor-pointer">Islam is less flawed than the constitution of South Africa</li>
              <li className="font-bold hover:text-yellow-800 hover:border-b-2 hover:border-black cursor-pointer">All fundamentalism is evil</li>
              <li className="font-bold hover:text-yellow-800 hover:border-b-2 hover:border-black cursor-pointer">Godless science is an impaired vision</li>
              <li className="font-bold hover:text-yellow-800 hover:border-b-2 hover:border-black cursor-pointer">South Africa’s diversity is its strength</li>
            </ul>
          </div>
        </div>
        <div className="w-full h-full py-2 pl-2 flex space-x-24">
          <div className="w-[48%] p-2 flex flex-col space-y-4">
          <p className="text-[12.8px] text-justify"> Mr. A.K.Sayed <a href="https://www.linkedin.com/in/abdool-kader-sayed-0613380220/"
              target="_blank" className="uppercase font-bold hover:text-yellow-100 text-shadow cursor-pointer">
                "abdool kader sayed" </a> was born in <a href="https://en.wikipedia.org/wiki/Glencoe,_KwaZulu-Natal"
              target="_blank" className="font-bold hover:text-yellow-100 text-shadow cursor-pointer">
                Glencoe </a> in South Africa on the 23 rd November 1941. In his youth, he was a founding member and secretary
                of the <a href="https://mym.za.org/"
              target="_blank" className="font-bold hover:text-yellow-100 text-shadow cursor-pointer"> Muslim Youth Movement
                (MYM, Tongaat) </a> and secretary and trustee of the <a href="https://www.facebook.com/p/Buffelsdale-muslim-society-100064997350268/"
              target="_blank" className="font-bold hover:text-yellow-100 text-shadow cursor-pointer">
                Buffelsdale Muslim Society </a> in Tongaat (KZN) in 1961 and then for the next 18 years he was employed at the <a href="https://sasa.org.za/"
              target="_blank" className="font-bold hover:text-yellow-100 text-shadow cursor-pointer"> South African Sugar Association </a> Experiment
                Station at Mount Edgecombe (KZN), first working in the Agronomy department and then in the Biometrics, computer and records department.
                During the 80’s he owned a chain of bakeries.
            </p>
          </div>
          <div className="w-[48%] pl-7 pr-1 flex flex-col space-y-4">
            <p className="text-[12.8px] text-justify">
              In addition, Mr. Sayed has lived through the apartheid era and also witnessed the making of the new
              rainbow nation. Thus, he has a very broad and deep knowledge and experience of science, religion,
              politics and business, which inspired him to perceive the post- modernway of life that is found in
              the Faith of Abraham.
            </p>
            <div className="flex flex-col items-center text-red-50">
              <span className="hover:border-b-[1px]"><a href="">Article 1</a></span>
              <span className="hover:border-b-[1px]"><a href="">Article 2</a></span>
              <span className="hover:border-b-[1px]"><a href="">Article 3</a></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Author;