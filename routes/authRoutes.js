import express from 'express'
import {
    registerController,
    loginController,
    testController
}
from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
//router Object
const router  = express.Router()        

//routing
//REGISTER || METHOD POST
router.post('/register',registerController);

// LOGIN || POST
router.post('/login', loginController);


// Test Route
router.get('/test', requireSignIn, isAdmin, testController);
export default router

// Protected Route Auth
router.get('/user-auth',requireSignIn,(req,res)=>{
  res.status(200).send({ok:true})
})