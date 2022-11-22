const path = require('path');
const fs = require('fs');



let portImgss = [];

fs.readdir('public/img/galleryimgs', (err, files) => {
    if(err){
        console.log('Unable to scan' + err);
    }
    files.forEach(function ( file){
        portImgss.push(file);
    })

    console.log(portImgss)

})



/*const addportImg = (portImg) => {
    portImgss.push(portImg);
};
*/


module.exports = {
    portImgss,
    //addportImg
};