/*
 * Use clientID and clientSecret from here.
 * In the real world, we should use two separate config files for both development and production enviornment
 * In development environment, we can keep the credentials, but need to make sure that we've already added this file in the .gitignore file
 * In profuction environment, better use process.env
 */

module.exports = {
    googleClientID: 'XXXXXXX-XXXXXXXXXX.apps.googleusercontent.com',
    googleClientSecret: 'XXXXX-_XXXXXX_XXXXX'
};
