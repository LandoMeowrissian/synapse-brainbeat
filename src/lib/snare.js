
let snareNoise, snareAttack, snareSnapEnv, snareBody, snareFilter, lowEndFilter, snareReverb, snareGain, snareGate, noiseLowPassFilter;

function createSnare() {
  snareNoise = new Tone.NoiseSynth({
    noise: { type: "white" },
    envelope: { attack: 0.005, decay: 0.01, sustain: 0.1, release: 0.05 },
  });

  snareNoise.volume.value = -10;


  snareAttack = new Tone.Oscillator({
    frequency: 200,
    type: "triangle",
  });

  snareSnapEnv = new Tone.AmplitudeEnvelope({
    attack: 0.001,
    decay: 0.05,
    sustain: 0,
    release: 0.02,
  });

  snareAttack.volume.value = +3;

  snareBody = new Tone.MembraneSynth({
    pitchDecay: 0.005,
    octaves: 8,
    envelope: { attack: 0.001, decay: 0.02, sustain: 0.02, release: 0.02 },
    oscillator: { type: "sine" },
  });

  snareBody.volume.value = +3;

  snareFilter = new Tone.Filter({
    frequency: 4000,
    type: "bandpass",
    rolloff: -12,
    Q: 1.5,
  });

  lowEndFilter = new Tone.Filter({
    frequency: 275,
    type: "lowpass",
    rolloff: -24,
  });

  snareReverb = new Tone.Reverb({
    decay: .5,
    preDelay: 0.0005,
    wet: 0.15
  });

  snareGate = new Tone.Gate({
    threshold: -3, // Adjust this value to control the gate threshold
    attack: 0.001,  // Very quick attack
    release: 0.01,  // Very quick release
    smoothing: 0.001
  });

  snareGain = new Tone.Gain(3.5);

  // Chain components
  snareNoise.chain( snareFilter, snareGain,snareReverb,Tone.Destination);
  snareAttack.chain(snareSnapEnv, snareGain, Tone.Destination);
  snareBody.chain(snareGate, snareGain, Tone.Destination);
}

createSnare();

const snareBtn = document.getElementById("snare");
snareBtn.addEventListener("click", async () => {
  await Tone.start();

  snareBody.dispose();
  snareNoise.dispose();
  snareSnapEnv.dispose();

  createSnare();

  console.log("AudioContext started!");

  const now = Tone.now();
  snareBody.triggerAttackRelease("C0", "16n", now);
  snareNoise.triggerAttackRelease("16n", now);
  snareSnapEnv.triggerAttackRelease("16n", now);
});
