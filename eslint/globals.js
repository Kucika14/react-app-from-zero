const ro = 'readonly'

module.exports = {
  // Minden __X__ webpack DefinePlugin
  __DEV__: ro,
  __APP__: ro,
  __PROD__: ro,
  __TEST__: ro,
  __TEXT__: ro,
  __FONTS__: ro,
  __LANGS__: ro,
  __TITLE__: ro,
  __GROUP__: ro,
  __SERVER__: ro,
  __SERIAL__: ro,
  __CORDOVA__: ro,
  __DEVELOPER__: ro,
  __SUBTITLE__: ro,
  __LOCALES__: ro,
  __IMPRINT__: ro,
  __ACTIVATOR__: ro,
  __PRELOADER__: ro,
  __BUILD_TIME__: ro,
  __BASE_FONTS__: ro,
  __DEMO_STATUS__: ro,
  __UPDATE_LINK__: ro,
  __APP_LOCALES__: ro,
  __USE_BUILT_IN_FONTS__: ro,

  // ugyesedni.hu
  __DEV_PHASE__: ro,
  __RELEASE_STATUS__: ro,

  // activatorból csak a version kell ide
  __VERSION__: ro,

  // webpack ProvidePlugin
  trans: ro,
  log: ro,
  utils: ro,
  Anim: ro,
  anim: ro,
  anime: ro,
  Fragment: ro,

  CONFIG: ro
}
