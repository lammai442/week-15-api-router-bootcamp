import './icon.css';
import { Link } from 'react-router-dom';

function Icon({ path, type }) {
	return (
		<Link to={path} className='link'>
			<i className={'icon fa-solid ' + type}></i>
		</Link>
	);
}
