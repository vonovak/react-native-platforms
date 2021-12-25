# react-native-platforms

### Motivation

Ever found yourself writing `Platform.OS === 'android'` or `Platform.OS === 'ios'` a lot? Then you maybe created some helper module in your app to export these as constants that you could reuse. And then you maybe wanted to control the behavior in tests and ended up using some way of mocking that with Jest. I also did this and offer it for reuse:

This package is a simple extension of the existing `Platform` module from React Native core. TS typings are included.

Provided are simple shortcuts and functions for controlling what platform is reported by `react-native-platforms` as well as `ReactNative.Platform.OS` in Jest tests.

It provides exactly the same functionality plus the following shortcuts:

| item                     | type     | description                                                        |
| ------------------------ | -------- | ------------------------------------------------------------------ |
| `isAndroid`              | boolean  | true iff running on android                                        |
| `isIos`                  | boolean  | true iff running on ios                                            |
| `isWeb`                  | boolean  | true iff running on web                                            |
| `isWindows`              | boolean  | true iff running on windows                                        |
| `isMacOS`                | boolean  | true iff running on isMacOS                                        |
| `ai(forAndroid, forIos)` | function | returns its first or second param based on platform                |
| `mockPlatform()`         | function | controls what platform is reported in Jest tests                   |
| `mockPlatformIos()`      | function | convenience for `mockPlatform('ios')`                              |
| `mockPlatformAndroid()`  | function | convenience for `mockPlatform('android')`                          |
| `mockPlatformDefault()`  | function | convenience for `mockPlatform(undefined)` which resets the mocking |

For Jest tests, you sometimes might want the tests to belive they're running on a particular platform. To do that you can use the exported `mockPlatform` / `mockPlatformIos()` / `mockPlatformAndroid()` functions. They only work in test environment, so if you mistakenly call them in the app, they are a noop. See the [test cases](./src/__tests__/index.test.ts) to see how they can be used.

Note that evaluations of `isAndroid` / `isXYZ` which happen before a call to `mockPlatformX` will not be changed, but any evaluations that happen after that will return the mocked platform.

### Usage

`yarn add react-native-platforms`

Please see the [test cases](./src/__tests__/index.test.ts)

### Example

```js
import EnhancedPlatform from 'react-native-platforms'

// or use named export

import { EnhancedPlatform } from 'react-native-platforms'

const SomeComponent = () => {
    const iconName = EnhancedPlatform.ai('iconOnAndroid', 'iconOnIos')
    return (
        ...
        {EnhancedPlatform.isIos && <OnlyOnIos/>}
    )
}
```

### License

MIT
