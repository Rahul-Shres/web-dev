"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProvider } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = true;
  // for auth
  const [providers, setProviders] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProvider();
      setProviders(response);
    }
    fetchProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href='/' className="flex gap-2 flex-center">
        <Image src='./assets/images/logo.svg' alt='logo' width={30} height={30} className="object-contain" />
        <p className="logo_text">Promptopia</p>
      </Link>
      {/* Desktop navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href='/create-prompt' className="black_btn">Create Post</Link>
            <button type="button" onClick={signOut} className="outline_btn">Sign Out</button>
            <Link href='/profile'>
              <Image src='/assets/images/profile.jpg' width={40} height={40} className="rounded-full" alt="profile" />
            </Link>
          </div>
        ) : (
          <>
            {providers && Object.values(providers).map((provider) => (
              <button type="button" className="black_btn" onClick={() => signIn(provider)} key={provider.name}>Sign In</button>
            ))}
          </>
        )}
      </div>
      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image src='./assets/images/logo.svg' alt='logo' width={30} height={30} className="object-contain" onClick={() => setToggleDropDown((prev) => !prev)} />
            {toggleDropDown && (
              // Profile Toggle
              <div className="dropdown">
                <Link
                  href='/profile'
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}>My Profile</Link>
                {/* Create a new Prompt */}
                <div className="dropdown">
                  <Link
                    href='/create-prompt'
                    className="dropdown_link"
                    onClick={() => setToggleDropDown(false)}>Create Prompt</Link>
                  {/* Sign out button */}
                  <button type="button" onClick={() => {
                    setToggleDropDown(false);
                    signOut();
                  }}
                    className="mt-5 w-full black_btn">
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers && Object.values(providers).map((provider) => (
              <button type="button" className="black_btn" onClick={() => signIn(provider)} key={provider.name}>Sign In</button>
            ))}
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav;
