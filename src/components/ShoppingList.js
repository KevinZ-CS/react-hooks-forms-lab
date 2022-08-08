import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('');


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
  // category
  .filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  )
  // search term
  .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));



//   const itemsToDisplay = items.filter((item) => {
//     if (selectedCategory === "All") return true;

//     return item.category === selectedCategory;
//   });

//  const searchDisplay = items.filter((item) => {
//     if(search.length > 0 && item.name.includes(search)) {return true}
//     else {return false}
//   } 
//  )

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter search={search} onCategoryChange={handleCategoryChange} onSearchChange={setSearch} />
      <ul className="Items">
      {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}


        {/* {searchDisplay.length > 0
        ? searchDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        )) :
        itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))} */}
      </ul>
    </div>
  );
}

export default ShoppingList;
