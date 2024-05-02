module.exports = {
  name: 'MyApp',
  version: '1.0.0',
  extra: {
    clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
  },
  ios: {
    bundleIdentifier: 'com.example.myapp',
  },
  android: {
    package: 'com.example.myapp',
  },
};
