let tom1, tomAttack,tomReverb, pitchLFO, tomLowPassFilter, tomFilter, tomNoise;

function createTom() {
   tom1 = new Tone.MembraneSynth({
    pitchDecay: 10,
    octaves: 4,
    oscillator: { type: "sine" },
  }).toDestination();
  tomAttack = new Tone.MembraneSynth({
    pitchDecay: 5,
    octaves: 2,
    envelope: {
      attack: 0.005,
      decay: 0.2,
      sustain: 0.0,
      release: 0.1,
    },
    oscillator: { type: "triangle" },
  }).toDestination();
  tomReverb = new Tone.Reverb({
    decay: 0.75,
    preDelay: 0.01,
  }).toDestination();
  pitchLFO = new Tone.LFO({
    frequency: 0.2,
    min: -0.5,
    max: 0.5,
  }).start();
  tomLowPassFilter = new Tone.Filter({
    frequency: 100,
    type: "lowpass",
    rolloff: -12,
  }).toDestination();
  tomFilter = new Tone.Filter({
    frequency: 4000,
    type: "bandpass",
    rolloff: -12,
    Q: 1.5,
  });

  tom1.connect(tomLowPassFilter).toDestination();
  tomAttack.connect(tomLowPassFilter).toDestination();
  tomLowPassFilter.connect(tomReverb).toDestination();
}

createTom();

const tomsBtn = document.getElementById("tom");
tomsBtn.addEventListener("click", async () => {
  await Tone.start();
  console.log("AudioContext started!");
  tom1.dispose();

  createTom();
  const now = Tone.now();

  tom1.triggerAttackRelease("A0","8n", now);
  tomAttack.triggerAttackRelease("A0","8n", now);
});
