import React from "react";
import { Context } from "../../context/todoContext";

const Form = ({ handleSubmit }) => {
    const ctx = React.useContext(Context);
    return (
        <div className='card'>
            <div className='card-header'>
                <h3 className='text-center'>Add Todo</h3>
            </div>
            <div className='card-body'>
                <form onSubmit={(evt) => handleSubmit(evt)}>
                    <div className="input-group">
                        <input
                            className='form-control'
                            type='text'
                            name='todo_name'
                            ref={ctx.todoNameRef}
                            placeholder='Todo name'
                        />
                        <button className='btn btn-primary' type='submit'>
                            Add
                        </button>
                    </div>
                </form>
            </div>
            <div className='card-footer d-flex justify-content-center'>
                <button className='btn btn-primary' type='button'>
                    All
                </button>
                <button className='btn btn-primary mx-3' type='button'>
                    Completed
                </button>
                <button className='btn btn-primary' type='button'>
                    Uncompleted
                </button>
            </div>
        </div>
    );
};

export default Form;
