/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */
// You can delete this file if you're not using it

const React = require("react");
const Provider = require("./src/context/Provider");

exports.wrapRootElement = ({ element }) => <Provider>{element}</Provider>;
