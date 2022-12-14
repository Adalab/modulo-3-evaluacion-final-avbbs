import { Link } from "react-router-dom";


const CharacterDetail = (props) => {
  return (
    <article>
      <li>
        <article>
            <Link to={"/"}>Volver</Link>
          <img
            src={props.cartoon.image}
            alt={`Foto de ${props.cartoon.name}`}
          />
          <h2>{props.cartoon.name}</h2>
          <ul>
            <li>
              <i className="fa-solid fa-user-alien"></i>
              {props.cartoon.species}
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-globe"></i>
              {props.cartoon.planet}
            </li>
            <li>
              <i className="fa-sharp fa-solid fa-tv-retro"></i>
              {`${props.cartoon.episodes} (episodios)`}
            </li>
            <li>
              <i className="fa-solid fa-tombstone"></i>
              {props.cartoon.status}
            </li>
          </ul>
        </article>
      </li>
    </article>
  );
};

export default CharacterDetail;
