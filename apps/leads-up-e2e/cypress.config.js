import { defineConfig } from 'cypress';

module.exports = defineConfig({
  fileServerFolder: '.',
  fixturesFolder: './src/fixtures',
  modifyObstructiveCode: false,
  video: true,
  videosFolder: '../../dist/cypress/apps/leads-up-e2e/videos',
  screenshotsFolder: '../../dist/cypress/apps/leads-up-e2e/screenshots',
  chromeWebSecurity: false,
  e2e: {
    specPattern: './src/integration/**/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: './src/support/index.ts',
  },
});
