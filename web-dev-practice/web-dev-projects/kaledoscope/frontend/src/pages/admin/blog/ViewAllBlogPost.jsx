import React , {useState, useEffect}from 'react'
import { API } from '../../../http/index';
import { Link } from 'react-router-dom';

import { Card } from './Card'

const ViewAllBlogPost = () => {
    const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await API.get('/api/blog');
      setBlogPosts(response.data);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };

  return (
    <>
   {/* <!-- Card Blog --> */}
   <div className="mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
                {/* <!-- Grid --> */}
                
    {/* <!-- Card --> */}
    <Card blogPosts={blogPosts} />
          {/* <!-- End Cards --> */}
    {/* <!-- End Card --> */}
  
  {/* <!-- End Grid --> */}
</div>
{/* <!-- End Card Blog --> */}
    </>
  )
}

export default ViewAllBlogPost