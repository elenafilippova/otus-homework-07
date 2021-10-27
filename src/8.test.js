import { logWeekDay, getMinutesToday, getYoungerPerson } from './8';

describe('homework-08', () => {
  describe('logWeekDay', () => {
    it("log 'ЧТ' for '25.03.2021'", () => {
      const spyLog = jest.spyOn(console, 'log');
      jest.spyOn(window, 'prompt').mockReturnValue('25.03.2021');
      logWeekDay();
      expect(spyLog).toHaveBeenCalledWith('ЧТ');
      spyLog.mockRestore();
    });
    it("log 'СБ' for '09.10.2021'", () => {
      const spyLog = jest.spyOn(console, 'log');
      jest.spyOn(window, 'prompt').mockReturnValue('09.10.2021');
      logWeekDay();
      expect(spyLog).toHaveBeenCalledWith('СБ');
      spyLog.mockRestore();
    });
  });

  describe('getMinutesToday', () => {
    it('is a function', () => {
      expect(getMinutesToday).toBeInstanceOf(Function);
    });

    it('is defined', () => {
      expect(getMinutesToday).toBeDefined();
    });

    it('console.log have been called', () => {
      const spyLog = jest.spyOn(console, 'log');
      getMinutesToday();
      expect(spyLog).toHaveBeenCalled();
    });
  });

  describe('getYoungerPerson', () => {
    it("log younger for '25.03.1991' and '26.03.1991'", () => {
      const spyLog = jest.spyOn(console, 'log');
      getYoungerPerson('25.03.1991', '26.03.1991');
      expect(spyLog).toHaveBeenCalledWith('First user is yonger');
    });

    it("log younger for '25.03.1990' and '26.03.1968'", () => {
      const spyLog = jest.spyOn(console, 'log');
      getYoungerPerson('25.03.1990', '26.03.1968');
      expect(spyLog).toHaveBeenCalledWith('Second user is yonger');
    });
  });
});
