const dbName = 'food-ordering';
const dbHost = 'localhost';
const dbPort = 27017;
module.exports = {
    url: `mongodb://${dbHost}:${dbPort}/${dbName}`
}
// module.exports = {
//     url: `mongodb+srv://project:project123@food-ordering.mikc30r.mongodb.net/test`
// }

