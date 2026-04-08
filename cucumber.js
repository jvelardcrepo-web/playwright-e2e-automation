// cucumber.js configuration file

const { defineConfig } = require('cucumber');

module.exports = defineConfig({
  default: {
    // Specify the location of your step definitions
    steps: ['features/step_definitions/**/*.js'],
    // Set the hooks to be used during the execution
    hooks: {
      beforeAll: () => {
        console.log('Starting tests...');
      },
      afterAll: () => {
        console.log('Tests completed!');
      },
    },
    // Configure reporters
    reporters: [
      'spec',
      'json:reports/results.json',
    ],
    // Define the feature files location
    features: ['features/**/*.feature'],
  },
});