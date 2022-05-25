import styled from "@emotion/styled";
import { css } from "@emotion/css";

import ButtonCheckbox from "components/buttons/ButtonCheckbox";
import { ReloadOutlined } from "@ant-design/icons";

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) =>
    theme === "light" ? "#EFEFEF" : "#1f2028"};
  color: white;
  width: 500px;
  height: auto;
  padding: 15px;
  border-radius: 10px;
  bottom: 100px;
  position: absolute;
  z-index: 3000;

  @media (max-width: 700px) {
    width: 100%;
  }
  @media (max-width: 1093px) {
    left: 0;
    bottom: -200px;
  }
`;

const SelectLabel = styled.label`
  text-align: start;
  color: ${({ theme }) =>
    theme === "light" ? "#282936" : "rgb(239, 242, 245)"};
  border: none;
  cursor: pointer;
`;

const Checkbox = styled.input`
  cursor: pointer;
`;

const Dropdown = ({ options, onChange, selected, theme, setSelected }) => {
  const handleChange = (e) => {
    e.stopPropagation();
    const value = e.currentTarget.value;
    const isSelected = selected.find((option) => option.value === value);
    if (isSelected) {
      onChange(selected.filter((option) => option.value !== value));
    } else {
      const option = options.find((option) => option.value === value);
      onChange([...selected, option]);
    }
  };

  return (
    <DropdownWrapper theme={theme}>
      <SelectLabel theme={theme}>
        <h3
          className={css`
            margin-bottom: 20px;
            font-size: 15px;
          `}
        >
          Add and delete columns:
        </h3>
        <ButtonCheckbox
          title={<ReloadOutlined />}
          onClick={() => console.log("reset", setSelected(options))}
        >
          <p
            className={css`
              display: inline;
              margin-left: 10px;
            `}
          >
            {" "}
            Restart
          </p>
        </ButtonCheckbox>

        {options.map((option) => (
          <ButtonCheckbox theme={theme}>
            <Checkbox
              checked={selected.find((o) => o.value === option.value)}
              key={option.value}
              value={option.value}
              type="checkbox"
              onChange={handleChange}
            />
            <div
              className={css`
                margin-left: 8px;
              `}
            >
              {option.title}
            </div>
          </ButtonCheckbox>
        ))}
      </SelectLabel>
    </DropdownWrapper>
  );
};

export default Dropdown;
