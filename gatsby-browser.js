/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import 'core-js/modules/es6.set'
import 'core-js/modules/es6.map'
import 'raf/polyfill'
import Apollo from './src/apollo/client';

export const wrapRootElement = ({ element }) => <Apollo>{element}</Apollo>
