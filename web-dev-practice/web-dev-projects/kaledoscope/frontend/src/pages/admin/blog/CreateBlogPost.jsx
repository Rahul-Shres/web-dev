import React, { useState,useRef } from 'react';
import { API } from '../../../http/index';
import RelatedArticles from './RelatedArticles';
import UpdateBlog from './UpdateBlog';
import ViewBlogPosts from './ViewBlogPosts';
import JoditEditor from 'jodit-react';

const CreateBlogPost = () => {
  const editor = useRef(null);
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('title', title);
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


	const config = useMemo(
		{
			readonly: false, // all options from https://xdsoft.net/jodit/docs/,
			placeholder: placeholder || 'Start typings...'
		},
		[placeholder]
	);

  return (
    <div>
      <h2>Create Blog Post</h2>
      <form onSubmit={handleSubmit}  enctype="multipart/form-data" method="post">
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Content:</label>
          <JoditEditor 
          ref={editor}
          value={content}
          onChange={newContent => setContent(newContent)}

          />
          {/* <textarea value={content} onChange={(e) => setContent(e.target.value)} /> */}
        </div>
        <div>
          <label>Image:</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <button type="submit">Create Post</button>
      </form>

      <RelatedArticles />
      <ViewBlogPosts />
    </div>
  );
};

export default CreateBlogPost;
