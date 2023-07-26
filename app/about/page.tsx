"use client";

import { useUser } from '@auth0/nextjs-auth0/client'
import PageLayout from "../components/page-layout";

const About = () => {
    const { user, isLoading } = useUser();
    return (
        <PageLayout user={user} loading={isLoading}>
        <div className="content-layout">
            <h1 id="page-title" className="content__title">
            About Page
            </h1>
            <div className="content__body">
            <p id="page-description">
                <span>
                This is the about page. You can use this page to describe your
                application.
                </span>
            </p>
            </div>
        </div>
        </PageLayout>
    );
}

export default About;