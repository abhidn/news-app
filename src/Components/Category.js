function Category() {
  function clickHandler(){
    console.log()
  }
  const arr = [
    "all",
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  return (
    <>
      <nav className="nav">
        {arr.map((category) => {
          return (
            <div>
              <button  onClick={clickHandler}>{category}</button>
            </div>
          );
        })}
        <div className="searchbar">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              console.log(event.target.search.value);
            }}
          >
            <input type="text" name="search"></input>
            <button className="btn btn-primary" type="submit">Submit</button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Category;
