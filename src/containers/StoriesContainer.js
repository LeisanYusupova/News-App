import {useState, useEffect} from 'react';
import { getStoryIds } from '../services/hnApi';
import {Story} from '../components/Story';
import 'antd/dist/antd.css';
import { List } from 'antd';




export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  return (
    <List
    itemLayout="horizontal"
    dataSource={storyIds}
    renderItem={item => (
        <Story key={item} storyId={item}/>
    )}
  />
  );
}
