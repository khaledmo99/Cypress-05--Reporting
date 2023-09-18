const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    reporter: "nyan",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      on("task", { downloadFile });
      // implement node event listeners here
    },
  },
});
