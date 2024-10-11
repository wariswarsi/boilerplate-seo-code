import React from 'react';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>About Us - My React App</title>
        <meta name="description" content="Learn more about our React application and the team behind it." />
        <meta name="keywords" content="About, React, Team, Application" />
        <meta property="og:title" content="About Us - My React App" />
        <meta property="og:description" content="Learn more about our React application and the team behind it." />
        <meta property="og:type" content="website" />
      </Helmet>
      <h1>About Us</h1>
    </div>
  );
};

export default AboutPage;
