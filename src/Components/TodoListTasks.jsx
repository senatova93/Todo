import React from 'react';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render = () => {

        let taskElements = this.props.tasks.map((t) => {
            return <TodoListTask
                task = {t}
                // title={t.title}
                // isDone={t.isDone}
                // priority={t.priority}
            changeStatus = {this.props.changeStatus}/>
        })


        return (
            <div className="todoList-tasks">

                {taskElements}


            </div>
        );
    }
}

export default TodoListTasks;

