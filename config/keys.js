/*
 * Use clientID and clientSecret from here.
 * In the real world, we should use two separate config files for both development and production enviornment
 * In development environment, we can keep the credentials, but need to make sure that we've already added this file in the .gitignore file
 * In profuction environment, better use process.env
 */

module.exports = {
    // googleClientID: 'XXXXXXX-XXXXXXXXXX.apps.googleusercontent.com',
    // googleClientSecret: 'XXXXX-_XXXXXX_XXXXX',
    googleClientID: '421574074837-i50jl3o7vl3sbkpqfp6i9tv043s188b7.apps.googleusercontent.com',
    googleClientSecret: 'oHYIj5-_FHeaZf_jsBoCoYZH',

    cookieSessionKey: 'randomtextjusttoencrypt'
};
