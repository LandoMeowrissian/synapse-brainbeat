let kickBody, kickBody2, kickAttack, kickNoise, lowPassFilter, reverb, kickGain, reverbLowPassFilter

function createKick() {
  kickBody = new Tone.MembraneSynth({
    pitchDecay: .2,
    octaves: 1,
    oscillator: { type: "sine" },
  }).toDestination();

  kickBody2 = new Tone.MembraneSynth({
    pitchDecay: 0.2,
    octaves: 1,
    oscillator: { type: "sine" },
  }).toDestination();

  kickAttack = new Tone.MembraneSynth({
    pitchDecay: 0.2,
    octaves: 1,
    oscillator: { type: "sine" },
  }).toDestination();

  // kickNoise = new Tone.NoiseSynth({
  //   noise: { type: "white" },
  //   envelope: { attack: 0.001, decay: 0.001, sustain: 0.002, release: 0.001 },
  // }).toDestination();

  lowPassFilter = new Tone.Filter({
    frequency: 400,
    type: "lowpass",
    rolloff: -24
  }).toDestination();
  
  reverb = new Tone.Reverb(0.4).toDestination();

  reverbLowPassFilter = new Tone.Filter({
    frequency: 100,
    type: "lowpass",
    rolloff: -24
  }).toDestination();

  // reverb.connect(reverbLowPassFilter);

  kickBody.connect(lowPassFilter, reverb).toDestination();
  kickBody2.connect(lowPassFilter).toDestination();
  kickAttack.connect(lowPassFilter, reverb).toDestination();
}

createKick();

const btn = document.getElementById('kick');

btn.addEventListener('click', async () => {
  await Tone.start();

  // Dispose of previous instances
  kickBody.dispose();
  kickBody2.dispose();
  kickAttack.dispose();
  lowPassFilter.dispose();
  // Recreate instances
  createKick();

  const now = Tone.now();

  // Trigger new sounds
  kickBody.triggerAttackRelease("C0", "8n", now);
  kickBody2.triggerAttackRelease("E0", "8n", now);
  kickAttack.triggerAttackRelease("A0", "8n", now);
});
console.log('audio is ready');
