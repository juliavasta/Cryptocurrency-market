function ButtonToggle({ onChange }) {
  return (
    <div className="toggleCSS">
      <label className="toggleLabelCSS">
        <input type="checkbox" className="toggleInputCSS" onChange={onChange} />
        <span className="toggleSliderCSS roundCSS"></span>
      </label>
    </div>
  );
}

export default ButtonToggle;
