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
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* <!-- Grid --> */}
  <div class="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
    {/* <!-- Card --> */}
    <Card blogPosts={blogPosts} />
      
    {/* <!-- End Card --> */}
  </div>
  {/* <!-- End Grid --> */}
</div>
{/* <!-- End Card Blog --> */}
    </>
  )
}

export default ViewAllBlogPost