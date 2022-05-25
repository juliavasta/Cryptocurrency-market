import { css } from "@emotion/css";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";

import Popover from "components/popovers/Popover";

const thCSS = css`
  font-size: 14px;
  text-align: left;
  padding-left: 20px;
  padding-bottom: 20px;
  white-space: nowrap;
`;

const TableHeader = ({ columns, onSort, sortBy, sortByAsc }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.value}
            className={thCSS}
            style={{
              cursor: column.sort ? "pointer" : undefined
            }}
            onClick={() => {
              if (column.sort) {
                onSort(column.value, !sortByAsc);
              }
            }}
          >
            <Popover
              title={column.renderPopoverHeader}
              sort={column.sort}
              bottom="20px"
              left="0"
              color="white"
              background="#15161c"
            >
              {column.title}
              {column.sort && sortBy === column.value ? (
                sortByAsc ? (
                  <CaretDownOutlined />
                ) : (
                  <CaretUpOutlined />
                )
              ) : null}
            </Popover>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
