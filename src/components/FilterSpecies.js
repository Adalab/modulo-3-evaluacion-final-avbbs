import '../styles/layout/FilterSpecies.scss';

const FilterSpecies = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const handleChange = (ev) => {
    props.handleFilterSpecies(ev.target.value);
  };

  return (
    <section className='sectionSpecies'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="species" className='sectionSpecies__label'>Species:</label>
        <select name="species" id="species" onChange={handleChange} className='sectionSpecies__select'>
          <option value="All">All</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>
      </form>
    </section>
  );
};

export default FilterSpecies;
