import React, { Component } from 'react';
import './input.css';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state={
            value:'',
            tasks: [],
            date: new Date().toLocaleString(),
            todo:''
        }
    }
    
    handleSubmitForm(event){
        this.state.tasks.unshift(this.state.value);
        this.setState(({tasks: this.state.tasks}));
        const local = this.state.tasks;
        localStorage.setItem("tasks", JSON.stringify(local))
        event.preventDefault();
    }
    handleChange(event){
        this.setState({value: event.target.value});
    }
    deleteItems(index){
        this.state.tasks.splice(index, 1);
        this.setState({tasks: this.state.tasks})
    }
    render() {
        const list = this.state.tasks.map((item, index) =>{
            return(
                <div className="wrap">
                    <div className="wrap__top">
                        <p className="wrap__top-text" key={index}>{item}</p>
                    </div>
                    <div className="wrap__bottom">
                        <div className="wrap__bottom-btns">
                            <button className="btn-delete" onClick={this.deleteItems.bind(this, index)}>delete</button>
                            {/* <button></button> */}
                        </div>
                        <div className="wrap__bottom-time">
                            <p className="date">{this.state.date}</p>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <form onSubmit={this.handleSubmitForm.bind(this)}>
                    <input className="input" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    <input className="input-button" type="submit"/>
                </form>
                <div>{list}</div>
            </div>
        )
    }
}

