
const SynthSelector = ({ synthType, setSynthType }) => (
  <select
    id="synthSelect"
    value={synthType}
    onChange={(e) => setSynthType(e.target.value)}
  >
    <option value="MembraneSynth">Membrane Synth</option>
    <option value="PluckSynth">Pluck Synth</option>
    <option value="MetalSynth">Metal Synth</option>
    {/* Add other synth options here */}
  </select>
);

export default SynthSelector;
