import userModel from '../models/userModel.js';
import { ComparePassword, hashPassword } from './../helpers/authHelper.js';
import  jwt  from 'jsonwebtoken';


export const registerController = async (req,res) =>{
    try{
        const  {name,email,phone,address,password,role} = req.body
        //Validations
        if(!name){
            return res.send({error:'Name is Required'});
        }
        if(!email){
            return res.send({error:'Email is Required'});
        }
        if(!password){
            return res.send({error:'Password is Required'});
        }
        if(!phone){
            return res.send({error:'Phone is Required'});
        }
        if(!address){
            return res.send({error:'Address is Required'});
        }
        if(role==null){
            return res.send({error:'Role is Required'});
        }
        // check user
        const existingUser = await userModel.findOne({email})
        // existing user
        if(existingUser){
            return res.status(200).send({
                sucess:true,
                message:'Already Register please login',
            })
        }
        // register user
        const hashedPassword = await hashPassword(password)
        // save
        const user = await new userModel({
            name,
            email, 
            phone,
            address,
            password:hashedPassword,
            role
            }).save()
        res.status(201).send({
            sucess:true,
            message:'User Register Successfully',
            user
        })

    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            sucess:false,
            message:'Error in Registeration',
            error
        })
    }
};


// POST LOGIN
export const loginController = async (req,res) => {
    try{
        const {email,password} = req.body
        // validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:"Invalid email or password"
            })
        }
        const user = await userModel.findOne({email})
        // check user
        if (!user){
            return res.status(404).send({
                success:false,
                message:"Email is not registerd"
            })
        }
        const match = await ComparePassword(password,user.password) 
        // password Compare
        if (!match){
            return res.status(200).send({
                success:false,
                message:"Incorrect Password"
            })
        }
        // Token
        const token = await jwt.sign({_id:user.id},process.env.JWT_SECRET,{
            expiresIn:"7d"
        });
        res.status(200).send({
            success:true,
            message:"User Logged In Successfully",
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
                role:user.role
            },token,
        })
    }
    catch (error) {
        console.log(error),
        res.status(500).send({
            success:false,
            message:'Error in login',
            error
        })
    }
};


// GEt || TEst Controller
export const testController = async (req,res) => {
    res.send("Protected Routes  ");
};