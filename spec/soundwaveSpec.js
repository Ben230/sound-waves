var soundwaveModule = require('../src/soundwave.js');
var Soundwave = soundwaveModule.Soundwave;

describe('Soundwave', function() {
  var soundwave;

  beforeEach(function(){
    soundwave = new Soundwave;
  });

  it('input of empty soundwave and no freq limits returns empty soundwave', function() {
    expect(soundwave.convert([])).toEqual([]);
  });

  it('input of [50,50,50] and no freq limits returns [50,50,50]', function() {
    expect(soundwave.convert([50,50,50])).toEqual([50,50,50]);
  });

  it('input of [30,50,90] and minFreq=50 and returns [50,50,70]', function() {
    expect(soundwave.convert([30,50,90], minFreq=50)).toEqual([50,50,90]);
  });

  it('input of [30,50,20] and minFreq=40 and returns [40,50,40]', function() {
    expect(soundwave.convert([30,50,20], minFreq=40)).toEqual([40,50,40]);
  });

  it('input of [70,90,110] and maxFreq=80 and returns [70,80,80]', function() {
    expect(soundwave.convert([70,90,110], maxFreq=80)).toEqual([70,80,80]);
  });

});
