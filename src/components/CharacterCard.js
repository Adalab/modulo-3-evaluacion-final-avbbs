import {Link} from 'react-router-dom';
import '../styles/layout/CharacterCard.scss';


const CharacterCard = (props) => {
  return (
    <li>
      <Link to={`cartoon/${props.cartoon.id}`} className='link'>
        <article className='article'>
          <img
            src={props.cartoon.image}
            alt={`Foto de ${props.cartoon.name}`}
            className='article__image'
          />
          <div className='article__div'>
            <h3 className='article__div--title'>{props.cartoon.name}</h3>
            <p className='article__div--text'>{props.cartoon.species}</p>
            <p>{props.cartoon.planet}</p>
          </div>
        </article>
      </Link>
    </li>
  );
};

export default CharacterCard;
