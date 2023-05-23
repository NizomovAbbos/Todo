import React from "react";
import Form from "../Form";
import { Context } from "../../context/todoContext";


const Todos = () => {
    const ctx = React.useContext(Context);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const todoName = ctx.todoNameRef.current.value;

        const newTodo = {
            id: new Date().getTime().toString(),
            name: todoName,
        };

        ctx.setTodos([...ctx.todos, newTodo]);

        ctx.todoNameRef.current.value = "";
        ctx.todoNameRef.current.focus();
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-8 my-3 mx-auto'>
                    <Form handleSubmit={handleSubmit} />

                    <h1 className='text-center my-3'>Todo List</h1>

                    <div className='row'>
                        {ctx.todos.length > 0 &&
                            ctx.todos.map((todo, index) => (
                                <div className='list-group-item d-flex justify-content-between align-items-center border border-2 rounded-2 mb-3 p-2'>
                                    <div>
                                        {index + 1}. &nbsp;
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            name='todo_check'
                                            defaultChecked={todo.completed}
                                        />
                                        <span className="ms-3">todoName</span>
                                    </div>
                                    <div>
                                        <button className='btn btn-danger me-3' type='button'>
                                            ✖
                                        </button>
                                        <button className='btn btn-success' type='button'>
                                            ✎
                                        </button>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todos;
