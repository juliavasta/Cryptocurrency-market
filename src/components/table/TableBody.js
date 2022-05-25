import styled from "@emotion/styled";

import Popover from "components/popovers/Popover";

const TrCSS = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) =>
      theme === "light" ? "rgb(239, 242, 245)" : "#37384a"};
  }
`;

const TdCSS = styled.td`
  height: 50px;
  white-space: nowrap;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) =>
    theme === "light" ? "rgb(239, 242, 245)" : "#2c424a"};
  cursor: pointer;
  font-size: 14px;
  text-align: left;
  padding-left: 20px;
`;

const TableBody = ({ alerts = {}, columns = [], datasource = [], theme }) => {
  return (
    <tbody>
      {datasource.map((item, i) => (
        <TrCSS key={i} theme={theme}>
          {columns.map((column, i) => (
            <TdCSS key={i} theme={theme} style={column.style}>
              <Popover
                title={alerts?.[item.symbol]?.[column.value]}
                bottom="20px"
                left="0"
                color="white"
                background="#15161c"
              >
                {column.render !== undefined
                  ? column.render(item)
                  : item[column.value]}
              </Popover>
            </TdCSS>
          ))}
        </TrCSS>
      ))}
    </tbody>
  );
};

export default TableBody;
