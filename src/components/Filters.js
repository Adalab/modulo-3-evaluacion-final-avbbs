import FilterSpecies from "./FilterSpecies.js";
import FilterName from "./FilterName.js";
import FilterLocation from "./FilterLocation.js";

const Filters = (props) => {
  return (
    <>
      <FilterName handleFilterName={props.handleFilterName} filterName={props.filterName} />
      <FilterSpecies handleFilterSpecies={props.handleFilterSpecies} />
      <FilterLocation handleFilterLocation={props.handleFilterLocation}/>
    </>
  );
};

export default Filters;
