import React from 'react';

class TodoListTask extends React.Component {
    state = {
        isEditMode: false
    }
    activatedEditMode = () => {
        this.setState({isEditMode: true})
    };
    deactivetedEditMode = () => {
        this.setState({isEditMode: false})
    }
    onIsDoneChanged = (e) => {
        this.props.changeStatus(e.currentTarget.checked, this.props.task)
    }
    onIsTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value )
    }



    render = () => {
        const taskClassName = this.props.task.isDone
            ? "todoList-task done "
            : "todoList-task"
        return (
            <div className={taskClassName}>
                <input type="checkbox"
                       checked={this.props.task.isDone}
                       onChange={this.onIsDoneChanged}/>
                {this.state.isEditMode
                    ? <input value={this.props.task.title}
                             autoFocus={true}
                             onBlur={this.deactivetedEditMode}
                            onChange = {this.onIsTitleChanged}/>
                    : <span onClick={this.activatedEditMode}>{this.props.task.id}:{this.props.task.title}</span>
                }

                <span> priority: {this.props.task.priority} </span>
            </div>

        );
    }
}

export default TodoListTask;

