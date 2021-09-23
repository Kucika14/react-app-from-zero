// -----------------------------------
// --- LASSÚ SZABÁLYOK KIKAPCSOLVA ---
// -----------------------------------
//
// FONTOS, hogy ezek a szabályok a bekapcsolt állapotukban csak warningok lehetnek, error NEM.
// A szabályokat olyan sorrendben vedd fel, hogy mennyit "fogyasztanak".
// Értelemszerűen csak úgy lehet mérni, ha a kikapcsoltakat visszarakod. ;)
//
// A teszt a /common/ könyvtáron futott:
//
// import/extensions                               |  1976.132 |     9.4%
// import/no-useless-path-segments                 |  1635.981 |     7.8%
// import/named                                    |  1514.288 |     7.2%
// @typescript-eslint/no-confusing-void-expression |  1273.235 |     6.1%
// @typescript-eslint/indent                       |  1070.170 |     5.1%
// import/no-cycle                                 |   967.816 |     4.6%
// @typescript-eslint/no-implied-eval              |   961.796 |     4.6%
// import/no-duplicates                            |   885.314 |     4.2%
// import/no-self-import                           |   881.373 |     4.2%
// @typescript-eslint/naming-convention            |   842.802 |     4.0%

module.exports = {
  'import/extensions': 0,
  'import/no-useless-path-segments': 0,
  'import/named': 0,
  '@typescript-eslint/no-confusing-void-expression': 0,
  '@typescript-eslint/indent': 0,
  'import/no-cycle': 0,
  '@typescript-eslint/no-implied-eval': 0,
  'import/no-duplicates': 0,
  'import/no-self-import': 0,
  '@typescript-eslint/naming-convention': 0
}
