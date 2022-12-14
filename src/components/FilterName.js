const FilterName = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleInputChange = (ev) => {
    props.handleFilterName(ev.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        placeholder="Búsqueda por nombre"
        value={props.name}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default FilterName;
