const FilterLocation = (props) => {
    const handleSubmit = (ev) => {
      ev.preventDefault();
    };
  
    const handleInputChange = (ev) => {
      props.handleFilterLocation(ev.target.value);
    };
  
    return (
      <form onSubmit={handleSubmit} className='form'>
        <input
          className='form__search'
          type="search"
          name="search"
          placeholder="Search by location"
          value={props.filterLocation}
          onChange={handleInputChange}
        />
      </form>
    );
  };
  
  export default FilterLocation;