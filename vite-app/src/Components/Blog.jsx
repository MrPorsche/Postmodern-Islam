import React from 'react'

const Blog = () => {
  const posts = [
    {
      title: 'Post 1', 
      body: 'Lorem ipsum...'
    },
    {
      title: 'Post 2',
      body: 'Lorem ipsum...'
    }
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto">
        
        <h1 className="text-3xl font-bold text-center mb-6">My Blog</h1>

        {posts.map(post => (
          <div key={post.id} className="bg-white shadow rounded p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            
            <p className="text-gray-600 mb-6">{post.excerpt}</p>
            
            <a href="#" className="inline-block bg-indigo-500 text-white rounded py-2 px-4 hover:bg-indigo-600">
              Read More
            </a>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default Blog;