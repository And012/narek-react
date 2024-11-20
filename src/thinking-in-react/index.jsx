import React from "react";
import "./index.css";
import { specialCharMap } from "@testing-library/user-event/dist/keyboard";

const json = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

export class FilterableProductTable extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { searchResult: "", showInStockItems: false };
  }

  render() {
    const { searchResult, showInStockItems } = this.state;
    return (
      <div>
        <SearchBar
          searchResult={searchResult}
          showInStockItems={showInStockItems}
          updateShowInStockItems={() =>
            this.setState({ showInStockItems: !showInStockItems })
          }
          onSearchInputChange={(e) =>
            this.setState({ searchResult: e.target.value })
          }
        />
        <ProductTable
          searchResult={searchResult}
          showInStockItems={showInStockItems}
        />
      </div>
    );
  }
}

function SearchBar({
  searchResult,
  showInStockItems,
  updateShowInStockItems,
  onSearchInputChange,
}) {
  return (
    <div className="searchbar-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchResult}
        onChange={onSearchInputChange}
      />
      <div>
        <input
          type="checkbox"
          id="subscribeNews"
          name="subscribe"
          value={showInStockItems}
          onChange={updateShowInStockItems}
        />
        <label for="subscribeNews">Show in stock items only</label>
      </div>
    </div>
  );
}

function ProductTable({ searchResult, showInStockItems }) {
  const filteredJson = json
    .filter((value) => {
      if (searchResult) {
        return value.name.toLowerCase().includes(searchResult.toLowerCase());
      }
      return true;
    })
    .filter((value) => {
      if (showInStockItems) {
        return value.stocked;
      }
      return true;
    });
  const electronics = filteredJson.filter((j) => j.category === "Electronics");
  const sportingGoods = filteredJson.filter(
    (j) => j.category !== "Electronics"
  );
  return (
    <div>
      <div className="sporting-goods">
        <ProductCategoryRow>Sporting goods</ProductCategoryRow>
        {sportingGoods.map((value, i) => (
          <ProductRow key={i} price={value.price} name={value.name} />
        ))}
      </div>
      <div className="electronics">
        <ProductCategoryRow>Electronics</ProductCategoryRow>
        {electronics.map((value, i) => (
          <ProductRow key={i} price={value.price} name={value.name} />
        ))}
      </div>
    </div>
  );
}

function ProductRow({ name, price }) {
  return (
    <div className="product-row-container">
      <span>{name}</span>
      <span>{price}</span>
    </div>
  );
}

function ProductCategoryRow({ children }) {
  return <h1>{children}</h1>;
}
