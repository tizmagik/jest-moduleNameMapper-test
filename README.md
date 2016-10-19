# Jest `moduleNameMapper` test

This repo shows the different handling Jest 15.1.1 has for `moduleNameMapper` than Jest 16.0.1

Issue submitted to Jest here: https://github.com/facebook/jest/issues/1956

## Run for Jest 15

```
cd ./jest15
yarn
yarn test
```

Notice that the tests pass.

## Run for Jest 16

```
cd ./jest16
yarn
yarn test
```

Notice that the tests fail.
