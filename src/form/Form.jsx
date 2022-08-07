import React from "react";
import style from "./Form.module.css"

class Form extends React.Component{
    constructor(props) {
        super(props);

        this.state = {title: "", content: ""};


    }
    
    render() {
        return (
            <div className={style.formContainer}>
                {/* {console.log(this.state.newPost)}x */}
                <form className={style.form}>
                    <p className={style.titleForm}>{this.props.titleOfForm}</p>
                    <div>
                        {/* <label htmlFor="title">{this.props.titleInput}</label> */}
                        <input id="title" name="text" value={this.state.title} placeholder="Заголовок" onChange={(e) => {
                                    this.setState({...this.state, title: e.target.value});
                        }} className={style.inputTitle} />
                    </div>
                    <div>
                        {/* <label htmlFor="content">{this.props.contentInput}</label> */}
                        <textarea rows="10" value={this.state.content} placeholder="Текст" onChange={(e) => {
                                    this.setState({...this.state, content: e.target.value});
                        }} className={style.inputContent} />
                    </div>
                    {/* <input id="button" name="submit" type="submit" /> */}
                    {/*onClick={() => this.props.newPost(this.post)}  */}
                </form>
                <button className={style.button} onClick={() => this.props.newPost(this.state)}>{this.props.action}</button>
            </div>
        )
    }
}

export default Form;