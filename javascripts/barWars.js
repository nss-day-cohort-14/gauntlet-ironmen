"use strict";

var RNG = require("./randomNumbers.js");
var classes = require("./classes.js");


/////***Global vars***\\\\\

const maxStat = 17; //no stat may go above this number
const minStat = 5;	//no stat may go below this number

var partonClass = null; //selected patron class
var staffClass = null; //selected staff class
var patronAttack = null; //selected patron attack
var staffAttack = null; //selected staff attack

var totalTurns = 0; //total turn taken in the game
var partonTurns = 0; //total turn taken by patron
var staffTurns = 0; //total turns taken by staff

///////*****Functions*****\\\\\\\
//need functions for:
//comparing to secondary stats
//adjusting life totals
//taking in class and attack inputs
//running special attacks
//running base attacks



module.exports = {};