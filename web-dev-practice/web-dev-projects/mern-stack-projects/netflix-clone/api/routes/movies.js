const router = require('express').Router();
const Movie = require('../models/Movies');
const verify = require('../models/Verify');
 

//Create

router.post('/', verify, async (req, res) => {
  
    if(req.user.isAdmin) {
        const  newMovie = new Movie(req.body);

        try{
            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie);
        } catch(e){
            res.status(500).json(e);
        }
    } else {
        res.status(403).json("You are not allowed");
    }
});

//Update

router.put('/:id', verify, async (req, res) => {
  
    if(req.user.isAdmin) {
        
        try{
            const  updatedMovie = new Movie.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                }, 
                {
                    new: true
                },
                );
                res.status(200).json(updatedMovie);
        } catch(e){
            res.status(500).json(e);
        }
    } else {
        res.status(403).json("You are not allowed");
    }
});

//Delete

router.delete('/:id', verify, async (req, res) => {
  
    if(req.user.isAdmin) {
        
        try{
            await Movie.findByIdAndDelete(
                req.params.id);
                res.status(200).json(" The movie has been deleted");
        } catch(e){
            res.status(500).json(e);
        }
    } else {
        res.status(403).json("You are not allowed");
    }
});

//Get

router.get('/find/:id', verify, async (req, res) => {
  
    if(req.user.isAdmin) {
        
        try{
            const movie = await Movie.findById(
                req.params.id);
                res.status(200).json();
        } catch(e){
            res.status(500).json(e);
        }
    } else {
        res.status(403).json("You are not allowed");
    }
});

//Get Random movie

router.get('/random', verify, async (req, res) => {
    const type = req.query.type;
    let movie;
  
        
        try{
            if (type === 'series'){
                movie = await Movie.aggregate([
                    {
                        $match: { isSeries: true },
                    },
                    {
                        $sample: { size:1},
                    }
                ])
            } else{
                movie = await Movie.aggregate([
                    {
                        $match: { isSeries: false },
                    },
                    {
                        $sample: { size:1},
                    }
                ])
            }  
            res.status(200).json(movie);
        } catch(e){
            res.status(500).json(err);
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