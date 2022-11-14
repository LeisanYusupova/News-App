import {useParams} from 'react-router-dom';


export const StoryPage = () => {
    const params = useParams();
    
    return (
    <div>
        Story {params.id}
    </div>
    );
}
