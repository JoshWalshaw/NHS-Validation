import { NHSNumber } from './index';

describe('NHS Number', () => {
  it('NHSNumber should be defined', () => {
    expect(NHSNumber).toBeTruthy();
  });

  describe('Generate', () => {
    it('Generate method should be defined', () => {
      expect(NHSNumber.generate).toBeTruthy();
    });

    it('Generate should return a 10 character string', () => {
      expect(NHSNumber.generate()).toHaveLength(10);
    });
  });

  describe('Validate', () => {
    it('Validate method should be defined', () => {
      expect(NHSNumber.validate).toBeTruthy();
    });

    it('Validate return true on hardcoded valid string', () => {
      expect(NHSNumber.validate('671 668 9966')).toEqual(true);
    });

    it('Validate return false on hardcoded invalid string', () => {
      expect(NHSNumber.validate('000 000 0001')).toEqual(false);
    });

    it('Validate return true generated value', () => {
      expect(NHSNumber.validate(NHSNumber.generate())).toEqual(true);
    });
  });
});
