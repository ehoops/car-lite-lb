/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_MAILCHIMP_U: process.env.REACT_APP_MAILCHIMP_U,
    REACT_APP_MAILCHIMP_ID: process.env.REACT_APP_MAILCHIMP_ID,
  },
};

module.exports = nextConfig;
