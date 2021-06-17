---
sidebar_position: 2
title: "Contributing"
sidebar_label: "Contributing"
---

:::tip
Development can be done using the example app
:::

## Clone, install

```bash
git clone https://github.com/react-native-community/datetimepicker.git
```

```bash
cd datetimepicker
```

```bash
yarn
```

## Running Example App

1. Run `yarn` in repo root
2. Run `cd example`
3. Install required pods by running `npx pod-install`
4. Run `yarn` start to start Metro Bundler
5. Run `yarn run start:ios` or `yarn run start:android` or `yarn run start:windows`
6. To do any development on the library, open the example project (in the example folder!) in Xcode or Android Studio. The example project depends on the library code, which you can edit and observe any changes in the example project.

## Tests

### Jest

```bash
yarn
yarn test
```

### Detox

Detox is a gray box end-to-end testing and automation library for mobile apps.

- [Dependencies required](https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md#step-1-install-dependencies)

For cleaning all the detox builds just run `npm run detox:clean`.

#### iOS

- Debug:
  ```bash
  # Debug requires to run Metro Bundler
  yarn start
  yarn detox:ios:build:debug
  yarn detox:ios:test:debug
  ```

- Release:
  ```bash
  yarn detox:ios:build:release
  yarn detox:ios:test:release
  ```

#### Android

An existing Android emulator is required to match the name defined in `detox.configurations.android.emu.debug.name` and `detox.configurations.android.emu.release.name` inside the `package.json`.

- Debug:

  ```bash
  # Debug requires to run Metro Bundler
  yarn start
  yarn detox:android:build:debug
  yarn detox:android:test:debug
  ```

- Release:

  ```bash
  yarn detox:android:build:release
  yarn detox:android:test:release
  ```
