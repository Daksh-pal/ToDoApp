import User from '../databaseModels/userModel.js';;

export const register = async(req,res) => {
    const {username , password} = req.body;
    try {
        const user  = await User.findOne({username});
        if(user){
            return res.status(400).json({error : "User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({
            username,
            password : hashedPassword
        })
        const token = createToken(newUser._id);
    } catch (error) {
        console.log("Error in user registration ->" , error);
        res.status(500).json({error : "Internal Server Error"})
    }
}

const createToken = (id , res) => {
    const token = jwt.sign({id} , process.env.JWTKEY , {expiresIn : '1h'});
    res.cookie("jwt" , token);
}