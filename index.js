
const information = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Salut je suis ${information.nom} de la ${information.campus}`,
    e:"UU"  
}));