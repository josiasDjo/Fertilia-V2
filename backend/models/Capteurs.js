const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Champ = require('./Champs');

const Capteur = sequelize.define('table_capteurs', {
    id_capteur: { type: DataTypes.STRING,  primaryKey: true },
    nom_capteur: { type: DataTypes.STRING, allowNull: false },	
    type_capteur: { type: DataTypes.STRING, allowNull: false }, 	
    valeur: { type: DataTypes.DECIMAL, allowNull: false },
    unit: { type: DataTypes.STRING, allowNull: false },
    is_champs: { type: DataTypes.STRING, allowNull: false },
    longitude: { type: DataTypes.FLOAT, allowNull: true},
    latitude: { type: DataTypes.FLOAT, allowNull: true},
    etat_connecte: { type: DataTypes.STRING, allowNull: true}
}, {
    timestamp: true
});

Capteur.belongsTo(Champ, { foreignKey: 'is_champs'});
Champ.hasMany(Capteur, { foreignKey: 'is_champs'});

module.exports = Capteur;