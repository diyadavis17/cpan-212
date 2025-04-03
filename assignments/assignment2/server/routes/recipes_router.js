const express = require('express');
const Recipe = require('../models/Recipe'); 

const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (err) {
        res.status(500).send(err);
    }
});


router.post('/', async (req, res) => {
    const { name, description, difficulty, ingredients, steps } = req.body;

    try {
        const newRecipe = new Recipe({
            name,
            description,
            difficulty,
            ingredients,
            steps
        });

        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).send('Recipe not found');
        }
        res.json(recipe);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } 
        );
        if (!updatedRecipe) {
            return res.status(404).send('Recipe not found');
        }
        res.json(updatedRecipe);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!deletedRecipe) {
            return res.status(404).send('Recipe not found');
        }
        res.json({ message: 'Recipe deleted successfully' });
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
