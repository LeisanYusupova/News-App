import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getStory } from '../services/hnApi';
import 'antd/dist/antd.css';
import { List, Space } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import { getDate } from '../utils.js/utils';

export const Story = ({storyId}) => {
    const [story, setStory] = useState({});
    

    const IconText = ({ icon, text }) => (
      <Space>
        {React.createElement(icon)}
        {text}
      </Space>
    );

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
    }, []);
   
    return story && story.url ? (
      <List.Item
      key={story.title}
      actions={[
        <IconText icon={LikeOutlined} text={story.score} key="list-vertical-like-o" />,
      ]}
    >
      <List.Item.Meta
        title={<Link to = {`/story/${storyId}`}>{story.title}</Link>}
        description={`Author:  ${story.by}`}
      />
      {story.time}
    </List.Item>
        
    )
    : null
};
