
import {NextUIProvider} from "@nextui-org/react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AdminDashboard from "./pages/admin/dashboard/AdminDashboard";
import FaqPage from "./pages/Home/faq/FaqPage";
import CreateBlogPost from "./pages/blog/CreateBlogPost";
import BookingDemo from "./pages/Home/booking/BookingDemo";
import ViewSingleBlogPost from "./pages/blog/ViewSingleBlogPost";
// import RtlLayout from "./pages/admin/layouts/rtl/index";
// import AdminLayout from "./pages/admin/layouts/admin/index";
// import AuthLayout from "./pages/admin/layouts/auth/index";

export default function App() {
  return (
    <>
    <NextUIProvider>
    <BrowserRouter>
    <main className={"dark text-foreground bg-background" }>
    <Routes>
       {/* <Route path="/" element={<BookingDemo />}/> */}
      <Route path="/" element={<CreateBlogPost />}/> 
      <Route path="/blog/:id" element={<ViewSingleBlogPost />} />

      {/* <Route path="/" element={<Home />}/> */}
      <Route path="/dashboard" element={<AdminDashboard />}/>
      <Route path="/faq" element={<FaqPage />}/>
      {/* <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/admin" element={<Navigate to="/admin" replace />} /> */}
      </Routes>
      </main>
      </BrowserRouter>
    </NextUIProvider>
    </>
  )
}