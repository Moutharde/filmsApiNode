var express = require('express');
var router = express.Router();
var model = require('../models/index');

router.get('/films', function(req, res, next) {
	model.Films.findAll({})
	.then(films => res.json({
		errors: false,
		data: films
	}))
	.catch(error => res.json({
		error : true,
		data : []
	}));

});

router.post('/film', function(req, res, next) {
	console.log("2222++++++++++++2222", model);
	model.Films.create({
		title: req.body.title,
		description: req.body.description,
		image: req.body.image,
		url: req.body.url
	})

	.then(film => res.json({
		errors: false,
		data: film,
		message: "New file have been created"
	}))
	.catch(error => res.json({
		error : true,
		data : [],
		error: error
	}));

});


router.put( '/film/:id', function(req, res) {

	model.Films.update({

		title: req.body.title,
		description: req.body.description,
		image: req.body.image,
		url: req.body.url
	},

	{

		where: {

			id: req.params.id

		}

	})
	.then( film => res.json({
		errors: false,
		data: film,
		message: "New file have been updated"
	}))
	.catch(error => res.json({
		error : true,
		data : [],
		error: error
	}))

});
router.delete('/film/:id', function(req, res, next) {

});


module.exports = router;