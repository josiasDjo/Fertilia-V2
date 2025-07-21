const { where } = require('sequelize');
const CapteurEquipement = require('../models/capteurs_equipements')
const { v4: uuidv4 } = require('uuid');

exports.addCapteur = async (req, res) => {
    try {
        const id_capteur = uuidv4()
        const id_utilisateurs = req.session.users.id_user;
        const { nom_capteur,type_capteur,model_capteur,numero_de_serie,is_champs,latitude,longitude,date_installation,statut,last_communication,photo } = req.body
        const serialNumberExist = await CapteurEquipement.findOne({where: {numero_de_serie}})
        if(serialNumberExist) return res.json({ success: false, message: 'Ce capteur existe déjà'})
        await CapteurEquipement.create({id_capteur,nom_capteur,type_capteur,model_capteur,numero_de_serie,is_champs,id_utilisateurs,latitude,longitude,date_installation,statut,last_communication,photo})
    } catch(err) {
        const error = 'Erreur lors l\'ajout du capteur, réessayer plus tard'
        console.log(error, err)
        return res.json({ success: false, message: error })
    }
}

exports.getCapteursChamps = async (req, res) => {
    try {
        const id_utilisateurs = req.session.users.id_user;
        const is_champs = req.body.is_champs
        const champsExist = await CapteurEquipement.findAll({ where: is_champs})
        if(!champsExist) return res.json({ success: false, message: 'Données introuvables'})
        return res.json({ success: true, message: champsExist})
    } catch(err) {
        const error = 'Erreur lors de la récupération des capteurs'
        console.log(error, err)
        return res.json({ success: false, message: error})
    }
}

exports.getCapteur = async (req, res) => {
    try {
        const id_utilisateurs = req.session.users.id_user;
        const id_capteur = req.body.id_capteur
        const capteurExist = await CapteurEquipement.findOne({where: id_capteur})
        if(!capteurExist) return res.json({ success: false, message: 'Capteur introuvable'})
        if(capteurExist.id_utilisateurs != id_utilisateurs) return res.json({ success: false, message: 'Vous ne pouvez pas accéder à cet Element'})
        
        return res.json({ success: true, message: capteurExist})
    } catch(err) {
        const error = 'Erreur lors de la récupération du capteur'
        console.log(error, err)
        return res.json({ success: false, message: error})
    }
}

exports.updateCapteur = async (req, res) => {
    try  {
        const id_capteur = req.body.id_capteur
        const capteurExist = await CapteurEquipement.findByPk(id_capteur)
        if(!capteurExist) return res.json({ success: false, message: 'Capteur introuvable, réessayer plus tard'})
        await CapteurEquipement.update(req.body, {where: id_capteur})
        return res.json({ success: true, message: 'Modification réussie'})
    } catch(err) {
        const error = 'Erreur lors de la modification du capteur'
        console.log(error, err)
        return res.json({ success: false, message: error})
    } 
}

exports.deleteCapteur = async (req, res) => {
    try {
        const id_capteur = req.body.id_capteur
        const id_utilisateurs = req.session.users.id_user;
        const capteurExist = await CapteurEquipement.findByPk(id_capteur)
        if(!capteurExist) return res.json({ success: false, message: 'Capteur introuvable, réessayer plus tard'})
        if(capteurExist.id_utilisateurs != id_utilisateurs) return res.json({ success: false, message: 'Vous ne pouvez pas supprimer cet élément'}) 
        await CapteurEquipement.destroy({where: id_capteur})
    } catch(err) {
        const error = 'Erreur lors de la suppression du capteur'
        console.log(error, err)
        return res.json({ success: false, message: error})
    }
}