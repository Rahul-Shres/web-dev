 const router = require('express').Router();
 const user = require('../models/User');
 const CryptoJs = require('crypto-js');
 const verify = require('../models/Verify');
const User = require('../models/User');

 //UPDATE

 router.put('/:id', verify, async (req, res) => {
    if(req.user.id === req.params.id || req.user.isAdmin) {
        if(req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString();
        }

        try{
            const updateUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },{
                    new : true
                },
                res.status(200).json(updateUser),
            );
            res.status(200).json(updateUser);
        }catch(err) {
            res.status(500).json("You can update only your account")
        }
        
    }
 });

 //Delete
 router.delete("/:id", verify, async(req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        try{
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User has been deleted")
        } catch(err) {
            res.status(500).json("You can delete only your account");
        }
    }
 })


 module.exports = router