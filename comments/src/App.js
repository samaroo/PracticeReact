import React, { Component } from 'react';
import {Comment} from 'semantic-ui-react';
import CommentMod from './CommentMod';

class App extends Component {
  render() {
    return (
      <Comment.Group>
        <CommentMod 
          author="Brandon" 
          time="Yesterday @ 7:39AM" 
          text="What an amazing show! Can't wait for the next one!">
        </CommentMod>

        <CommentMod 
        author="Thrishna" 
        time="Yesterday @ 2:34PM" 
        text="I agree with @Brandon!">
        </CommentMod>

        <CommentMod 
        author="Akash" 
        time="Today @ 10:29AM" 
        text="Nah that shit sucked :(">
        </CommentMod>

        <CommentMod 
        author="Shajia" 
        time="Just Now" 
        text="@Akash shut up, go do the dishes!">
        </CommentMod>
      </Comment.Group>
    );
  }
}

export default App;
