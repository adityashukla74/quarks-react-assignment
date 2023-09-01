module.exports = {
  collectCoverage: true,  //enables collecting coverage
  collectCoverageFrom: ['src/**/*.{js,jsx}'], //specifies files to collect coverage from
  coverageDirectory: 'coverage', //specifies folder jest will put coverage files
  testEnvironment: 'jsdom', //he test environment that will be used for testing 
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
  "\\.(css|less)$": "identity-obj-proxy"
},
} 