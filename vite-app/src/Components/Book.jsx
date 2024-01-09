import React from 'react'
import bookCover from './bookcover.jpg'
const Book = () => {
  return (
    <div className="book p-5">
    
    
    <h1 className="left-20 inset-y-60 uppercase text-start text-5xl font-extrabold text-shadow text-orange-800">About this Book:</h1>
    
    <div className="mt-5 text-start text-2xl tracking-[3px] font-semibold w-full">

       <img src={bookCover} alt="Book Cover" className="float-left w-[400px] mr-6 rounded shadow-lg px-1"/> 
       In this book, AK Sayed states that the Laws of Nature and the wider universe and all things associated with it are the only Truth and Reality there is. 
      
      These include God as Creator, free of all dogmas and doctrines of Religion; His Guidance in thecontext of His Work in Nature and the wider universe; and the secular and scientific path of the creation, not religion. In the Abrahamic Faiths, their main aim is to establish Eternal Truth and Reality in all human Speech and Knowledge and establish an objective perspective of God, Religion and Secularism. 
      They do so by using the Creeds of Abraham and the worldview teachings of Tawhid (unity and universality). Without these teachings of Bible and Qur’an, it is virtually impossible to establish one Standard way of life for all humans, both secular and religion, or one spiritual Brotherhood and Sisterhood of Mankind in the midst of all their Diverse God-given sights, sounds, holy rites, ceremonies, church/mosque, Books and Prophets. Likewise, without these teachings of Bible and Qur’an, it is virtually impossible to eliminate the dichotomy of Secular and Religion or superimpose all true knowledge of science, religion, culture, politics, etc, one on top of the other without creating any boundaries within and between them, which make them separate and exclusive. And similarly, without these teachings of the Bible and Qur’an, it is virtually impossible to solve all the problems of Religion, Secularism, Ethnicity and Nationalism, and establish the Eternal Boundaries of Free Speech, Conservatism and Liberalism, which we experience nowadays.
    </div>
  
  </div>
  );
};

/**
 * Exports the Book component as the default export for this module.
 */
export default Book;
