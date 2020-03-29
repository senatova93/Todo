import React from 'react';


class TodoListHeader extends React.Component {
    newTaskTitleRef = React.createRef()

    onAddTaskButtonClick = () => {
        let newText = this.newTaskTitleRef.current.value;
        this.newTaskTitleRef.current.value = "";
        this.props.addTask(newText);
    }
    render = () => {
        return (
            <div className="TodoListHeader">
                <div className="todoList">

                    <h3 className="todoList-header__title">What to Learn</h3>
                    <div className="todoList-newTaskForm">
                        <input type="text" placeholder="New task name" ref={this.newTaskTitleRef}/>
                        <button onClick={this.onAddTaskButtonClick}>Add</button>
                    </div>

                </div>
            </div>

        );
    }
}

export default TodoListHeader;

