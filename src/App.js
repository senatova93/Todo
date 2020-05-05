import React from 'react';
import './App.css';
import TodoListHeader from "./Components/TodoListHeader";
import TodoListTasks from "./Components/TodoListTasks";
import TodoListFooter from "./Components/TodoListFooter";

class App extends React.Component {


    state = {
        tasks: [
            // {id: 0, title: "JS", isDone: true, priority: "high"},
            // {id: 1, title: "Angular", isDone: false, priority: "middle"},
            // {id: 2, title: "HTML", isDone: true, priority: "low"},
            // {id: 3, title: "CSS", isDone: true, priority: "low"},
            // {id: 4, title: "Java", isDone: false, priority: "low"},
            // {id: 5, title: "React", isDone: false, priority: "high"}
        ],
        filterValue: "All"
    };
    nextTaskId = 0


    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem("state", stateAsString)
    }

    restoreState = () => {
        let state = {
            tasks: [],
            filterValue: "All"
        }
        let stateAsString = localStorage.getItem("state");
        if (stateAsString) {
            state = JSON.parse(stateAsString);
        }
        this.setState(state, () => {this.state.tasks.forEach(t =>{
            if(t.id >= this.nextTaskId){
                this.nextTaskId= t.id + 1
            }
        })
        });
    }
 componentDidMount() {
        this.restoreState()
 }


    addTask = (newText) => {

        let newTask = {
            title: newText,
            isDone: true,
            priority: "low",
            id: this.nextTaskId
        };
        this.nextTaskId++
        let newTasks = [...this.state.tasks, newTask]
        this.setState({tasks: newTasks}, this.saveState)
    }
    changeFilter = (newFilterValue) => {
        this.setState({filterValue: newFilterValue})
    }
    changeTask = (taskId, obj) => {
        let tasksCopy = this.state.tasks.map(t => {
            if (t.id === taskId) {
                return {...t, ...obj}
            }
            return t
        });
        this.setState(
            {tasks: tasksCopy}, this.saveState)}


    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone})
    }

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title})
    }

    render = () => {


        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask}/>
                    {/*        <div className="todoList-header">*/}
                    {/*            <h3 className="todoList-header__title">What to Learn</h3>*/}
                    {/*            <div className="todoList-newTaskForm">*/}
                    {/*                <input ref= {this.newTaskTitleRef} type="text" placeholder="New task name"/>*/}
                    {/*                <button onClick={this.onAddTaskClick}>Add</button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    <TodoListTasks
                        changeTitle={this.changeTitle}
                        changeStatus={this.changeStatus}
                        tasks={this.state.tasks.filter((tasks) => {
                            switch (this.state.filterValue) {
                                case "All":
                                    return true;
                                case "Completed":
                                    return tasks.isDone;
                                case "Active":
                                    return !tasks.isDone;
                                default:
                                    return true
                            }

                        })}/>
                    <TodoListFooter

                        changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

