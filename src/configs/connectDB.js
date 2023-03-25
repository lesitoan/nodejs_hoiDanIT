// get the client
import exp from 'constants';
import mysql from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nodejsbasic'
});

// execute will internally call prepare and query
// connection.query(
//   'SELECT * FROM `users` ',
//   function(err, results, fields) {
//     console.log(">>>>>>>>>check DB")
//     console.log(results);
//     let rows = results.map((row) => { return row })
//     console.log(rows);
//   }
// );

export default connection;