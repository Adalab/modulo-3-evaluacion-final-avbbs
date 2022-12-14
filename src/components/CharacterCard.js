import {Link} from 'react-router-dom';


const CharacterCard = (props) => {
  return (
    <li>
      <Link to={`cartoon/${props.cartoon.id}`} target="_blank">
        <article>
          <img
            src={props.cartoon.image}
            alt={`Foto de ${props.cartoon.name}`}
          />
          <h3>{props.cartoon.name}</h3>
          <p>{props.cartoon.species}</p>
        </article>
      </Link>
    </li>
  );
};

export default CharacterCard;
