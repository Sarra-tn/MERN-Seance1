



// Données des utilisateurs en mémoire
let users = [
    { id: 1, name: 'Aya', email: 'aya@gmail.com', role: 'admin'},
    { id: 2, name: 'Sarra', email: 'sarra@gmail.com', role: 'user'}
];

let prochainId = 3;

// Récupérer un utilisateur par son ID unique, envoi user ou 404
const getUserById = (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            error: `Utilisateur ${id} introuvable`
        });
    }
    res.status(200).json(user);
}

// Récupérer tous les utilisateurs avec filtre optionnel ?role=...
const getAllUsers = (req, res) => {
    const { role } = req.query;

    let resultat = users;
    if (role) {
        resultat = users.filter(u => u.role === role);
    }
    res.status(200).json({
        total: resultat.length,
        users: resultat
    });
}



//cree un utilisateur avec validation obligatoire du nom et de l'email, statut 201 si creation, 400 si erreur
const createUser = (req, res) => {
    const { name, email, role } = req.body;

    // Vérifier que le nom n'est pas vide
    if (!estNonVide(name)) {
        return res.status(400).json({
            error: 'Le nom est obligatoire et ne doit pas être vide'
        });
    }

    // Vérifier que l'email est valide
    if (!estEmailValide(email)) {
        return res.status(400).json({
            error: "L'email doit contenir '@' et '.'"
        });
    }

    const nouvelUser = {
        id: prochainId++,
        name,
        email,
        role: role || 'user'
    };

    users.push(nouvelUser);

    res.status(201).json({
        message: 'Utilisateur créé',
        user: nouvelUser
    });
};

//supprimer un utilisateur par son ID unique, envoi message ou 404
const deleteUser = (req, res) => {
    const id = Number(req.params.id);
    const userExiste = users.some(u => u.id === id);
    if (!userExiste) {
        return res.status(404).json({
            error: `Utilisateur ${id} introuvable`
        });
    }
    users = users.filter(u => u.id !== id);
    res.status(200).json({
        message: `Utilisateur ${id} supprimé`
    });
}

//importer les fonctions de validation pour les utiliser dans les routes
const {
    estNonVide,
    estEmailValide
} = require('../utils/validators');

// Rechercher un utilisateur par son email
const getUserByEmail = (email) => {
    return users.find(u => u.email === email);
};

//exporter les fonctions pour les utiliser dans les routes
module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    getUserByEmail
};
