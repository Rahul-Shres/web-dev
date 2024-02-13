"use client";

import { SessionProvider } from "next-auth/react";

const Provider = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
// any component that is rendered inside of the Provider component
// will be able to access the user's session information, such as
// their username, email address, and whether or not they are currently logged in.