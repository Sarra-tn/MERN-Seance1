const express = require('express'); // 1. Charger la bibliothèque Express
const articleRoutes = require('./routes/articleRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express(); // 2. Créer l'application : c'est notre serveur
const PORT = 3000;

// Middleware global
// Il permet de lire le corps JSON et de le récupérer dans req.body
app.use(express.json());

// Montage du routeur sous le préfixe '/api/articles'
app.use('/api/articles', articleRoutes);
app.use('/api/users', userRoutes);
/*
 * 3. Route d'accueil :
 * Quand un client demande GET '/',
 * Express exécute cette fonction.
 */
app.get('/', (req, res) => {
    res.json({
        message: "API du Blog - Serveur Modulaire Opérationnel (SoC)"
    });
});

/*
 * 4. Démarrer le serveur :
 * Le serveur attend les requêtes sur le port 3000.
 */
app.listen(PORT, () => {
    console.log(`Serveur modulaire en écoute sur http://localhost:${PORT}`);
});




/*
// GET /about
app.get('/about', (req, res) => {
    res.json({
        application: "API du blog",
        nom: "Sarra IBN HADJ MOHAMED",
        version: "1.0.0"
    });
});

// GET /api/users?name=Aya
app.get('/api/users', (req, res) => {

    const { name } = req.query;

    let resultat = users;

    if (name) {
        resultat = users.filter(u => u.name === name);
    }

    res.json(resultat);
});

// GET /api/users
const users = [
    {
        id: 1,
        name: "Aya",
        email: "aya@gmail.com"
    },
    {
        id: 2,
        name: "Youssef",
        email: "youssef@gmail.com"
    },
    {
        id: 3,
        name: "Omar",
        email: "omar@gmail.com"
    }
];

app.get('/api/users', (req, res) => {
    res.json(users);
});


// GET /api/users/:id
app.get('/api/users/:id', (req, res) => {

    const id = Number(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            error: `Utilisateur ${id} introuvable`
        });
    }

    res.json(user);
});

// POST /contact
app.post('/contact', (req, res) => {

    const { email, message } = req.body;

    if (!email || !message) {
        return res.status(400).json({
            error: "L'email et le message sont obligatoires"
        });
    }

    res.status(200).json({
        message: "Merci, votre message a bien été reçu"
    });
});

*/


