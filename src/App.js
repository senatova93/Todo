import React from 'react';
import './App.css';
import TodoListHeader from "./Components/TodoListHeader";
import TodoListTasks from "./Components/TodoListTasks";
import TodoListFooter from "./Components/TodoListFooter";

class App extends React.Component {


    state = {     tasks : [
            {title: "JS", isDone: true, priority: "high"},
            {title: "Angular", isDone: false, priority: "middle"},
            {title: "HTML", isDone: true, priority: "low"},
            {title: "CSS", isDone: true, priority: "low"},
            {title: "Java", isDone: false, priority: "low"},
            {title: "React", isDone: false, priority: "high"}
        ],
    filterValue : "All"
}
addTask = (newText) => {

        let newTask = {
    title: newText,
    isDone: true,
    priority: "low"
};
    let newTasks = [...this.state.tasks, newTask]
    this.setState( {
        tasks: newTasks
    })


}
changeFilter = (newFilterValue) => {
        this.setState( {filterValue: newFilterValue})
}
    changeStatus = (status, task) => {
        let tasksCopy = this.state.tasks.map (t => {
            if (t==task) {
                return {...t, isDone:status}
            }
            return t
        });
        this.setState( {
            tasks: tasksCopy
        })

    }
    render = () => {


        return (
            <div className="App">
                        <div className="todoList">
                            <TodoListHeader addTask = {this.addTask}/>
                    {/*        <div className="todoList-header">*/}
                    {/*            <h3 className="todoList-header__title">What to Learn</h3>*/}
                    {/*            <div className="todoList-newTaskForm">*/}
                    {/*                <input ref= {this.newTaskTitleRef} type="text" placeholder="New task name"/>*/}
                    {/*                <button onClick={this.onAddTaskClick}>Add</button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}



                    <TodoListTasks
                        changeStatus = {this.changeStatus}
                        tasks={this.state.tasks.filter( (tasks) => {
                        switch (this.state.filterValue) {
                            case "All":     return true;
                            case "Completed": return tasks.isDone;
                            case "Active": return !tasks.isDone;
                            default: return true
                    }

                    })}/>
                    <TodoListFooter changeFilter = {this.changeFilter} filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

