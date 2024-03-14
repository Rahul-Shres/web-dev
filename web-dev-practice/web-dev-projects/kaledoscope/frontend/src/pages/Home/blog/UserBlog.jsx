import React from 'react'
import ViewAllBlogPost from '../../admin/blog/ViewAllBlogPost'
import Appbar from '../../../components/nabvar/Navbar'
import Footer from '../footer/Footer'

const UserBlog = () => {
  return (
    <div>
        <Appbar />
        <ViewAllBlogPost />
        <Footer />
    </div>
  )
}

export default UserBlog