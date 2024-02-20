
import {NextUIProvider} from "@nextui-org/react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AdminDashboard from "./pages/admin/dashboard/AdminDashboard";
import FaqPage from "./pages/Home/faq/FaqPage";
import CreateBlogPost from "./pages/blog/CreateBlogPost";
import BookingDemo from "./pages/Home/booking/BookingDemo";
import ViewSingleBlogPost from "./pages/blog/ViewSingleBlogPost";
import UpdateBlog from "./pages/blog/UpdateBlog";
import AddTeamMember from "./pages/Home/ourTeam/AddTeamMember";
import TeamMembers from "./pages/Home/ourTeam/OurTeams";
import ViewAllMembers from "./pages/Home/ourTeam/ViewAllMembers";
import ViewSingleMember from "./pages/Home/ourTeam/ViewSingleMember";
import GuitarClass from "./pages/Home/Courses/GuitarClass";
import Drum from "./pages/Home/Courses/Drum";
import Keyboard from "./pages/Home/Courses/Keyboard";
import MusicProduction from "./pages/Home/Courses/MusicProduction";
import Ukulele from "./pages/Home/Courses/Ukulele";
import Violin from "./pages/Home/Courses/Violin";
import WesternVocal from "./pages/Home/Courses/WesternVocal";


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

              {/* Blog Routes */}
              <Route path="/createblog" element={<CreateBlogPost />} />
              <Route path="/blog/:id" element={<ViewSingleBlogPost />} />
              <Route path="/update/:id" element={<UpdateBlog />} />

              {/* Team Routes */}
              <Route path="/addteam" element={<AddTeamMember />} />
              <Route path="/viewteams" element={<TeamMembers />} />
              <Route path="/adminteams" element={<ViewAllMembers />} />
              <Route path="/team/:memberId" element={<ViewSingleMember />} />

              {/* Admin Routes */}
              <Route path="/dashboard" element={<AdminDashboard />} />

              {/* Courses Routes */}

              <Route path="/guitarclass" element={<GuitarClass />} />
              <Route path="/drumclass" element={<Drum />} />
              <Route path="/keyboardclass" element={<Keyboard />} />
              <Route path="/musicproductionclass" element={<MusicProduction />} />
              <Route path="/ukuleleclass" element={<Ukulele />} />
              <Route path="/voilinclass" element={<Violin />} />
              <Route path="/westernvoalclass" element={<WesternVocal />} />

              
            </Routes>
          </main>
        </BrowserRouter>
      </NextUIProvider>
    </>
  )
}