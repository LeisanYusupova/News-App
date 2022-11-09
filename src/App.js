import React, {useState, useEffect} from 'react';
import { getStoryIds } from './services/hnApi';
import {StoriesContainer} from './containers/StoriesContainer';


function App() {
  
  return (
    <StoriesContainer/>
  );
}

export default App;
