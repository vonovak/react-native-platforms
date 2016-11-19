# react-native-platforms

This package is a simple wrapper over the existing `Platform` module from Reat Native core intended for development on Android and Ios.

It provides exactly the same interface plus the following shortcuts:

|item|type|description|
|-------|----|-----------|
|`isAndroid`|boolean|true iff running on android|
|`isIos`|boolean|true iff running on ios|
|`ai(forAndroid, forIos)`|function|returns its first or second param based on platform|

### Usage

`npm i react-native-platforms --save`

```
import Platform from 'react-native-platforms'
...
render() {
    const iconName = Platform.ai('iconOnAndroid', 'iconOnIos')
    return (
        ...
        {Platform.isIos && <OnlyOnIos/>}
    )
}
```


### License
MIT
