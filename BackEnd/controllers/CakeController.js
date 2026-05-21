const Cake = require('../models/CakeModel');

// 1. CREATE CAKE (Fixed to return success: true)
const createCake = async (req, res) => {
    try {
        const { cakeName, description, price } = req.body;
        const newCake = new Cake({ cakeName, description, price });
        await newCake.save();
        
        // Added success: true so your frontend 'if (res.success)' condition works perfectly!
        res.status(201).json({ 
            success: true, 
            msg: "Cake Details Created Successfully", 
            data: newCake 
        });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to create Cake' });
    }
};

// 2. VIEW ALL CAKES
const viewCakes = async (req, res) => {
    try {
        const cake = await Cake.find().sort({ createdAt: -1 }); // Fixed typo: changed createAt to createdAt
        res.status(200).json({ success: true, msg: "Cakes", data: cake });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to view Cake' });
    }
};

// 3. UPDATE CAKE
const updateCake = async (req, res) => {
    try {
        const { id } = req.params;
        const updatecake = await Cake.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatecake) {
            return res.status(404).json({ success: false, error: 'Cake not found' });
        }
        res.status(200).json({ success: true, msg: "Cake updated successfully", data: updatecake });
    }
    catch (error) {
        res.status(500).json({ success: false, error: 'Failed to update cake' });
    }
};

// 4. DELETE CAKE
const deleteCake = async (req, res) => {
    try {
        const { id } = req.params;
        const deletecake = await Cake.findByIdAndDelete(id);
        if (!deletecake) {
            return res.status(404).json({ success: false, error: 'Cake not found' });
        }
        res.status(200).json({ success: true, msg: "Cake deleted successfully", data: deletecake });
    }
    catch (error) {
        res.status(500).json({ success: false, error: 'Failed to delete cake' });
    }
};

// 5. VIEW SINGLE CAKE
const viewCake = async (req, res) => {
    try {
        const { id } = req.params;
        const cake = await Cake.findById(id);
        if (!cake) {
            return res.status(404).json({ success: false, error: 'Cake not found' });
        }
        res.status(200).json({ success: true, msg: "Cake details", data: cake });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};

module.exports = { createCake, viewCakes, updateCake, deleteCake, viewCake };