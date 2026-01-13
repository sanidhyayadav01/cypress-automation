const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");

const esbuild = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const createEsbuildPlugin = esbuild.default || esbuild;

const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/cucumber-bdd-tests/**/*.feature",
    watchForFileChanges: false,
    // screenshotsFolder: "cypress/screenshots",
    // videosFolder: "cypress/videos",
    // screenshotOnRunFailure: true,
    // video: true,

    async setupNodeEvents(on, config) {
      console.log("Initializing Cypress + Cucumber + Allure framework");

      const messagesDir = path.join(__dirname, "cypress", "cucumber-messages");
      if (!fs.existsSync(messagesDir)) {
        fs.mkdirSync(messagesDir, { recursive: true });
      }

      config.env = {
        ...config.env,
        allure: true,
        allureResultsPath: "cypress/reports/allure-results",
        cucumber: {
          messages: {
            enabled: true,
            output: "cypress/cucumber-messages/cucumber.ndjson",
          },
        },
      };

      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      allureWriter(on, config);

      return config;
    },
  },
});
