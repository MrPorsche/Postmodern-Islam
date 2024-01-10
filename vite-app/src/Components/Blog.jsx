import React from 'react'

const Blog = () => {
  const posts = [
    {
      title: 'Creation and Evolution', 
      body: 'Every time the knowledge of science and religion intersect,they increase my faith in the Bible and the Qur’an ever morethan before.For example, in 2021, a scientist in Harvard Universityexplained why he believed the planet Earth was a “waterworld” with no dry land,...'
    },
    {
      title: 'Creation and Evolution', 
      body: 'Every time the knowledge of science and religion intersect,they increase my faith in the Bible and the Qur’an ever morethan before.For example, in 2021, a scientist in Harvard Universityexplained why he believed the planet Earth was a “waterworld” with no dry land,...'
    },
    {
      title: 'Creation and Evolution', 
      body: 'Every time the knowledge of science and religion intersect,they increase my faith in the Bible and the Qur’an ever morethan before.For example, in 2021, a scientist in Harvard Universityexplained why he believed the planet Earth was a “waterworld” with no dry land,...'
    },,
  ];

  return (
    <div className="py-8">
      <div className="container mx-auto">
        
        <h1 className="text-[100px] leading-[110px] text-black pg-[10px] text-start">My Blog</h1>

        <div className="flex">
          <div className="flex flex-col w-2/3">
            {posts.map(post => (
              <div key={post.id} className="p-4 mb-4">
                <h2 className="text-xl font-semibold mb-2 cursor-pointer">{post.title}</h2>
                
                <p className="text-gray-600 mb-6">{post.body}</p>
                
                
              </div>
            ))}
          </div>
          <div className='w-1/3'></div>
        </div>

        
      </div>
    </div>
  );
}

export default Blog;