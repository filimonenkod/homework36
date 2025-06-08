import type { ChangeEvent } from "react";

interface AddFormProps {
    name: string;
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleAddTodo: () => void;
}

const AddForm = (props: AddFormProps) => {
    const { name, handleInputChange, handleAddTodo } = props;
    return (
        <div>
            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={handleInputChange}
            />
            <button onClick={handleAddTodo}>Click on me</button>
        </div>
    );
};

export default AddForm;