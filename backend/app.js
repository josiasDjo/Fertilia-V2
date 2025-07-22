require('dotenv').config();

const sequelize = require('./models/index'); 
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const session= require('express-session');
const flash = require('connect-flash');
const jwt = require('jsonwebtoken');
// const helmet = require('helmet');
const xssClean = require('xss-clean');
const rateLimit = require('express-rate-limit');
const crypto = require('crypto')
const app = express();


//importer les modèles
const Utilisateurs = require('./models/Utilisateurs.js');
const Champs = require('./models/Champs.js');
const Stocks = require('./models/Stock.js');
const Livraisons = require('./models/Livraisons.js');
const Capteurs = require('./models/Capteurs.js');
const roles = require('./models/Roles.js');
const previsions = require('./models/Previsions.js');

//importer les routes
const indexRouter = require('./routes/index');
const CapteursRouter = require('./routes/CapteursRoutes.js');
const CapteursEquipementRouter = require('./routes/capteursEquipement.js')
const ChampsRouter = require('./routes/ChampsRoutes.js');
const LivraisonRouter = require('./routes/LivraisonsRoutes.js');
const PrevisionsRouter = require('./routes/PrevisionsRoutes.js');
const RolesRouter = require('./routes/RolesRoutes.js');
const StocksRouter = require('./routes/StocksRoutes.js');
const UtilisateursRoutes = require('./routes/UtilisateursRoutes.js');
const FournisseurRoutes = require('./routes/FournisseurRoutes.js');
const CmdFournisseurRoutes = require('./routes/CommandeFournisseuRoutes.js');
const EntreeSortieRoutes = require('./routes/EntreeSortieRoutes.js');

// test d'api
const sensorApi = require('./routes/sensorApiTest.js')

const port = process.env.PORT || 5001;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // maximum 100 requêtes par IP sur cette période
});

// Configuration du moteur de vues
// app.set('views', [
//   path.join(__dirname, 'views'),
//   path.join(__dirname, 'views/clients'),
//   path.join(__dirname, 'views/modals'),
//   path.join(__dirname, 'views/agriculteurs'),
//   path.join(__dirname, 'includes'),
//   path.join(__dirname, 'views/components'),
//   path.join(__dirname, 'views/components/fields'),
//   path.join(__dirname, 'views/components/livraisons'),
//   path.join(__dirname, 'views/components/stocks'),
// ]);
// app.set('view engine', 'ejs');

// Middlewares globaux
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(cors());
app.use(bodyParser.json());
// app.use(xssClean());
// app.use(helmet());

// configuration de la session
app.use(session({
  secret: process.env.SECRET_SESSION,
  resave: false,
  saveUninitialized: true,
  cookie: { 
    secure: false, 
    maxAge: 1000 * 60 * 60 * 24 * 30 // 30 jours
  }
}));

// Initialiser Flash après la session
app.use(flash());

// Middleware pour rendre Flash accessible dans les vues
app.use((req, res, next) => {
  res.locals.error_conn = "";
  res.locals.success_msg = req.flash('success_msg'); 
  res.locals.error_msg = req.flash('error_msg');
  console.log('✅ Middleware Flash exécuté');
  next();
});
app.use(limiter);

// Déclaration des routes
app.use('/', indexRouter);
app.use('/api/utilisateurs', UtilisateursRoutes);
app.use('/api/fournisseurs', FournisseurRoutes);
app.use('/api/capteurs', CapteursRouter);
app.use('api/equipement/capteurs', CapteursEquipementRouter)
app.use('/api/champs', ChampsRouter);
// app.use('/api/livraison', LivraisonRouter);
// app.use('/api/prevision', PrevisionsRouter);
app.use('/api/role/users', RolesRouter);
app.use('/user/mon-compte', StocksRouter);
app.use('/api/fournisseurs', CmdFournisseurRoutes);
app.use('/api/mon-compte/historique', EntreeSortieRoutes);
app.use('/api/random', sensorApi)

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const sessionKey = crypto.randomBytes(64).toString('hex');

console.log('Clé de session forte :', sessionKey);

app.listen(port,() => {
  console.log(`✅ App is listening on port ${port}`)
})

// Synchronisation avec MySQL
sequelize.sync({ force: false })
    .then(() => console.log('✅ Base de données synchronisée avec Sequelize !'))
    .catch(err => console.error('❌ Erreur de synchronisation de la BDD :', err));


module.exports = app;
