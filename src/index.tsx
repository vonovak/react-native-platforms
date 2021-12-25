import { Omit, Platform as RNPlatform, PlatformOSType } from 'react-native';

export const mockPlatform = (
  platformName: Exclude<PlatformOSType, 'native'> | undefined
) => {
  if (process.env.NODE_ENV === 'test') {
    const defaultPlatformReportedByPlatformModuleInTests = 'ios';
    RNPlatform.OS =
      platformName || defaultPlatformReportedByPlatformModuleInTests;
  } else {
    console.error(
      `react-native-platforms mockPlatform(${String(
        platformName
      )}) was called while not in testing environment. This is a noop.`
    );
  }
};
export const mockPlatformIos = () => {
  mockPlatform('ios');
};

export const mockPlatformAndroid = () => {
  mockPlatform('android');
};

function androidIosQuickShortcut<T>(
  forAndroid: T | undefined,
  forIos: T | undefined
): T | undefined {
  if (RNPlatform.OS === 'ios') {
    return forIos;
  } else {
    return forAndroid;
  }
}
type RNPlatformType = typeof RNPlatform;
type Enhancements = {
  readonly isAndroid: boolean;
  readonly isIos: boolean;
  readonly isWeb: boolean;
  readonly isWindows: boolean;
  readonly isMacOS: boolean;
  ai: typeof androidIosQuickShortcut;
  readonly OS: RNPlatformType['OS'];
};

export type EnhancedPlatformType = Omit<RNPlatformType, 'OS'> & Enhancements;

export const EnhancedPlatform: EnhancedPlatformType = {
  ...RNPlatform,
  get OS(): RNPlatformType['OS'] {
    return RNPlatform.OS;
  },
  get isAndroid(): boolean {
    return RNPlatform.OS === 'android';
  },
  get isIos(): boolean {
    return RNPlatform.OS === 'ios';
  },
  get isWeb(): boolean {
    return RNPlatform.OS === 'web';
  },
  get isWindows(): boolean {
    return RNPlatform.OS === 'windows';
  },
  get isMacOS(): boolean {
    return RNPlatform.OS === 'macos';
  },
  ai: androidIosQuickShortcut,
};

export default EnhancedPlatform;
