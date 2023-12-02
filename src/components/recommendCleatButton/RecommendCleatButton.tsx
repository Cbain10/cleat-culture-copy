import './RecommendCleatButton.css';
import { Link } from 'react-router-dom';

const RecommendCleatButton = () => {
    // only navigation
    return (
            <Link to={`/chooser`}>
                <div className='recommend-cleat-button'>
                    Find what cleats are best for you!
                </div>
            </Link>
    )
};

export default RecommendCleatButton;