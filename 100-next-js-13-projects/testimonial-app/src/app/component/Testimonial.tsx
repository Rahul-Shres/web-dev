"use client";
import React, { useEffect, useState } from 'react';
import Button from './Button';
import { BsFillFileEarmarkPostFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { BiCommentDetail } from 'react-icons/bi';

interface TestimonialItem {
  id: number;
  name: string;
  title: string;
  body: string;
  email: string;
}

const Testimonial: React.FC = () => {
  const [testimonials, setTestimonials] = useState<string | null>(null);
  const [items, setItems] = useState<TestimonialItem[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials?.toLowerCase()}`)
      .then((response) => response.json())
      .then((data: TestimonialItem[] | {}) => {
        if (Array.isArray(data)) {
          setItems(data);
        } else {
          setItems([]);
        }
      })
      .catch((error) => console.error(error));
  }, [testimonials]);

  return (
    <div>
      <h1>Testimonial App</h1>
      <Button text="Posts" icon={<BsFillFileEarmarkPostFill />} onClick={() => setTestimonials('posts')} />
      <Button text="User" icon={<FaUserAlt />} onClick={() => setTestimonials('users')} />
      <Button text="Comments" icon={<BiCommentDetail />} onClick={() => setTestimonials('comments')} />
      <h2>{testimonials ? testimonials : 'Select from above'}</h2>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <h4>{item.title}</h4>
          <p>{item.body}</p>
          {item.email && <small>{item.email}</small>}
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
