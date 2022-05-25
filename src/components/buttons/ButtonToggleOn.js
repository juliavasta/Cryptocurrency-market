function ButtonToggleOn({ onChange }) {
  return (
    <div className="toggleCSS">
      <label className="toggleLabelCSS">
        <input
          type="checkbox"
          className="toggleInputOnCSS"
          onChange={onChange}
        />
        <span className="toggleSliderOnCSS roundCSS"></span>
      </label>
    </div>
  );
}

export default ButtonToggleOn;
