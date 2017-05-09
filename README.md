# Frontend

Website for Aideas built with react.

## React
The react build is done using webpack.
There is only one webpack.config which handles both development and production.

The default compilation is for dev, which is your local environment.
Apart from different bits in the compilation all the variables that are different for different stages are in app/config

To create the build just type in the console:
`npm start`

## Manual Deployment
Manual Deployment is defined in the gulp file at the root. The ENV variable is already set by the gulpfile.

To deploy:
`gulp publish`

## Branches
- master: this is the production code.
- development: use this branch to develop.
