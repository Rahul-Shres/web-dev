import React, { useState, useRef } from 'react';
import { API } from '../../../http/index';
import JoditEditor from 'jodit-react';
import { Link } from 'react-router-dom';



export default function WriteBlog() {
  const editor = useRef(null);

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('subtitle', subtitle);
    formData.append('content', content);
    formData.append('image', image);

    try {
      await API.post('/api/blog', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // Redirect to blog post list or do something else after successful creation
    } catch (error) {
      console.error('Error creating blog post:', error);
    }
  };

  return (
    <>
      {/* Pages: Sign In: Boxed */}

      {/* Page Container */}
      <div
        id="page-container"
        className="mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-gray-100 dark:bg-gray-900 dark:text-gray-100"
      >
        {/* Page Content */}
        <main id="page-content" className="flex max-w-full flex-auto flex-col">
          <div className="relative mx-auto flex min-h-dvh w-full max-w-10xl items-center justify-center overflow-hidden p-4 lg:p-8">
            {/* Sign In Section */}
            <section className="w-full max-w-full py-6">
              {/* Header */}
              <header className="mb-10 text-center">
                <h1 className="mb-2 inline-flex items-center space-x-2 text-2xl font-bold">
                  
                  <span>Kaledoscope Music Academy</span>
                </h1>
                {/* <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Welcome, please sign in to your dashboard
                </h2> */}
              </header>
              {/* END Header */}

              {/* Sign In Form */}
              <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100">
                <div className="grow p-5 md:px-16 md:py-12">
                <form className="space-y-6" onSubmit={handleSubmit} encType="multipart/form-data" method="post">
                    <div className="space-y-1">
                      <label htmlFor="title" className="text-sm font-medium">
                        Title:
                      </label>
                      <input
                        type="text"
                        name="title"
                        placeholder="Title of the blog"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                      />
                      <label htmlFor="subtitle" className="text-sm font-medium">
                        Subtitle:
                      </label>
                      <input
                        type="text"
                        name="subtitle"
                        placeholder="subtitle of the blog"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                      />
                      <label htmlFor="image" className="text-sm font-medium">
                        Image:
                      </label>
                      <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="Blog" className="text-sm font-medium">
                        Blog
                      </label>
                      <JoditEditor
                        ref={editor}
                        value={content}
                        onChange={newContent => setContent(newContent)}
                        className='text-black'
                      />
                      {/* <textarea 
                        className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                        value={content} 
                        placeholder="Write the Blog"

                        onChange={(e) => setContent(e.target.value)} /> */}
                    </div>
                    <div>
                   
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border border-blue-700 bg-blue-700 px-6 py-3 font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"
                      >
                         <Link to="/blogs">
                       
                        <span>Create Post</span>
                        </Link>
                      </button>
                      

                    </div>
                  </form>
                </div>

              </div>
              {/* END Sign In Form */}

              {/* Footer */}
             
              {/* END Footer */}
            </section>
            {/* END Sign In Section */}
          </div>
        </main>
        {/* END Page Content */}
      </div>
      {/* END Page Container */}

      {/* END Pages: Sign In: Boxed */}
    </>
  );
}
