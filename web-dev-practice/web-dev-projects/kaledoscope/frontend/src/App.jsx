
import {NextUIProvider} from "@nextui-org/react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AdminDashboard from "./pages/admin/dashboard/AdminDashboard";
import FaqPage from "./pages/Home/faq/FaqPage";
import BookingDemo from "./pages/Home/booking/BookingDemo";

import GuitarClass from "./pages/Home/Courses/GuitarClass";
import Drum from "./pages/Home/Courses/Drum";
import Keyboard from "./pages/Home/Courses/Keyboard";
import MusicProduction from "./pages/Home/Courses/MusicProduction";
import Ukulele from "./pages/Home/Courses/Ukulele";
import Violin from "./pages/Home/Courses/Violin";
import WesternVocal from "./pages/Home/Courses/WesternVocal";

import CreateBlogPost from "./pages/admin/blog/CreateBlogPost";
import UpdateBlog from "./pages/admin/blog/UpdateBlog";
import ViewSingleBlogPost from "./pages/admin/blog/ViewSingleBlogPost";


import TeamMembers from "./pages/Home/ourTeam/OurTeams";
import ViewAllMembers from "./pages/admin/teams/ViewAllMembers";
import ViewSingleMember from "./pages/admin/teams/ViewSingleMember";
import AddTeamMember from "./pages/admin/teams/AddTeamMember";
import WriteBlog from "./pages/admin/blog/WriteBlog";
import ViewAllBlogPost from "./pages/admin/blog/ViewAllBlogPost";
import GallaryPage from "./pages/Home/gallary/GallaryPage";
import Gallery from "./pages/Home/gallary/Gallery";
import UserBlog from "./pages/Home/blog/UserBlog";
import AboutUs from "./pages/Home/about/AboutUs";
import AdminRegister from "./pages/admin/auth/AdminREgister";




export default function App() {
  return (
    <>
    <NextUIProvider>
        <BrowserRouter>
          <main className={"dark text-foreground bg-background"}>
            <Routes>
              {/* Home Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/booking" element={<BookingDemo />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blogpost" element={<UserBlog />} />
              <Route path="/aboutus" element={<AboutUs />} />

              {/* Blog Routes */}
              <Route path="/createblog" element={<CreateBlogPost />} />
              <Route path="/writeblog" element={<WriteBlog />} />
              <Route path="/blog/:id" element={<ViewSingleBlogPost />} />
              <Route path="/blogs" element={<ViewAllBlogPost/>} />
              {/* <Route path="/blogs" element={<ViewBlogPosts/>} /> */}
              <Route path="/update/:id" element={<UpdateBlog />} />

              {/* Team Routes */}
              <Route path="/addteam" element={<AddTeamMember />} />
              <Route path="/viewteams" element={<TeamMembers />} />
              <Route path="/adminteams" element={<ViewAllMembers />} />
              <Route path="/team/:memberId" element={<ViewSingleMember />} />

              {/* Admin Routes */}
              <Route path="/dashboard" element={<AdminDashboard />} />
              <Route path="/adminRegister" element={<AdminRegister />} />

              {/* Courses Routes */}

              <Route path="/guitarclass" element={<GuitarClass />} />
              <Route path="/drumclass" element={<Drum />} />
              <Route path="/keyboardclass" element={<Keyboard />} />
              <Route path="/musicproductionclass" element={<MusicProduction />} />
              <Route path="/ukuleleclass" element={<Ukulele />} />
              <Route path="/voilinclass" element={<Violin />} />
              <Route path="/westernvoalclass" element={<WesternVocal />} />
              {/* Courses Routes */}


              
            </Routes>
          </main>
        </BrowserRouter>
      </NextUIProvider>
    </>
  )
}