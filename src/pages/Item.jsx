import React,{Component} from 'react'
import '../style/style.css'

export default class Item extends Component{
    handleDelete=(id)=>{
        if(window.confirm('确定删除吗？')){
        this.props.deleteComment(id)
        }
    }

    render(){
        const {id,name,content} = this.props
        return(
                <li className="comment">
                <h3 className="title">{name}</h3>
                <p className="detail">{content}</p>
                <button className="btn" onClick={()=>this.handleDelete(id)}>删除</button>
                </li> 
        )
    }
} 

