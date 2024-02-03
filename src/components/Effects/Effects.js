import * as Tone from "tone";

const Effects = () => {
  const phaser = new Tone.Phaser({
    frequency: 12,
    octaves: 5,
    baseFequency: 1000
  }).toDestination();
  const feedbackDelay = new Tone.FeedbackDelay("8n", 0.5).toDestination();

  return {phaser, feedbackDelay}
}

export default Effects
