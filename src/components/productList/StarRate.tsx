
import { Rating } from 'react-simple-star-rating';

const StarRate = ({ratingnum} : {ratingnum: number}) => {
        return (
        <div>
            <Rating readonly = {true} initialValue = {ratingnum} size ={15}/>
        </div>
    );
};

export default StarRate;