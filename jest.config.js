module.exports = {
  rootDir: './',
  setupFilesAfterEnv: [
    '<rootDir>/scripts/node/setupTests.js',
  ],
  snapshotSerializers: [
    '<rootDir>/node_modules/enzyme-to-json/serializer',
  ],
};
