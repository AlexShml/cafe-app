import React from "react";
import EqualHeightRow from "./EqualHeightRow";
import MenuItem from "./MenuItem";

import "../../App.css";

const MemoizedEqualHeightRow = React.memo(({ menuData, handleAddToOrder }) => (
  <EqualHeightRow className="menu-page__content">
    {menuData.map((menuItem) => (
      <MenuItem
        key={menuItem.id}
        menuItem={menuItem}
        handleAddToOrder={handleAddToOrder}
      />
    ))}
  </EqualHeightRow>
));

export default MemoizedEqualHeightRow;
