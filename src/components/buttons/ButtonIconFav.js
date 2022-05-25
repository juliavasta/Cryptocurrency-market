import { StarOutlined, StarFilled } from "@ant-design/icons";

import { useStockContext } from "context/StockContext";
import Popover from "components/popovers/Popover";

function ButtonIconFav({ ticker }) {
  const { add, remove, favoriteTickers } = useStockContext();
  const isFav = favoriteTickers.find((t) => t.symbol === ticker.symbol);

  return (
    <Popover
      title="add to watchlist"
      color="white"
      background="#15161c"
      bottom="20px"
      left="0"
    >
      <div onClick={() => (isFav ? remove(ticker) : add(ticker))}>
        {isFav ? <StarFilled /> : <StarOutlined />}
      </div>
    </Popover>
  );
}

export default ButtonIconFav;
