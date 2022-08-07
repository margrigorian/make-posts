import React from "react";
import Posts from "../posts/Posts";

class NavigateToElements extends React.Component{
    render() {
        return (
            <Posts id={this.props.id} title={this.props.title} content={this.props.content} />
        )
    }
}

export default NavigateToElements;