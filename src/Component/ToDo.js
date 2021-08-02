import React from 'react';
import './ToDo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function ToDo() {
    return (
        <div className="todo-container">
            <h2>To-Do App</h2>
            <div className="todo">
                <form action="/" method="POST" className="todo-header">
                    <input type="text" name="content" />
                    <button type="submit"><FontAwesomeIcon icon={faPlusCircle} /></button>
                </form>
                <ul className="todo-list">
                    <li className="todo-list-item">
                        <div className="todo-list-item-name">
                            Typed Text
                        </div>
                        <a href="" className="edit">
                            <FontAwesomeIcon icon={faEdit} />
                        </a>
                        <a href="" className="delete">
                            <FontAwesomeIcon icon={faTrash} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
