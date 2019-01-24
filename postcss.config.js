const customProperties = require('postcss-custom-properties');
module.exports = {
  plugins: [
    customProperties({
      exportTo: './vars.css',
      importFrom: {
        customProperties: {
          '--special': 'yellowgreen',
        }
      }
    })
  ]
}
