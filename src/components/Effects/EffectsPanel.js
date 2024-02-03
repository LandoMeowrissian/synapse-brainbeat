// import Sequencer from "../Sequencer/Sequencer";


// const RowSelect = ({ onSelectRow }) => {
//   return (
//     <div className="row-select">
//       {notes.map((note, index) => (
//         <button key={index} onClick={() => onSelectRow(index)}>
//           Select Row {index + 1}
//         </button>
//       ))}
//     </div>
//   );
// };

// const handleRowSelection = (rowIndex) => {
//   console.log('Selected row:', rowIndex);
//   // Implement row selection logic here...
// };
/* wrapper for effect class / bus */
// class FX extends Tone.ToneAudioNode {
//   constructor(options) {
//     super();
//     this.effect = new options.effect(options.options); // create effectNode in constructor
//     this._bypass = options.bypass;
//     this._lastBypass = options.bypass;

//     // audio signal is constantly passed through this node, 
//     // but processed by effect only, if bypass prop is set to `false` 
//     this.input = new Tone.Gain();
//     this.output = new Tone.Gain();

//     this.effect.connect(this.output);

//     this.activate(!options.bypass); // initialize input node connection
//   }

//   get bypass() {
//     return this._bypass;
//   }

//   set bypass(val) {
//     if (this._lastBypass === val) return;

//     this._bypass = Boolean(val);
//     this.activate(!val);
//     this._lastBypass = val;
//   }
  
//   /*
//  activate effect (connect input node), if bypass == false
//  */
//   activate(doActivate) {
//     if (doActivate) {
//       this.input.disconnect();
//       this.input.connect(this.effect);
//     } else {
//       this.input.disconnect();
//       this.input.connect(this.output);
//     }
//   }
 
//   toggleBypass() {
//     this.bypass = !this._bypass;
//   }

//   dispose() {
//     super.dispose();
//     this.effect.dispose();
//     return this;
//   }
// }

// const osc = new Tone.Oscillator().start();

// const fx1 = new FX({ 
//   effect: Tone.Distortion,       // effect class
//   options: { distortion: 0.8 }, // effect initial options
//   bypass: true,                     // initial bypass value
// });
// const fx2 = new FX({ effect: Tone.Phaser, bypass: false});
// osc.chain(fx1, fx2, Tone.Destination);
