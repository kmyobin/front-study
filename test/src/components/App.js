import {Route, Switch} from "react-router-dom";
import BoardPage from './views/BoardPage/BoardPage';
import ArticlePage from "./views/ArticlePage/ArticlePage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import React from "react";


function App() {
  return (
    <div>
        <Switch>
          <Route exact path="/" component={BoardPage} />
          <Route exact path="/article/:articleId" component={ArticlePage}/>
          <Route exact path="/register" component={RegisterPage}/>
        
        
        </Switch>
      
    </div>
  );
}

export default App;
