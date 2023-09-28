/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_MAILCHIMP_U: process.env.REACT_APP_MAILCHIMP_U,
    REACT_APP_MAILCHIMP_ID: process.env.REACT_APP_MAILCHIMP_ID,
  },
  i18n: {
    locales: ["default", "en-US", "es"],
    defaultLocale: "default",
  },
};

module.exports = nextConfig;
