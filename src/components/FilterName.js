import '../styles/layout/FilterName.scss';

const FilterName = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleInputChange = (ev) => {
    props.handleFilterName(ev.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        className='form__search'
        type="search"
        name="search"
        placeholder="Search by name"
        value={props.filterName}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default FilterName;
