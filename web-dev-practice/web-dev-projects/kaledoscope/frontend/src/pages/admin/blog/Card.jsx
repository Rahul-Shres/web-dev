import React from 'react'
import HTMLReactParser from 'html-react-parser';
import { Link } from 'react-router-dom';

export const Card = ({blogPosts}) => {
    console.log(blogPosts)
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {/* Card 1 */}
        
         {/* Mapping over blogPosts and rendering Card component for each */}
         {blogPosts.map(blogPost => (
          <a key={blogPost._id} className="group rounded-xl overflow-hidden focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
            <div className="sm:flex">
              <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src={HTMLReactParser(blogPost.image)} alt={HTMLReactParser(blogPost.title)} />
              </div>
              <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">{HTMLReactParser(blogPost.title)}</h3>
                <h2 className="text-lg font-thin text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">{blogPost.subtitle}</h2>
                {/* <p className="mt-3 text-gray-600 dark:text-gray-400">{HTMLReactParser(blogPost.content)}</p> */}
                <Link to={`/blog/${blogPost._id}`} className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                  Read more 
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </Link>

              </div>
            </div>
          </a>
        ))} 

        
      
    </div>
  )
}
