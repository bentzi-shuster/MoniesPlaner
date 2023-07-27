"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import CodeSnippet from "../components/code-snippet";
import PageLayout from "../components/page-layout";
import Image from "next/image";
import HoverCardDemo from "../components/hover-card";

const Profile = () => {
  const { user, isLoading } = useUser();
  const defaultPicture =
    "https://cdn.auth0.com/blog/hello-auth0/auth0-user.png";

  if (!user) {
    return null;
  }

  return (
    <PageLayout user={user} loading={isLoading}>
      <div className="violet-gradient-bg">
      <div className="content-layout">
        <h1 id="page-title" className="text-2xl content__title">
          Profile Page
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              You can use the <strong>ID Token</strong> to get the profile
              information of an authenticated user.
            </span>
            <span>
              <strong>Only authenticated users can access this page.</strong>
            </span>
          </p>
        </div>
      </div>
      </div>
      <HoverCardDemo
            imageSrc={user.picture || defaultPicture}
            title={user.name}
            username={user.nickname}
            description={JSON.stringify(user, null, 2)}
            following={100}
            followers={2000}
            sideOffset={10}
            linkhref={user.email}
          />
    </PageLayout>
  );
};

export default Profile;