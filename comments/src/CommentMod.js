import React, { Component } from 'react';
import {Button, Comment} from 'semantic-ui-react';
import faker from 'faker';

const CommentMod = (props) => {
    return (
        <Comment>

            <Comment.Avatar src={faker.image.avatar()}/>

            <Comment.Content>

                <Comment.Author as="a">{props.author}</Comment.Author>
                <Comment.Metadata>{props.time}</Comment.Metadata>
                <Comment.Text>{props.text}</Comment.Text>

                <Comment.Actions>
                    <Comment.Action>reply</Comment.Action>
                    <Comment.Action>report</Comment.Action>
                </Comment.Actions>

            </Comment.Content>

        </Comment>
    );
}

export default CommentMod