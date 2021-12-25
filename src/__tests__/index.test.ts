import EnhancedPlatform, { mockPlatform } from '../index';
import { Platform } from 'react-native';

describe('EnhancedPlatform', () => {
  it('platform shortcuts are available on the object', () => {
    expect(EnhancedPlatform.isIos).toBe(true);
    expect(EnhancedPlatform.isAndroid).toBe(false);
    expect(EnhancedPlatform.ai('a', 'i')).toBe('i');
  });

  it('functionality inherited from ReactNative.Platform is present on the object', () => {
    expect(EnhancedPlatform.OS).toBe('ios');
    expect(EnhancedPlatform.select).toBe(Platform.select);
    expect(EnhancedPlatform.Version).toBe(Platform.Version);
    expect(EnhancedPlatform.constants).toBe(Platform.constants);
  });

  it('mockPlatform controls what platform is reported in tests', () => {
    mockPlatform('android');
    expect(EnhancedPlatform.isIos).toBe(false);
    expect(EnhancedPlatform.isAndroid).toBe(true);
    expect(EnhancedPlatform.ai('a', 'i')).toBe('a');
    expect(EnhancedPlatform.OS).toBe('android');
    expect(Platform.OS).toBe('android');

    mockPlatform(undefined);
  });

  it('jest spy works on getter but does not overwrite the underlying OS const', () => {
    const spy = jest
      .spyOn(EnhancedPlatform, 'isIos', 'get')
      .mockReturnValueOnce(false);
    expect(EnhancedPlatform.isIos).toBe(false);
    expect(EnhancedPlatform.OS).toBe('ios');
    expect(spy).toHaveReturnedWith(false);
    expect(EnhancedPlatform.isIos).toBe(true);
  });
});