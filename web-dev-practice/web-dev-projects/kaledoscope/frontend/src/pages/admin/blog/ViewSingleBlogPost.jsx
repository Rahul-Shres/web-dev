import React, { useState, useEffect} from 'react';
import { API } from '../../../http/index';
import { useParams, Link } from 'react-router-dom';
import HTMLReactParser from 'html-react-parser';

const ViewSingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await API.get(`/api/blog/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  const handleDelete = async () => {
    try {
      await API.delete(`/api/blog/${id}`);

    } catch (error) {
      console.error('Error deleting blog post:', error);
    }
  };
  
  
  return (
    <div className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <div className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'></div>
      <header class="mb-4 lg:mb-6 not-format">
              <address class="flex items-center mb-6 not-italic">
                  <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <img class="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos" />
                      <div>
                          <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">Jese Leos</a>
                          <p class="text-base text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO Flowbite</p>
                          <p class="text-base text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                      </div>
                  </div>
              </address>
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{blog.title}</h1>
              <h2>{blog.subtitle}</h2>
              <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-unit-9xl h-unit-7xl">
          <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"  src={blog.image} alt={blog.title}  />
        </div>

              
      <p>{HTMLReactParser(blog.content)}</p>
     
      <Link to={`/update/${id}`}>Update Blog</Link>

      
      <button onClick={handleDelete}>Delete Blog</button>
          </header>
      

      </div>
    </div>
  );
};

export default ViewSingleBlog;
