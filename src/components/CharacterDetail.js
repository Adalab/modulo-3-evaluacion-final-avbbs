import { Link } from "react-router-dom";
import "../styles/layout/CharacterDetail.scss";

const CharacterDetail = (props) => {
  return (
    <main className="mainDetail">
      <article className="articleDetail">
        <img src={props.cartoon.image} alt={`Foto de ${props.cartoon.name}`} className="articleDetail__image"/>
        <div className="div">
          <h2 className="articleDetail__title">{props.cartoon.name}</h2>
          <ul className="articleDetail__list">
            <li className="articleDetail__list--item">Species: {props.cartoon.species}</li>
            <li className="articleDetail__list--item">Planet: {props.cartoon.planet}</li>
            <li className="articleDetail__list--item">Episodes: {props.cartoon.episodes.length} </li>
            <li className="articleDetail__list--item">Status: {props.cartoon.status}</li>
          </ul>
        </div>
      </article>
      <Link className="link" to={"/"}>Back</Link>
    </main>
  );
};

export default CharacterDetail;
