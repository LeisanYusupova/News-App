import React, {useState, useEffect} from 'react';
import { getStory } from '../services/hnApi';
import 'antd/dist/antd.css';
import { Avatar, List } from 'antd';

export const Story = ({storyId}) => {
    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
    }, []);
    return story && story.url ? (
        <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href={story.url}>{story.title}</a>}
          description={`Author: ${story.by} ${story.time}`}
        />
      </List.Item>
        
    )
    : null
};
