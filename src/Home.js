import React from 'react';
import { Helmet } from 'react-helmet';

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Home Page - My React App</title>
                <meta name="description" content="Welcome to the homepage of our awesome React application." />
                <meta name="keywords" content="React, Home, Application" />
                <meta property="og:title" content="Home Page - My React App" />
                <meta property="og:description" content="Welcome to the homepage of our awesome React app." />
                <meta property="og:type" content="website" />
            </Helmet>
            <h1>Welcome to the Home Page</h1>
        </div>
    );
};

export default HomePage