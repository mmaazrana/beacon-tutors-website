import Switch from 'react-switch';
import {
  customToggleOffStyles,
  customToggleOnStyles,
} from '../AdminForms/AdminForms';

export default function ToggleSwitch(props) {
  return (
    <label className="toggle">
      <span>Select Page </span>
      <Switch
        checked={props.checked}
        onChange={props.onChange}
        offColor="#ff6f66"
        onColor="#4fc3b1"
        offHandleColor="#ffebe5"
        onHandleColor="#e2f8f3"
        height={42}
        width={122}
        activeBoxShadow="none"
        uncheckedIcon={<p style={customToggleOffStyles}>Home</p>}
        checkedIcon={<p style={customToggleOnStyles}>Online</p>}
        className="react-switch"
      />
    </label>
  );
}
