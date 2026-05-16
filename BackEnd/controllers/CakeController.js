const Cake = require('../models/CakeModel');
const createCake = async (req, res) => {
    try {
        const { cakeName, description, price } = req.body;
        const newCake = new Cake({ cakename, description, price });
        await newCake.save();
        res.status(201).json({ msg: "Cake Details Created Successfully", cake: newCake });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create Cake' });
    }
};

const viewCakes = async (req, res) => {
    try {
        const cake = await Cake.find();
        res.status(200).json({ msg: "Cakes", data: cake });
    } catch (error) {
        res.status(500).json({ error: 'Failed to view Cake ' });
    }
}

const updateCake = async (req, res) => {
    try {
        const { id } = req.params;
        const updatecake = await Cake.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatecake) {
            return res.status(404).json({ error: 'Cake not found' });
        }
        res.status(200).json({ msg: "Cake updated successfully", data: updateCake });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update cake' });
    };
}

const deleteCake = async (req, res) => {
    try {
        const { id } = req.params;
        const deletecake = await Cake.findByIdAndDelete(id);
        if (!deletecake) {
            return res.status(404).json({ error: 'cake not found' });
        }
        res.status(200).json({ msg: "cake deleted successfully", data: deleteCake });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete cake' });
    };
}

const viewCake = async (req, res) => {
    try {
        const { id } = req.params;
        const cake = await Cake.findById(id);
        if (!cake) {
            return res.status(404).json({ error: 'Cake not found' });
        }
        res.status(200).json({ msg: "Cake details", data: cake });

    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
}

module.exports = { createCake, viewCakes, updateCake, deleteCake, viewCake };