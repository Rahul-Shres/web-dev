"use client";

import React, { useState, useEffect } from 'react';

interface Post{
    userId: number;
    id: number;
    title: string;
    body: string;
}


const DataFetching : React.FC= () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                console.error('Error fetching data:', err);

            }
        }
        fetchData();
    }, [])
  return (
    <div>
        <h1>Data Fetching Example</h1>
        <ul>
            {posts.map((post)=>(
                <li key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    </li>
            ))}
        </ul>
    </div>
  )
}

export default DataFetching