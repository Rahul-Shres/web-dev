import * as React from "react";
import { useSelector } from 'react-redux';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";
import { useRef, useState, useEffect } from 'react';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  signOut,
} from '../redux/user/userSlice';

const CardUI = () => {
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const { currentUser, loading, error } = useSelector((state) => state.user);
  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);
  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profilePicture: downloadURL })
        );
      }
    );
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };

  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };


  const handleSignOut = async () => {
    try {
      await fetch('/api/auth/signout');
      dispatch(signOut())
    } catch (error) {
      console.log(error);
    }
  };

  return(
    <div className="flex items-center justify-center h-screen">
    <Card className="py-4 w-1/4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        
        <h4 className="font-bold text-large self-center cursor-pointer">Profile</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div className="flex items-center justify-center">
          
        <input
          type='file'
          ref={fileRef}
          hidden
          accept='image/*'
          onChange={(e) => setImage(e.target.files[0])}
        />
        
        <Image
          alt='profile'
          className="object-cover rounded-xl mb-3 self-center cursor-pointer"
          src={formData.profilePicture || currentUser.profilePicture}
          width={150}
          onClick={() => fileRef.current.click()}
        />
        </div>
        <p className='text-sm self-center'>
          {imageError ? (
            <span className='text-red-700'>Error uploading image (file size must be less than 2 MB)</span>
          ) : imagePercent > 0 && imagePercent < 100 ? (
            <span className='text-slate-700'>{`Uploading: ${imagePercent} %`}</span>
          ) : imagePercent === 100 ? (
            <span className='text-green-700'>Image uploaded successfully</span>
          ) : (
            ''
          )}
        </p>
        <input
          defaultValue={currentUser.username}
          type='text'
          id='username'
          placeholder='Username'
          onChange={handleChange}
          className='bg-slate-100 rounded-lg p-3 mb-3'
        />
        <input
          defaultValue={currentUser.email}
          type='email'
          id='email'
          placeholder='Email'
          onChange={handleChange}
          className='bg-slate-100 rounded-lg p-3 mb-3'
        />
        <input
          type='password'
          id='password'
          placeholder='Password'
          onChange={handleChange}
          className='bg-slate-100 rounded-lg p-3 mb-3'
        />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>  {loading ? 'Loading...' : 'Update'}</button>
        </form>
      </CardBody>
      <div className="p-3 flex justify-between mt-5">
      <Button onClick={handleSignOut} color="primary" variant="shadow">
        Sign Out
      </Button>
      <Button  onClick={handleDeleteAccount} color="danger" variant="bordered">
        Delete user
      </Button>
      
      </div>
      <p className='text-red-700 mt-5'>{error && 'Something went wrong!'}</p>
      <p className='text-green-700 mt-5'>
        {updateSuccess && 'User is updated successfully!'}
      </p>
    </Card>
    </div>
  );
}

export default CardUI
