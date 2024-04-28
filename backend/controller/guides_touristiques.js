const Guides = require('../models/guides_touristiques');


exports.ajouterguides = (req, res, next) => {
  const idToken = req.headers.authorization.split(' ')[1];
  admin.auth().verifyIdToken(idToken)
  .then((decodedToken) => {
    const userId = decodedToken.uid;
    const userEmail = decodedToken.email;
    const role = decodedToken.role;
    if (role == "Guides"){
      const guides = new Guides({
        user_id: userId,
        email: userEmail,
        ...req.body
      });
      guides.save()
          .then(() => {
              res.status(201).json({
                  message: 'guides enregistré avec succès!'
              });
          })
          .catch((error) => {
              res.status(400).json({
                  error: error
              });
          });
    } else {
      res.status(401).json({
        error: 'mauvais utilisateur'
    });
    }
  })
  .catch((error) => {
      // Gérer les erreurs de vérification du token d'authentification
      res.status(401).json({
          error: 'Erreur de vérification du token d\'authentification'
      });
  });
}
   

exports.recupone = (req, res, next) => {
    Guides.findOne({ _id: req.params.id })
        .then(guides => res.status(200).json({ guides }))
        .catch(error => res.status(400).json({ error }));
};

exports.recupall = (req, res, next) => {
    Guides.find()
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(400).json({ error }));
};

exports.modifier = (req, res, next) => {
    Guides.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'guides modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.supprimer = (req, res, next) => {
    Guides.deleteOne({_id: req.params.id})
      .then(guides => res.status(200).json({message:"guides suppeo" }))
      .catch(error => res.status(400).json({ error }));
  };

  exports.becomeClient = (req, res, next) => {
    //Récupérer le token d'authentification de l'utilisateur à partir de la requête
    const idToken = req.headers.authorization.split(' ')[1];

    // Vérifier le token d'authentification et extraire l'ID de l'utilisateur
    admin.auth().verifyIdToken(idToken)
        .then((decodedToken) => {
            const userId = decodedToken.uid;
            const userEmail = decodedToken.email;

            // Créer un nouvel utilisateur avec l'ID de l'utilisateur récupéré
            const user = new User({
                idFirebase: userId,
                role: "client",
                nom: req.body.nom,
                prenoms: req.body.prenoms,
                email: userEmail,
                dateDeNaissance: req.body.dateDeNaissance,
                departement: req.body.departement,
                ville: req.body.ville,
                quartier: req.body.quartier,
                localisationMap: req.body.localisationMap
            });

            // Enregistrer l'utilisateur dans la base de données
            user.save()
                .then(() => {
                    res.status(201).json({
                        message: 'Client enregistré avec succès!'
                    });
                })
                .catch((error) => {
                    res.status(400).json({
                        error: error
                    });
                });
        })
        .catch((error) => {
            // Gérer les erreurs de vérification du token d'authentification
            res.status(401).json({
                error: 'Erreur de vérification du token d\'authentification'
            });
        });
};