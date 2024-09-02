import Task from "../databaseModels/taskModel.js";

export const addTask = async(req,res)  => {
    try {
        const {title,description , userId} = req.body;
        if(!userId){
            return res.status(400).json({error:"User id missing"});
        }
        const task = new Task({title , description , userId , state:false})
        await task.save();
        return res.status(201).json({message :" Task added successfully"});
    } catch (error) {
        console.log("Error in add task",error);
        return res.status(500).json({error : "Internal server error"});
    }
}

export const deleteTask = async(req,res)  => {
    const id = req.params;
    try {
        const task = await Task.findByIdAndDelete(id);
        if(!task){
            return res.status(404).json({error: "Task not found"});
        }
        else{
            return res.status(200).json({message :"Task deleted successfully"});
        }
    } catch (error) {
        return res.status(500).json({error: "Internal server error"});
    }
}

export const getTaskById = async(req,res) => {
    const id = req.params;
    try {
        const task = await Task.findById(id);
        if(!task){
            return res.status(401).json({error: "Task not found"});
        }
        else{
            return res.status(200).json(task);
        }
    } catch (error) {
        console.log("Error in get task by id" ,error);
        return res.status(500).json({error:"Internal server error"});
    }
}

export const updateTask = async(req,res) => {
    const id = req.params.id;
    const {title,description} = req.body;
    try {
        const updatedTask = await Task.findByIdAndUpdate(id,{title,description,state},{new:true});

        if (!updatedTask) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.status(200).json(updatedTask);
    } catch (error) {
        console.log("Error in updating task ",error);
        return res.status(500).json({error: "Internal server error"})
    }
}

export const getAllTasks = async(req,res)  => {
    const userId = req.user.id;
    try {
        const tasks = await Task.find({userId});
        return res.status(200).send(tasks);
    } catch (error) {
        console.log("Error in all tasks" ,error);
        return res.status(500).json({error: "Internal server error"});
    }
}
