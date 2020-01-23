function Soundwave() {

}

Soundwave.prototype.convert = function(soundFreqs, minFreq=40, maxFreq=1000) {

  for (var i=0;i<soundFreqs.length;i++) {
    if (soundFreqs[i] < minFreq) {
      soundFreqs[i] = minFreq
    }
  }

console.log("maxFreq", maxFreq)
  for (var i=0;i<soundFreqs.length;i++) {
    if (soundFreqs[i] > maxFreq) {
      soundFreqs[i] = maxFreq
    }
  }


  return soundFreqs;
}

module.exports.Soundwave = Soundwave;
