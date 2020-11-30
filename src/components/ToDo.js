import React, { Component } from 'react';
class ToDo extends Component {
    state = {
        taskInput: "",
        toDoList: []
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleAdd = () => {
        let newObj = { tasks: this.state.taskInput }
        let temptoDoList = this.state.toDoList
        temptoDoList.push(newObj)
        this.setState({
            toDoList: temptoDoList,
            taskInput: "",
        });
    }
    handleDelete = (index) => {
        let { toDoList } = this.state;
        toDoList.splice(index, 1);
        this.setState({
            toDoList: toDoList
        })
    }
    render() {
        return (
            <section>
                <h1>To Do List</h1>
                <h2>You have {this.state.toDoList.length === 1 ? (this.state.toDoList.length + " task") : (this.state.toDoList.length + " tasks")} to do.</h2>
                <form action="">
                    <input type="text" name="taskInput" value={this.state.taskInput} placeholder="Enter Task" onChange={this.handleChange} />
                </form>
                <button onClick={this.handleAdd}>Add Task</button>
                {
                    this.state.toDoList.map((ele, i) =>
                        <div key={i}>
                            <p>{ele.tasks}</p>
                            <button onClick={this.handleDelete}>X</button>
                        </div>)
                }
            </section >
        );
    }
}

export default ToDo;