import NotFound from 'components/NotFound/NotFound';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import AddEditPage from './pages/AddEdit/AddEdit';
import MainPage from './pages/Main/main';

Photo.propTypes = {
        
};

function Photo(props) {
    const match = useRouteMatch();
    console.log({ match });
    
  
    return (
      <Switch>
        <Route exact path={match.url} component={MainPage} />
  
        <Route path={`${match.url}/add`} component={MainPage} />
   

        <Route path={`${match.url}/:photoId`} component={AddEditPage} />
        
        {/* nếu k match đc cac route trên thi match vơi thăng nầy */}
        <Route component={NotFound} />
      </Switch>
    );
}

export default Photo;