<h1 align="center">
    MoniesPlanner
  <div>
    <a href="https://github.com/bentzi-shuster/MoniesPlaner/issues">
        <img src="https://img.shields.io/github/issues-raw/bentzi-shuster/MoniesPlaner?labelColor=303446&style=for-the-badge">
    </a>
    <a href="https://github.com/bentzi-shuster/MoniesPlaner/issues?q=is%3Aissue+is%3Aclosed">
        <img src="https://img.shields.io/github/issues-closed-raw/bentzi-shuster/MoniesPlaner?labelColor=303446&style=for-the-badge">
    </a>
    <a href="https://github.com/bentzi-shuster/MoniesPlaner">
        <img src="https://img.shields.io/github/repo-size/bentzi-shuster/MoniesPlaner?labelColor=303446&style=for-the-badge">
    </a>
    <a href="https://github.com/bentzi-shuster/MoniesPlaner">
        <img src="https://img.shields.io/github/milestones/all/bentzi-shuster/MoniesPlaner?labelColor=303446&style=for-the-badge"/>
    </a>
    <br>
  </div>
</h1>
<br>

**MoniesPlaner** is a responsive web application that allows users to manage their finances effectively by providing an interactive feedback form to capture financial data securely. This project is built using Tailwind CSS and Next.js, providing a user-friendly interface with efficient performance.

## Key Features

- **Interactive Feedback Form**: Users can easily input financial data and provide feedback through an intuitive form.
- **User Authentication**: Secure user authentication is implemented using [Auth0 Next.js SDK v3.0.0](https://github.com/auth0/nextjs-auth0/), ensuring data privacy.
- **Database Implementation**: PostgreSQL, integrated with Prisma, is used to create and manage the database, storing user information and feedback data efficiently.
- **Tailwind CSS Styling**: Tailwind CSS is leveraged to style the frontend components, ensuring a responsive and visually appealing design.
- **Next.js Framework**: The frontend is built with Next.js, offering a fast and smooth user experience.
- **Vercel Deployment**: The application is deployed on Vercel, providing easy access and seamless deployment updates.

## Setup Instructions

1. Clone the repository: 
    ```
    git clone https://github.com/bentzi-shuster/MoniesPlaner.git
    ```
2. Install dependencies: 
    ```
    npm install
    ```
3. Auth0 Setup:
   - Sign up for an Auth0 account to connect your web application with the Auth0 Identity Platform.
   - Create an application registration in the Auth0 Dashboard to get the Auth0 Domain, Auth0 Client ID, and Auth0 Client Secret.
   - Define an Auth0 Audience value within your project for secure calls to an external API.
   - Create an `.env.local` with the following environment variables:
     ```ini
     AUTH0_SECRET=KEY-VALUE
     AUTH0_BASE_URL=http://localhost:3000
     AUTH0_ISSUER_BASE_URL=https://AUTH0-DOMAIN
     AUTH0_CLIENT_ID=AUTH0-CLIENT-ID
     AUTH0_CLIENT_SECRET=AUTH0-CLIENT-SECRET
     ```
   - Set the `AUTH0_SECRET` environment variable with a randomly generated secret key using the following command:
     ```
     node -e "console.log(crypto.randomBytes(32).toString('hex'))"
     ```
   - Replace `KEY-VALUE` with the generated secret key.
   - Replace `AUTH0-DOMAIN`, `AUTH0-CLIENT-ID`, and `AUTH0-CLIENT-SECRET` with the respective values from your Auth0 Application page.
4. PostgresSQL Setup:
   - Install PostgreSQL and create a new database for the project.
   - Add these values to the `.env.local` file at the root of the project with the following environment variables:
   ```ini
    POSTGRES_URL=postgresql://<POSTGRES_USER>:<POSTGRES_PASSWORD>@<POSTGRES_HOST>:5432/<POSTGRES_DATABASE>
    POSTGRES_PRISMA_URL=postgresql://<POSTGRES_USER>:<POSTGRES_PASSWORD>@<POSTGRES_HOST>:5432/<POSTGRES_DATABASE>?schema=public
    POSTGRES_URL_NON_POOLING=postgresql://<POSTGRES_USER>:<POSTGRES_PASSWORD>@<POSTGRES_HOST>:5432/<POSTGRES_DATABASE>
    POSTGRES_USER=<POSTGRES_USER>
    POSTGRES_HOST=<POSTGRES_HOST>
    POSTGRES_PASSWORD=<POSTGRES_PASSWORD>
    POSTGRES_DATABASE=<POSTGRES_DATABASE>
   ```
   - Replace `<POSTGRES_USER>`, `<POSTGRES_HOST>`, `<POSTGRES_PASSWORD>`, and `<POSTGRES_DATABASE>` with your PostgreSQL credentials and database details.
5. Prisma Setup:
   - Install Prisma CLI globally using npm:
    ```
    npm install prisma --save-dev
    ```
   - Run the Prisma migration command to apply the database schema:
    ```
    npx prisma migrate dev
    ```
6. Run the development server: 
    ```
    npm run dev
    ```
7. Access the application at `http://localhost:3000` in your web browser.

## Contributors
