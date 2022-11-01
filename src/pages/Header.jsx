import React,{Component} from 'react'
import '../style/style.css'
import {nanoid} from 'nanoid' 

export default class Header extends Component{
        constructor (props) {
            super(props)
            this.state = {
            name: '',
            content: ''
            }
            this.handleAddComment = this.handleAddComment.bind(this)
            this.changeName = this.changeName.bind(this)
            this.changeContent = this.changeContent.bind(this)
        }

        handleAddComment () {
            const { name, content } = this.state
            const id=nanoid()
            const commentObj = {id, name, content }
            this.props.addComment(commentObj)
            this.setState({
              name: '',
              content: ''
            })
          }
        
          changeName (event) {
            this.setState({
              name: event.target.value
            })
          }
        
          changeContent (event) {
            this.setState({
              content: event.target.value
            })
          }
        
        render(){
        return(
            <div className="container">
                <h3 className="name">user name</h3>
                <input className="iname" value={this.state.name} onChange={this.changeName}></input>
                <h3 className="content">comment content</h3>
                <input className="icontent" value={this.state.content} onChange={this.changeContent}></input>
                <br/>
                <button type="submit" className="btn" onClick={this.handleAddComment}>提交</button>
            </div>
        )
    }
} 