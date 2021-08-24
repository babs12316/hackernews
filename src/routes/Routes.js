import React from "react"
import {
   Switch,
    Route,
   } from "react-router-dom";
import { StoriesContainer } from "../containers/StoriesContainer";
import {CommentsContainer} from "../containers/CommentsContainer";

const Routes =()=>(
        <Switch>
             <Route path="/" exact>
            <StoriesContainer />
          </Route>
  
      <Route path="/comments/:storyId" exact>
            <CommentsContainer />
          </Route>

        </Switch>
    )

    export default Routes;