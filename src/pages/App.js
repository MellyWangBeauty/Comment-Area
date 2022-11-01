import '../style/style.css'
import React, { Component } from 'react'
import Header from './Header.jsx'
import List from './List.jsx'
import {nanoid} from 'nanoid' 

export default class App extends Component {
    state={
        comments:[
            {id:nanoid(),name:'张三',content:'React好难'},
        ]
    }

    addComment=(commentObj)=>{
        const {comments}=this.state
        const newComments = [commentObj,...comments]
        this.setState({comments:newComments})
    }

    deleteComment=(id)=>{
        const {comments} = this.state
        const newComments=comments.filter((commentObj)=>{
            return commentObj.id!==id
        })
        this.setState({comments:newComments})
    }

    render(){
         return (
        <div>
            <Header addComment={this.addComment}/>
            <List comments={this.state.comments} deleteComment={this.deleteComment}/>
        </div>
        )
    }
}