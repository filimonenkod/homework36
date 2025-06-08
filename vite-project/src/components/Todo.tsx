import { useState, type ChangeEvent } from "react";
import AddForm from "./AddForm";
import TodoList from "./TodoList";


const Todo = () => {
    const [name, setName] = useState<string>("");
    const [todos, setTodos] = useState<string[]>([]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleAddTodo = () => {
        const newValue = [...todos, name];

        setTodos(newValue);
    };

    const handleDeleteItem = (name: string) => {
        const updetedTodos = todos.filter(todo => todo !== name);
        setTodos(updetedTodos);
        // setTodos((state) => state.filter((todo) => todo !== name));
    };

    const handleChangeItemName = (name: string, newName: string) => {
        const updatedTodos = todos.map(todo => {
            if (todo !== name) return todo;

            return newName;
        });

        setTodos(updatedTodos);
    };
     
    return (
        <div>
            <AddForm
                name={name}
                handleInputChange={handleInputChange}
                handleAddTodo={handleAddTodo}
            />
            <TodoList
                todos={todos}
                handleDeleteItem={handleDeleteItem}
                handleChangeItemName={handleChangeItemName}
            />
        </div>
    );
};

export default Todo;