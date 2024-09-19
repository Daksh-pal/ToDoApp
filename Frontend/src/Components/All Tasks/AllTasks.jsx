import React, { useEffect, useState } from 'react'
import './AllTasks.css'
import toast from 'react-hot-toast'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import DeleteTask from '../DeleteTask/DeleteTask';

const AllTasks = () => {

    const navigate = useNavigate();
    const [tasks , setTasks] = useState([]);

    const handleClick = () => {
        navigate('/addTask')
    }
      const fetchTasks = async() => {
            const token = localStorage.getItem('token');

            if(!token){
                toast.error("You need to be login to view tasks")
                return ;
            }
            try {
                const res = await axios.get('http://localhost:8080/api/task/allTasks',{
                    headers : {Authorization : `Bearer ${token}`}
                });
                setTasks(res.data);   
            } catch (error) {
                console.log(error);
                toast.error("Failed to fetch tasks, " + (error.response?.data?.message || error.message));
            }
        };

        const handleDelete = async ({taskId}) => {
          try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:8080/api/task/deleteTask/${taskId}`,{
              headers : {Authorization : `Bearer ${token}`}
            })
            setTasks((prevTasks) => {
              prevTasks.filter((task) => task._id !== taskId)
            })
            toast.success("Task Updated Successfully")
          } catch (error) {
            console.log(error);
          }
        }


        useEffect(()=>{
          fetchTasks();
        },[])

  return (
    <div className='outer3'>
            <h2>Your Tasks</h2>
              {tasks.length === 0 ? ( 
                <p className='heading'>No tasks found. <br /> Add some tasks to get started.</p>
              ) : (
                <ul>
                  {tasks.map((task) => ( 
                    <li key={task._id}>
                      <h3>{task.title}</h3>
                      <p>{task.description}</p>
                      <DeleteTask taskId={task._id} onDelete={handleDelete} />
                    </li>
                  ))}
                </ul>
              )}
            <button onClick={handleClick} className='addtask'>Add new task</button>
    </div>
  )
}
export default AllTasks