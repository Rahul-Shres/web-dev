/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
    env:{
      MONGODB_URI:"mongodb+srv://shrestharahul388:1Mommylife$@promptopia.pmbkztr.mongodb.net/?retryWrites=true&w=majority",
      NEXTAUTH_SECRET: "codingwithrahul",
      GOOGLE_CLIENT_ID:"696250618813-vnmj6m01ok22ll6qmlnni51u9kv0t3st.apps.googleusercontent.com",
      GOOGLE_CLIENT_SECRET:"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",
    },
    images: {
      domains: ["lh3.googleusercontent.com"],
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      };
      return config;
    },
  };
  
  module.exports = nextConfig;