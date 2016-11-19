/**
 * @flow
 */
import {Platform as RNPlatform} from 'react-native'

// make it accessible as both named and default import?
const Platform = Object.assign({}, RNPlatform)


Platform.isAndroid = RNPlatform.OS === 'android'
Platform.isIos = RNPlatform.OS === 'ios'
Platform.ai = (forAndroid: any, forIos: any): any => {
    if (RNPlatform.OS === 'ios') {
        return forIos
    } else {
        return forAndroid
    }
}

export default Platform;

