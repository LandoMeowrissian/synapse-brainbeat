
<img width="1728" alt="player-screenshot" src="https://github.com/LandoMeowrissian/synapse-brainbeat/assets/128652765/24c40568-23d1-47c0-8040-f3be3b73be6b">

<h2>
 The synapse/brainbeat is simple step sequencer synthesizer and drum machine made with Tone.js and React
</h2> 

<h3>synapse</h3>
<p> synapse is the top grid and synthesizer component </p>
<p> The synthesizer is a basic synthesizer with a sawtooth oscillator made using Tone.Synth() </p>

<h3>brainbeat</h3>
<p> brainbeat is the bottom grid drum machine component </p>
<p> Slightly more complex than its counterpart, the drum sounds were made using a variety of synths available in the Tone.js library</p>
<ul>
 <li>
  <p>kick/toms - The kick drum and toms use the Tone.MembraneSynth() with sinewave oscillators and employ a variety of octaves to achieve distict tonality</p>
  <li>
  <p>hit-hats - The hi-hats use the Tone.MetalSynth()</p>
   
  </li>
  <li>
  <p>snare - My personal fav. The snare drum is a combination of the Tone.MembraneSynth(), Tone.NoiseSynth(), and Tone.Filter() </p>
   
  </li>
 </li>
</ul>

<h3>grid</h3>

<img width="671" alt="Screenshot 2024-02-04 at 3 53 42 PM" src="https://github.com/LandoMeowrissian/synapse-brainbeat/assets/128652765/ba351186-9c0f-4c1b-94d7-91e9d2c712b3">

<p>Each grid consists of 6 voices represented by rows, and 16 steps represented by columns</p>
<p>The steps are subdivided by 8th notes allowing the user to create and loop 8count phrases</p>
<p>Click the buttons to toggle the sound on, click again to toggle the sound off</p>

<h3>controls</h3>
<img width="649" alt="Screenshot 2024-02-04 at 3 57 00 PM" src="https://github.com/LandoMeowrissian/synapse-brainbeat/assets/128652765/eed6d6ca-b923-4bf4-8570-1b9396991acf">
<p>Use the slider to adjust the tempo</p>
<p>Click the start button to start the loop</p>
<p>Click the stop to stop the loop</p>

