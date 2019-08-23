import React from "react";
import PropTypes from "prop-types";
import "./TodoForm.css";

const TodoForm = props => (
    <form onSubmit={event => event.preventDefault()}>
        <label htmlFor="taskInput">Enter new taks:</label>
        <input className="Input" type="text" id="taskInput"
               onKeyUp={event => props.takeName(event)}
               onBlur={event => event.target.value = ""}/>
    </form>
);

TodoForm.propTypes = {
    takeName: PropTypes.func.isRequired
};

export default TodoForm;
