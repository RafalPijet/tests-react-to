import React from 'react';
import '../App.css';
import Title from "../components/Title";
import TodoForm from "../components/TodoForm";
import TodoList from "../containers/TodoList";
import tasks from "../data/tasks";
import colors from "../data/colors";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: tasks,
            colors: colors,
            colorIndex: 0,
            selectedColor: ''
        }
    }

    componentDidMount() {
        this.colorChange();
    }

    takeName = (event) => {
        if (event.keyCode === 13) {
            let {tasks} = this.state;
            let tasksList = Array.from(tasks);
            let newTask = {
                id: tasks.length + 1,
                text: event.target.value
            };
            tasksList.push(newTask);
            this.setState({tasks: tasksList});
        }
    };

    colorChange = () => {
        setInterval(() => {
            const {colorIndex, colors} = this.state;
            colorIndex >= 5 ? this.setState({
                colorIndex: 0,
                selectedColor: "#000"
            }) : this.setState({
                colorIndex: colorIndex + 1,
                selectedColor: colors[colorIndex].color
            });

        }, 1000)
    };

    removeTask = id => {
        let {tasks} = this.state;
        let tasksList = tasks.filter(task => task.id !== id);
        this.setState({
            tasks: tasksList
        });
    };

    render() {
        const {tasks} = this.state;
        return (
            <div className="App">
                <Title info={`ToDo list, quantity of tasks: ${tasks.length}`}
                       color={this.state.selectedColor}/>
                <TodoForm takeName={this.takeName}/>
                <TodoList tasks={this.state.tasks} remove={this.removeTask}/>
            </div>
        );
    }
}

export default App;
