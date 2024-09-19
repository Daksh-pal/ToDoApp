import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const DeleteTask = ({taskId}) => {

    const navigate = useNavigate();

    const handleDelete = async(e) =>{
        e.preventDefault();
        console.log("Attempting to delete task with ID: ", taskId);
        try {
        console.log("In try block")
        const response = await axios.post(`http://localhost:8080/api/task/deleteTask/${taskId}`);
        console.log("Task deleted successfully:", response.data); 
        navigate("/allTasks")
        toast.success("Task deleted successfully")
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    }
  return (
    <div>
        <button onClick={handleDelete}>
            Complete
        </button>
    </div>
  )
}

export default DeleteTask