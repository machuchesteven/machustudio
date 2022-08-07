import { Image } from 'react-bootstrap';

import './DevIcon.css';

const DevIcon = (props) => {
    return (
        <div className="mt-2 md devicon-container">
            <Image fluid="false" className='devicon' src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${props.name}/${props.name}-original.svg`} />
        </div>
    )
}

export default DevIcon;