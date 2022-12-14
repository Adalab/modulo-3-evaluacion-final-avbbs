const FilterSpecies = (props) => {
  const handleChange = (ev) => {
    props.handleFilterSpecies(ev.target.value);
  };

  return (
    <>
      <label htmlFor="species">Especie:</label>
      <select name="species" id="species" onChange={handleChange}>
        <option value="all">Todos</option>
        <option value="Human">Humanos</option>
        <option value="Alien">Alienígenas</option>
      </select>
    </>
  );
};

export default FilterSpecies;
