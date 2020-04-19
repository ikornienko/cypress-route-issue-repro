# Cypress issue with route matching containing encoded '/'

This repo is created to reproduce the issue with Cypress not properly matching
routes where query param value contains `%2F` (encoded `/`):
[cypress-io/cypress#7066](https://github.com/cypress-io/cypress/issues/7066).

To reproduce the issue run

```
npm install
npm run reproduce
```

After test fails, see the recording in `cypress/videos/issue.spec.js.mp4`.