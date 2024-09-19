import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import './AddTask.css';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    
    try {
      const res = await axios.post(
        'http://localhost:8080/api/task/addTask',
        { title, description },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Task Added successfully");
      navigate('/allTasks');
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error("Credentials not found, Login first", { position: "top-center" });
    }
  };

  return (
    <div className='outer1'>
      <form onSubmit={handleSubmit} className='input1'>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          type='text'
          placeholder='Title'
        />
        <input
          value={description}
          onChange={e => setDescription(e.target.value)}
          type='text'
          placeholder='Description'
        />
        <button className='btn1'>Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
