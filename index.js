const sqlite3 = require("sqlite3").verbose();
const dbname='univers.db';
let db = new sqlite3.Database(dbname, err => {
    if(err)
    throw err
    console.log("Base de donnée initialisé dans le fichier : " + dbname);
});

//db.run('CREATE TABLE IF NOT EXISTS planetes(id INTEGER PRIMARY KEY, name,size VARCHER(25))');
//db.run('CREATE TABLE IF NOT EXISTS planetes(id INTEGER PRIMARY KEY, name VARCHAR(25), size VARCHAR(255), created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL)');

db.run('INSERT INTO planetes(name,size) values (?,?)', ["Vénus", "352158"]);
db.run('INSERT INTO planetes(name,size) values (?,?)', ["Terre", "8516975125"]);
db.run('INSERT INTO planetes(name,size) values (?,?)', ["Pluton","65416464"]);
db.run('INSERT INTO planetes(name,size) values (?,?)', ["Jupiter", "46554614"]);
db.run('INSERT INTO planetes(name,size) values (?,?)', ["Mercure","4654664"]);
//db.run('DELETE FROM planetes WHERE rowid = 3');

// db.All : Affiche tout les enregistrements on ne peut afficher une ligne ou un champs demandé
// db.all('SELECT * FROM planetes', (err, data) =>{
//  if (err) throw err; console.log(data);
// });

// db.each : Affiche les champs demandés
// db.each('SELECT * FROM planetes', (err, data) =>{
//  if (err) throw err; console.log(data.name, data.created_at);
// });

// db.get : Affiche la 1ere ligne
db.get('SELECT * FROM planetes', (err, data) =>{
    if (err) throw err; console.log(data.name, data.created_at);
   });
