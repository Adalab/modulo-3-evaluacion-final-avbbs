import FilterSpecies from "./FilterSpecies.js";
import FilterName from "./FilterName.js";

const Filters = (props) => {
  return (
    <>
      <FilterName handleFilterName={props.handleFilterName} />
      <FilterSpecies handleFilterSpecies={props.handleFilterSpecies} />
    </>
  );
};

export default Filters;