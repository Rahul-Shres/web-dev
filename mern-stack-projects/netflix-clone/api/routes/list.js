const router = require('express').Router();
const List = require('../models/List');
const verify = require('../models/Verify');
 

//Create

router.post('/', verify, async (req, res) => {
  
    if(req.user.isAdmin) {
        const  newList = new Movie(req.body);

        try{
            const savedList = await newList.save();
            res.status(201).json(savedList);
        } catch(e){
            res.status(500).json(e);
        }
    } else {
        res.status(403).json("You are not allowed");
    }
});

//Delete

router.delete('/', verify, async (req, res) => {
  
    if(req.user.isAdmin) {


        try{
           await List.findByIdAndDelete(req.params.id);
            res.status(201).json("THe post has been deleted");
        } catch(e){
            res.status(500).json(e);
        }
    } else {
        res.status(403).json("You are not allowed");
    }
});


//Get

router.get('/', verify, async (req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];
        
        try{
           if(typeQuery){
            if(genreQuery){
                list = await List.aggregate([
                    { $sample: { size: 10}},
                    { $match: { type: typeQuery, genre: genreQuery } }
                ])
            }else{
                list = await List.aggregate([
                    { $sample: { size: 10}},
                    { $match: { type: typeQuery, } }
                ])
            }
           }else{
            list = await List.aggregate([{ $sample : { size: 10}}]);
        }
                res.status(200).json(list);
        } catch(e){
            res.status(500).json(e);
        }
    
});



    //Get All

router.get('/', verify, async (req, res) => {
  
    if(req.user.isAdmin) {
        
        try{
            const movies = await Movie.find();
                res.status(200).json(movies.reverse());
        } catch(e){
            res.status(500).json(e);
        }
    } else {
        res.status(403).json("You are not allowed");
    }
});



module.exports = router