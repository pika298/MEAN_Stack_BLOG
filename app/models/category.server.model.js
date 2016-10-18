'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Validation
 */
function validateLength (v)
{
		return v.length <= 15;
}
/**
 * Category Schema
 */
var CategorySchema = new Schema({
	// Category model fields   
	create: {
		type: Date,
		default: Date.now
	},
	description: {
		type: String,
		default: '',
		trim: true
	},
	name: {
		type: String,
		default: '',
		trim: true,
		unique: true,
		required: 'name cannot be blank',
		validate: [validateLength, 'name must be 15 chars in length or less']
	}
});

mongoose.model('Category', CategorySchema);