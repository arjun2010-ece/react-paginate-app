
function Items({ currentItems }) {
    return (
      <div className="items">
      {currentItems && currentItems.map((item) => (
        <div key={item}>
          <h3>Item #{item}</h3>
        </div>
      ))}
        </div>
    );
  }

  export default Items;