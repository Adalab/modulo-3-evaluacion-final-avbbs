import '../styles/layout/FilterSpecies.scss';

const FilterSpecies = (props) => {
  const handleChange = (ev) => {
    props.handleFilterSpecies(ev.target.value);
  };

  return (
    <section className='sectionSpecies'>
      <label htmlFor="species" className='sectionSpecies__label'>Especie:</label>
      <select name="species" id="species" onChange={handleChange} className='sectionSpecies__select'>
        <option value="all">All</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </section>
  );
};

export default FilterSpecies;
