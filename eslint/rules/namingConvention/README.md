# typescript-eslint/naming-convention

Mivel [ez](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md) a legösszetettebb szabály, ezért külön könyvtárban és külön fájlokba van szeparálva, hogy könnyebben lehessen szerkeszteni.
A részeket a `typescript.js` fájl húzza be és használja.

Minden fájlnak egyetlen tömböt szabad exportálnia, amiben objectek vannak.

Minden szabálynál gondolni kell arra, hogy legvégén a `default.js` van érvényben, az a legerősebb.
