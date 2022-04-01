const router = require('express').Router();

router.get('/', (req, res)=>{
    if (!req.session.user) {
        res.redirect('/signin');
    }
        else {
            res.render('')
        }
})
router.get('/host', (req, res)=>{
    res.json(req.session.gameCode);
})

router.get('/player/end', (req, res) => {

    const fs = require("fs");

    //king images

    var winCrownRed = fs.readFileSync(path.join(__dirname, "public", "images", "crown-win-red.png")); //image for red king winning
    var winCrownBlue = fs.readFileSync(path.join(__dirname, "public", "images", "crown-win-blue.png")); //image for blue king winning
    var failCrownRed = fs.readFileSync(path.join(__dirname, "public", "images", "crown-fail-red.png")); //image for red king failing
    var failCrownBlue = fs.readFileSync(path.join(__dirname, "public", "images", "crown-fail-blue.png")); //image for blue king failing

    //player images

    var winPlayerRed = fs.readFileSync(path.join(__dirname, "public", "images", "crown-win-red.png")); //image for red player winning
    var winPlayerBlue = fs.readFileSync(path.join(__dirname, "public", "images", "crown-win-blue.png")); //image for blue player winning
    var failPlayerRed = fs.readFileSync(path.join(__dirname, "public", "images", "crown-fail-red.png")); //image for red player failing
    var failPlayerBlue = fs.readFileSync(path.join(__dirname, "public", "images", "crown-fail-blue.png")); //image for blue player failing

    res.render("./layouts/end", {
        end:{
            player:{
        winStatus: placeholder,  //win or lose
        winCon1: placeholder, //text for win condition 1
        winCon2: placeholder, //text for win condition 2
        winConRes1: placeholder, //whether win condition 1 was achieved
        winConRes2: placeholder, //whether win condition 2 was achieved
        blueKingStatus: placeholder, //whether blue king is alive or dead
        redKingStatus: placeholder, //whether red king is alive or dead
        winImg: placeholder } //image file displayed
        }
    });
  
})

router.get('/king/end', (req, res) => {

    res.render("./layouts/end", {
        end:{
            king:{        
        winStatus: placeholder, //win or lose
        assassinStatus: placeholder, //whether an assassin is in the room
        guardStatus: placeholder, //whether a guard is in the room
        winImg: placeholder  //image file displayed
            }    
    }
    });
  
})

module.exports = router;