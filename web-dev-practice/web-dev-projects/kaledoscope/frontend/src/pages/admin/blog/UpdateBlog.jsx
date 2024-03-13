import React, { useState, useEffect,useRef } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../../../http/index';
import JoditEditor from 'jodit-react';

const UpdateBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const editor = useRef(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await API.get(`/api/blog/${id}`);
        const { title, subtitle, content } = response.data;
        setTitle(title);
        setSubtitle(subtitle);
        setContent(content);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchBlogPost();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('subtitle', subtitle);
      formData.append('content', content);
      if (image) {
        formData.append('image', image);
      }
      await API.put(`/api/blog/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Manually navigate to view single blog page after updating
      window.location.href = `/blog/${id}`;
    } catch (error) {
      console.error('Error updating blog post:', error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-gray-100 dark:bg-gray-900 dark:text-gray-100"    >

       {/* Page Content */}
       <main id="page-content" className="flex max-w-full flex-auto flex-col">
          <div className="relative mx-auto flex min-h-dvh w-full max-w-10xl items-center justify-center overflow-hidden p-4 lg:p-8">
            {/* Sign In Section */}
            <section className="w-full max-w-full py-6">
              {/* Header */}
              <header className="mb-10 text-center">
              <h2 className="mb-2 inline-flex items-center space-x-2 text-2xl font-bold">

                Update Blog Post</h2>

              </header>
              {/* END Header */}
              {/* Sign In Form */}
              <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100">
                <div className="grow p-5 md:px-16 md:py-12">
      <form className="space-y-6"  onSubmit={handleUpdate}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="text-sm font-medium bg-white text-black w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500  "/>
        </div>
        <div>
          <label>Subtitle:</label>
          <input type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} className="text-sm font-medium bg-white text-black w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
        </div>
        <div>
          <label>Update Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} className="text-sm font-medium w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
        </div>
        <div>
          <label>Content:</label>
          <JoditEditor
                        ref={editor}
                        value={content}
                        onChange={newContent => setContent(newContent)}
                        className='text-black'
                      />
          {/* <textarea value={content} onChange={(e) => setContent(e.target.value)} className="text-sm font-medium"/> */}
        </div>
        
        <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Update Post</button>
      </form>
      </div>

</div>
{/* END Footer */}
</section>
            {/* END Sign In Section */}
          </div>
        </main>
    </div>
  );
};

export default UpdateBlog;
