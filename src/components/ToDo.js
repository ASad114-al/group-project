import React, { Component } from 'react';
class ToDo extends Component {
    state = {
        taskInput: "",
        collection: []

    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleAdd = () => {
        let newObj = { tasks: this.state.taskInput }
        let tempCollection = this.state.collection
        tempCollection.push(newObj)
        this.setState({
            collection: tempCollection,
            taskInput: "",
            numTodos: this.state.taskInput.length
        });
    }
    handleDelete = () => {
        
    }
    render() {
        return (
            <section>
                <h1>To Do List {this.state.numTodos}</h1>
                <form action="">
                    <input type="text" name="taskInput" value={this.state.taskInput} placeholder="Enter Task" onChange={this.handleChange} />
                </form>
                <button onClick={this.handleAdd}>Add Task</button>
                {this.state.collection.map((ele, i) =>
                    <div key={i}>
                        <p>{ele.tasks}</p>
                        <button onClick={this.handleDelete}>X</button>
                    </div>)}
            </section>
        );
    }
}

export default ToDo;