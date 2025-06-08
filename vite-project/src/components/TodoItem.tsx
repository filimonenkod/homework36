import { useState, type ChangeEvent } from "react";

interface TodoItemProps {
    todo: string;
    handleDeleteItem: (name: string) => void;
    handleChangeItemName: (name: string, newName: string) => void;
}

const TodoItem = (props: TodoItemProps) => {
    const { todo, handleDeleteItem, handleChangeItemName} = props;

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [newName, setNewName] = useState(todo);

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>
        setNewName(e.target.value);

    const handleChangeCancel = () => {
        setNewName(todo);
    };

    const handleApplyChange = () => {
        handleChangeItemName(todo, newName);
        setIsEditing(false);
    };


    return (
        <li>
            {isEditing ? <input type="text" value={newName} onChange={handleNameChange} /> : <p>{todo}</p>} 
            {isEditing ? (
                <>
                    <button onClick={handleChangeCancel}>Cancel</button>
                    <button onClick={() => handleChangeItemName(todo, newName)}>
                        Apply
                    </button>
                </>
            ) : (
                    <>
                        <button onClick={() => handleDeleteItem(todo)}>X</button>
                        <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
                    </>
            )}
        </li>
    );
};

export default TodoItem;