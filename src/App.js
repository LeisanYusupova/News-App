import React from 'react';
import {StoriesPage} from './Pages/stories-list-page';
import { StoryPage} from './Pages/story-page';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from './const';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
      <Route
        index
        path={AppRoute.Root}
        element={<StoriesPage/>}
      />
      <Route path={AppRoute.Story}>
        <Route 
          path={AppRoute.Id}
          element={<StoryPage/>}
        />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
