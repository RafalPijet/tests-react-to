import React from "react";
import PropTypes from "prop-types";
import Todo from "../components/Todo";

const TodoList = props => (
  <div>
      {props.tasks.map(task =>
          <Todo key={task.id} id={task.id} content={task.text} remove={props.remove}/>
      )}
  </div>
);

TodoList.propTypes = {
    tasks: PropTypes.array.isRequired,
    remove: PropTypes.func
};

export default TodoList;
