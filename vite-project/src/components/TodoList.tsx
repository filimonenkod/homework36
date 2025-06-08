import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: string[];
    handleDeleteItem: (name: string) => void 
    handleChangeItemName: (name: string, newName: string) => void;
}

const TodoList = (props: TodoListProps) => {
    const { todos, handleDeleteItem, handleChangeItemName } = props;
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo} todo={todo} handleDeleteItem={handleDeleteItem} handleChangeItemName={handleChangeItemName} />
            ))}
        </ul>
    );
};

export default TodoList;