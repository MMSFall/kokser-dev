const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuration de la connexion à la base MySQL
const db = mysql.createConnection({
  host: 'localhost',  // ou l'adresse de ton serveur MySQL
  user: 'root',       // nom d'utilisateur MySQL
  password: 'Passer1234@', // mot de passe MySQL
  database: 'utilisateurs', // nom de la base de données MySQL
});

db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
  } else {
    console.log('Connecté à la base de données MySQL');
  }
});

// Route pour créer un usager
app.post('/creerUsager', (req, res) => {
  const { nom, prenom, telephone } = req.body;
  const query = 'INSERT INTO usagers (nom, prenom, telephone) VALUES (?, ?, ?)';
  db.query(query, [nom, prenom, telephone], (err, result) => {
    if (err) {
      console.error('Erreur lors de la création de l\'usager :', err);  // Plus de détails sur l'erreur
      return res.status(500).send(`Erreur lors de la création de l'usager: ${err.sqlMessage || err.message}`);
    }
    res.send('Usager créé avec succès');
  });
});

// Route pour créer un conducteur
app.post('/creerConducteur', (req, res) => {
  const { nom, prenom, telephone, licenceConducteur, carteGrise } = req.body;
  const query = 'INSERT INTO conducteurs (nom, prenom, telephone, licence_conducteur, carte_grise) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [nom, prenom, telephone, licenceConducteur, carteGrise], (err, result) => {
    if (err) {
      console.error('Erreur lors de la création du conducteur :', err);  // Plus de détails sur l'erreur
      return res.status(500).send(`Erreur lors de la création du conducteur: ${err.sqlMessage || err.message}`);
    }
    res.send('Conducteur créé avec succès');
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
