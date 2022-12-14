import CharacterCard from "./CharacterCard.js";

const CharacterList = ({ cartoons }) => {
  const cartoonElement = cartoons
  .sort((a,b) =>{
    if(a.name.toLowerCase() === b.name.toLowerCase()){
      return 0;
    }
    if(a.name.toLowerCase() < b.name.toLowerCase()){
      return -1;
    }
    return 1;  
    
  })
  .map((cartoon) => {
    return <CharacterCard key={cartoon.id} cartoon={cartoon}/>;
  });
  return (
    <section>
      <ul>{cartoonElement}</ul>
    </section>
  );
};

export default CharacterList;
