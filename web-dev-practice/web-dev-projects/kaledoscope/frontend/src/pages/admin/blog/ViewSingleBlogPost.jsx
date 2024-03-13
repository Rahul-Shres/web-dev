import React, { useState, useEffect} from 'react';
import { API } from '../../../http/index';
import { useParams, Link } from 'react-router-dom';
import HTMLReactParser from 'html-react-parser';
import RelatedArticles from './RelatedArticles';
import ViewAllBlogPost from './ViewAllBlogPost';
import Appbar from '../../../components/nabvar/Navbar';
import Footer from '../../Home/footer/Footer';

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
    <>
    <Appbar />
    <div className='max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto'>
      <div className='flex justify-between px-4 mx-auto  max-w-2xl'>
        <div className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'></div>
      <header class="mb-4 lg:mb-6 not-format">
      <div class="space-y-5 md:space-y-8">
      <h1 className="text-2xl font-bold md:text-3xl dark:text-white">{blog.title}</h1>
              <h2 className='text-lg text-gray-800 dark:text-gray-200'>{blog.subtitle}</h2>
              <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-unit-9xl h-unit-7xl">
          <img class="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"  src={blog.image} alt={blog.title}  />
              </div>
              
        

              
      <p>{HTMLReactParser(blog.content)}</p>
     
      <Link to={`/update/${id}`}>Update Blog</Link>

      
      <button onClick={handleDelete}>Delete Blog</button>
      </div>
          </header>
      
      </div>
      
    </div>
    <ViewAllBlogPost />
    <Footer />
    </>
  );
};

export default ViewSingleBlog;
