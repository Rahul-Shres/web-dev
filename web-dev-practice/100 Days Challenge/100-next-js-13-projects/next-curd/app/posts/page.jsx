import React from 'react'
import Link from 'next/link'; // Import the Link component from 'next/link'

async function getPostsData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  await new Promise((resolve) => setTimeout(resolve,3000));
  return res.json();
}
async function getUsersData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  await new Promise((resolve) => setTimeout(resolve,3000));
  return res.json();
}
const Post = async () => {
  // const posts  = await getPostsData();
     const [posts, users] = await Promise.all([getPostsData(), getUsersData()]);

  return (
    <div>

      
      <h1 className='text-4xl'>Post Page</h1>
      <h1>Users</h1>
      {
        users.map((user,index) => (
          <p key={index}>{user.name}</p>
        ))
      }
      <ul className='flex flex-col gap-5'>
        {
          posts.map((post) => (
            <Link key={post.id} href={`/posts/${post.id}`}>
              <li className='bg0gray-1pp 0-5 cursor-pointer'>
                <h4 className='text-xl font-bold'>{post.title}</h4>
                <p>{post.body}</p>
              </li>
            </Link>
          ))
        }
      </ul>
    </div>
  )
}

export default Post
