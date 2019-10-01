//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
    db: {
        uri: 'mongodb+srv://samanthasu:bootcamp2proj@cen3031-es66t.mongodb.net/test?retryWrites=true&w=majority'
    },
    openCage: {
        key: '3b69495978a145718b7de0da07299af1' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
    },
    port: 8080
};