import Task from "../databaseModels/taskModel";

export const addTask = () => {
    try {
        const {title,description} = req.body;
        const userId = req.body;
        if(!userId){
            return res.status(400).json({error:"User id missing"});
        }
        const task = new Task({title , description , userId , state:false})
        task.save();
        return res.status(201).json({message :" Task added successfully"});
    } catch (error) {
        console.log("Error in add task",error);
        return res.status(500).json({error : "Internal server error"});
    }
}

export const deleteTask = () => {
    const id = req.body;
    try {
        const task = Task.findByIdAndDelete(id);
        if(!task){
            return res.status(404).json({error: "Task not found"});
        }
        else{
            return res.status(201).json({message :"Task deleted successfully"});
        }
    } catch (error) {
        return res.status(500).json({error: "Internal server error"});
    }
}


export const getAllTasks = async() => {
    try {
        const tasks = await Task.find();
        return res.status(201).send(tasks);
    } catch (error) {
        console.log("Error in all tasks" ,error);
        return res.status(500).json({error: "Internal server error"});
    }
}
