let hhNoise, hhAttack, bitCrusher, hhReverb, chorus;

function createHiHat() {
  hhNoise = new Tone.NoiseSynth({
    noise: { type: "white" },
    envelope: { attack: 0.001, decay: 0.1, sustain: 0.01, release: 0.01 },
  });

  hhNoise.volume.value = -3;

  hhAttack = new Tone.MetalSynth({
    frequency: 5000,
    envelope: { attack: 0.01, decay: 0.1, sustain: 0.01, release: 0.01 },
    harmonicity: 2,
    resonance: 4000,
  });

  bitCrusher = new Tone.BitCrusher(4);

  hhReverb = new Tone.Reverb(0.5);

  chorus = new Tone.Chorus(4, 2.5, 0.5).start();

  // Chain components
  hhAttack.chain(bitCrusher, hhReverb, chorus, Tone.Destination);
  hhNoise.chain(Tone.Destination);
}

createHiHat();

const hh = document.getElementById('hihat');

hh.addEventListener('click', async () => {
  await Tone.start();
  console.log("AudioContext started!");

  const now = Tone.now();
  hhAttack.triggerAttackRelease("16n", now);
  hhNoise.triggerAttackRelease("16n", now);
});
