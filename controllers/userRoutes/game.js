const router = require('express').Router();

// JSON file with all role's data
const roles = require('../../lib/roles.json');


// const kingGameRender={
//     king:{
//         role:[{
//             name: ,
//             loyalty: ,
//             ability: ,
//             winCondition1: ,
//             winCondition2: ,
//             footnote:
//         }],
//         method:{
//             type: "king",
//             opposite: "player",
//             oppositeRoute: "/game/king"
//         }
//     }
// },
// playerGameRender={
//     player:{
//         role:[{
//             name: ,
//             loyalty: ,
//             ability: ,
//             winCondition1: ,
//             winCondition2: ,
//             footnote:
//         }],
//         method:{
//             type: "player",
//             opposite: "king",
//             oppositeRoute: "/game/player"
//         }
//     }
// };

// displays king's card page with dynamic data, rules, and game card explanation
router.get('/king',(req, res)=>{
    // dummy data (will eventually pull from kingGameRender)
    const kingData = 
        {
            "id": 1,
            "name": "Red King",
            "loyalty": "Red",
            "ability": "Banish subjects to the Blue Court",
            "winCondition1": "Survive",
            "winCondition2": "Kill the Blue King",
            "footnote": "Remain in the Red court",
            "king": true
        };

    res.render('partials/king', {layout: 'main', kingData, roles});
});

// displays player's card page with dynamic data, rules, and game card explanation
router.get('/player',(req, res)=>{
    // will eventually feed in playerGameRender
    res.render('partials/player', {
        roles,
        rules:{}
    });
});


// displays king's end page with dynamic data
router.get('/king/end', (req, res) => {

    res.render('partials/end');
    //,{
    //     end:{
    //         king:{        
    //             winStatus: placeholder, //win or lose
    //             assassinStatus: placeholder, //whether an assassin is in the room
    //             guardStatus: placeholder, //whether a guard is in the room
    //             winImg: placeholder  //image file displayed
    //         }    
    // }
    // });
  
});

// displays player's end page with dynamic data
router.get('/player/end', (req, res) => {

    const fs = require("fs");

    // //king images

    // var winCrownRed = fs.readFileSync(path.join(__dirname, "public", "images", "crown-win-red.png")); //image for red king winning
    // var winCrownBlue = fs.readFileSync(path.join(__dirname, "public", "images", "crown-win-blue.png")); //image for blue king winning
    // var failCrownRed = fs.readFileSync(path.join(__dirname, "public", "images", "crown-fail-red.png")); //image for red king failing
    // var failCrownBlue = fs.readFileSync(path.join(__dirname, "public", "images", "crown-fail-blue.png")); //image for blue king failing

    // //player images

    // var winPlayerRed = fs.readFileSync(path.join(__dirname, "public", "images", "crown-win-red.png")); //image for red player winning
    // var winPlayerBlue = fs.readFileSync(path.join(__dirname, "public", "images", "crown-win-blue.png")); //image for blue player winning
    // var failPlayerRed = fs.readFileSync(path.join(__dirname, "public", "images", "crown-fail-red.png")); //image for red player failing
    // var failPlayerBlue = fs.readFileSync(path.join(__dirname, "public", "images", "crown-fail-blue.png")); //image for blue player failing

    res.render('partials/end');
    // , {
    //     end:{
    //         player:{
    //             winStatus: placeholder,  //win or lose
    //             winCon1: placeholder, //text for win condition 1
    //             winCon2: placeholder, //text for win condition 2
    //             winConRes1: placeholder, //whether win condition 1 was achieved
    //             winConRes2: placeholder, //whether win condition 2 was achieved
    //             blueKingStatus: placeholder, //whether blue king is alive or dead
    //             redKingStatus: placeholder, //whether red king is alive or dead
    //             winImg: placeholder } //image file displayed
    //     }
    // });
  
});

module.exports = router;