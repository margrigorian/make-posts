import React from "react";
import style from "./Posts.module.css";

class Posts extends React.Component { 
    render() {

        return (
            <div>
                <div className={style.postContainer}>
                    <div  className={style.post} style={{alignSelf: this.props.id % 2 === 0 ? "flex-start" : "flex-end"}}>
                        <p className={style.title}>{this.props.title}</p>
                        <p className={style.content}>{this.props.content}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Posts;