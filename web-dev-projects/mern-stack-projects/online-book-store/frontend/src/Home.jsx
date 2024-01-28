import React from 'react';
import HeroSection from './pages/Hero/HeroSection';
import Display from './pages/Hero/Display';
import VerificationForm from './pages/student/userVerification/verificationForm/VerificationForm';
import VerifyOtp from './pages/student/userVerification/verifyOtp/VerifyOtp';
import AdminLogin from './pages/admin/auth/login/AdminLogin';
import ForgotPassword from './pages/admin/auth/forgotPassword/ForgotPassword';
import AdminRegister from './pages/admin/auth/register/AdminRegister';
import VerifyOtpAdmin from './pages/admin/auth/verifyOtp/verifyOtp';
import ResetPassword from './pages/admin/auth/resetPassword/ResetPassword';
import Sidebar from './pages/admin/dashboard/sidebar/Sidebar';
import StudentTable from './pages/admin/dashboard/studentTable/StudentTable';
import ApplicationProcess from './pages/Hero/application/applicationProcess/applicationProcess';
import StaffMember from './pages/admin/dashboard/staffMember/StaffMember';
import AddUniversity from './pages/admin/university/addUniversity/AddUniversity';
import UpdateUniversity from './pages/admin/university/updateUniversity/UpdateUniversity';
import UniversityList from './pages/Hero/university/universityList/UniversityList';
import SingleUniversity from './pages/Hero/university/singleUniversity/SingleUniversity';
import SingleUser from './pages/admin/dashboard/singleUser/singleUser';
import StudentDashboard from './pages/student/studentDashboard/StudentDashboard';

const Home = () => {
  return (
    <>
      <div className="w-10/12 mx-auto">
        <StudentDashboard />
        <SingleUser />
        {/* <SingleUniversity /> */}
      <UniversityList />
        <UpdateUniversity />
        <AddUniversity />
        <StaffMember />
        {/* Dashboard */}
        {/* <Sidebar /> */}
        <StudentTable />
         {/* Admin */}
         <ResetPassword />
         <VerifyOtpAdmin />
         <ForgotPassword />
         <AdminLogin />
         <AdminRegister />
         {/* Admin */}
        {/* User */}
        <ApplicationProcess />
        <VerificationForm />
        <VerifyOtp />
         {/* User */}
        <HeroSection />
        
        <Display />
      </div>
    </>
  );
};

export default Home;
