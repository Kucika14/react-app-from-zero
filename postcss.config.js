/* eslint-disable no-undef */
module.exports = {
  plugins: [
      // https://github.com/csstools/postcss-preset-env
    require('postcss-preset-env')({
        // https://github.com/csstools/postcss-preset-env/blob/master/src/lib/plugins-by-id.js#L36
      features: {
        'nesting-rules': true
      }
    }),

      // https://github.com/postcss/postcss-100vh-fix
    require('postcss-100vh-fix'),

      // https://github.com/postcss/postcss-custom-media
    require('postcss-custom-media')({
      importFrom: './customMedia.css'
    }),

      // https://github.com/postcss/postcss-reporter
    require('postcss-reporter')({
      clearReportedMessages: true,
      clearAllMessages: true,
      throwError: true
    })

      /* // https://cssnano.co/docs/what-are-optimisations
      require('cssnano')({
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true
            },

            // https://github.com/cssnano/cssnano/issues/1115
            // Az egész z-index kezelésünket elcseszték a postcss-colorminnel.
            // Amíg nem javítják (de akár örökre) kikapcsoljuk ezt az optimalizálást.
            colormin: false
          }
        ]
      }) */
  ]
}
