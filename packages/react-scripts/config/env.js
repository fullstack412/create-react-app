// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
// @remove-on-eject-end

// Grab NODE_ENV and REACT_APP_* environment variables and prepare them to be
// injected into the application via DefinePlugin in Webpack configuration.

var REACT_APP = /^REACT_APP_/i;

function getClientEnvironment(publicUrl) {
  var processEnv = Object
    .keys(process.env)
    .filter(key => REACT_APP.test(key))
    .reduce((env, key) => {
      env[key] = JSON.stringify(process.env[key]);
      return env;
    }, {
      // Useful for determining whether we’re running in production mode.
      // Most importantly, it switches React into the correct mode.
      'NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
      // Useful for resolving the correct path to static assets in `public`.
      // For example, <img src={process.env.PUBLIC_URL + '/img/logo.png'} />.
      // This should only be used as an escape hatch. Normally you would put
      // images into the `src` and `import` them in code to get their paths.
      'PUBLIC_URL': JSON.stringify(publicUrl),
      'LOGIN_ENV': JSON.stringify(process.env.LOGIN_ENV),
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'LEGACY_API': JSON.stringify(process.env.LEGACY_API),
      'API': JSON.stringify(process.env.API),
      'CLIENT_ID': JSON.stringify(process.env.CLIENT_ID),
      'CLOUDINARY_UPLOAD_URL':
          JSON.stringify('http://api.cloudinary.com/v1_1/psychwire/upload'),
      'CLOUDINARY_API_KEY': JSON.stringify('681975394275784'),
      'CLOUDINARY_CLOUD_NAME': JSON.stringify('psychwire'),
      'CLOUDINARY_UPLOAD_PRESET': JSON.stringify('pw_client'),
      'EMBEDLY_API_KEY': JSON.stringify('7d0cfef04ee04e3a9ad011cd21372d73'),
    });
  return {'process.env': processEnv};
}

module.exports = getClientEnvironment;
