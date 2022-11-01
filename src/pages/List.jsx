import React,{Component} from 'react'
import Item from './Item'
import '../style/style.css'

export default class List extends Component{
    render(){
        const {comments,deleteComment}=this.props
        return(
            <ul>
                {
                    comments.map((comment)=>{
                        return <Item key={comment.id} {...comment} deleteComment={deleteComment}/>
                    })
                }
            </ul>
        )
    }
} 