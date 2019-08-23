import React from "react";
import PropTypes from "prop-types";
import "./Todo.css";

const Todo = props => (
    <div className="box">
        <h3 className="Todo" onClick={() => props.remove(props.id)}>{`${props.id}: ${props.content}`}</h3>
    </div>
);

Todo.propTypes = {
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    remove: PropTypes.func
};

export default Todo;
