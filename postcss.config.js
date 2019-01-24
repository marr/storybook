const customProperties = require('postcss-custom-properties');
module.exports = {
  plugins: [
    customProperties({
      importFrom: {
        customProperties: {
          '--special': 'yellowgreen',
        }
      }
    })
  ]
}
