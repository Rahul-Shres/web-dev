import React, { useState } from 'react';

const Blog = ({ blog, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBlog, setEditedBlog] = useState(blog);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedBlog(blog);
  };

  const handleSave = () => {
    onUpdate(editedBlog);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    console.log(`Editing ${fieldName} to ${value}`);
    setEditedBlog({
      ...editedBlog,
      [fieldName]: value,
    });
  };
  
  

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="title"
            value={editedBlog.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subtitle"
            value={editedBlog.subtitle}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={editedBlog.description}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <span>Title: {blog.title}</span>
          <span>Subtitle: {blog.subtitle}</span>
          <span>Description: {blog.description}</span>
          <button onClick={() => onDelete(blog._id)}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </li>
  );
};

export default Blog;
