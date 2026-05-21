const bcrypt = require('bcrypt');
const User = require('../models/UserModel');
const jwt = require('jsonwebtoken')
const Data = require('../models/Data')
const createUser = async (req, res) => {
    
    const {  name, phone,email, password } = req.body;
    try {
        const existingUser = await Data.findOne({ phone });
        if (existingUser) {
            return res.status(400).json({ msg: 'User with this phone number already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await new Data({  name, phone ,email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ msg: "User created successfully", user: newUser ,success:true});
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ msg:"Failed to create user" ,error});
    }
};

const viewUsers = async (req, res) => {
    try {
        const users = await Data.find();
        res.status(200).json({ msg: "User Details", data: users });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Error" })
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const update = await Data.findByIdAndUpdate(id, req.body, { new: true });
        if (!update) {
            return res.status(400).json({ msg: "User Not Found" });
        }
        res.status(200).json({ msg: "User Details Updated", data: update })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Error" })
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const del = await Data.findByIdAndDelete(id);
        if (!del) {
            return res.status(400).json({ msg: "User Not Found" });
        }
        res.status(200).json({ msg: "Deleted Successfully", data: del });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Error" })
    }
}

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const Finduser = await Data.findOne({ email });
        if (!Finduser) {
            return res.status(400).json({ msg: "User Doesn't Exist" });
        }
        const MatchPassword = await bcrypt.compare(password, Finduser.password)
        if (!MatchPassword) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        }
        const token = jwt.sign({id:Finduser._id,role:Finduser.role,name:Finduser.name},process.env.SECRET_KEY,{expiresIn:'1h'})

        // Setting Cookie

        res.cookie("token",token,{
            httpOnly:true,
            secure:true,
            sameSite:"strict",
            maxAge:24*60*60*1000
        })
        
        res.status(200).json({ msg: "Log In Successfully",token:token,success:true,data:Finduser.role })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Error" })
    }
}
module.exports = { createUser, viewUsers, updateUser, deleteUser, Login };
