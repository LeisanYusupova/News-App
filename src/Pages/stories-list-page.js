import {useState, useEffect} from 'react';
import { getStoryIds } from '../services/hnApi';
import {Story} from '../components/Story';
import { RefreshButton } from '../components/Button';
import 'antd/dist/antd.css';
import { List } from 'antd';
import { Typography } from 'antd';





export const StoriesPage = () => {
    const { Title } = Typography;
    const [storyIds, setStoryIds] = useState([]);
    useEffect(() => {
    getStoryIds().then(data => setStoryIds(data).slice(0,100));
  }, []);


  return (
    <> 
      <Title level={2} style={{color: 'red', textAlign: 'center'}}>News</Title>
      <List
    style = {{textAlign: 'center'}}
    itemLayout="vertical"
    size="small"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 5,
    }}
    dataSource={storyIds}
    footer={
      <div>
        <RefreshButton/>
      </div>
    }
    renderItem={item => (
      <Story key={item} storyId={item}/> )}
  />
    </>
    
  );
}
