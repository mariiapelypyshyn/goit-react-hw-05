

const SearchMovies = ({onSearch}) => {
     const handleSubmit = e => {
    e.preventDefault();
   const form = e.target;
    const value = form.elements.search.value;
    console.log('value: ', value);
       onSearch(value);
       form.reset();
 } 

  return (
    <form onSubmit={handleSubmit}>
      <label>
    <input type="text" name="search"  autoComplete="off"
          autoFocus/>
      </label>
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchMovies;
