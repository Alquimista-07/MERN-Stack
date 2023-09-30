const UserModel = require('../models/User');

const userCtrl = {};

userCtrl.getUsers = async (req, res) => {

    const users = await UserModel.find();

    res.json({
        users
    });
};

userCtrl.createUser = async (req, res) => {

    const { username } = req.body;

    const newUser = new UserModel({
        username
    });

    await newUser.save();

    res.json({
        message: 'Usuario guardado'
    }
)};

userCtrl.deleteUser = async (req, res) => {

    const id = req.params.id;

    await UserModel.findByIdAndDelete(id);

    res.json({
        message: 'Usuario borrado!'
    }
)};

module.exports = userCtrl;