var log = console.log;

$(function () {
	 var p = nyPerson();
    console.log("Ny pers:",p);
});

/*BASIC*/
var colors		= ["gray", "purple", "green", "black", "orange"];
var numbers		= [12, 26, 32, 46, 50, 58, 69, 72, 84, 99];

/*HUMAN*/
var gender    = ["Man","Woman"],
    sex		    = ["he", "she"],
    feelings	= ["happy", "sad", "inlove", "hated"],
    boyNames 	= ["Dan", "Steve", "Dave"],
    girlNames = ["Lisa", "Marie", "Sumeja"],
    height		= ["tall", "short", "average height"],
    hair		  = ["long", "short", "none"],
    work		  = ["teacher", "welder","firefighter"];

/*WORLD*/
var countries 	= ["Denmark", "Sweden", "America", "Serbia"],
    cities 		= ["Copenhagen", "Malmoe", "New York", "Cuprija"],
    adresses 	= ["Amageervej 47", "Bergsgatan 11", "Franklin Blv. 103", "Merkator ulica br 5"];

/*ORIENTATION*/
var align 		= ["right", "center", "left"];
var position 	=  ["top", "middle", "bottom"];



function mixColors(array) {
  var index = array.length, temporaryValue, randomIndex;
  while (0 !== index) {
    randomIndex = Math.floor(Math.random() * index);
    index -= 1;
    temporaryValue = array[index];
    array[index] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}



/*blanda array*/
Array.prototype.getOne = function() {
  let m = this.length, i;
  while (m) {
    i = (Math.random() * m--) >>> 0;
    [this[m], this[i]] = [this[i], this[m]]
  }
  return this[0];
}




Object.prototype.nyPerson = function() {


  person = [];

  /*KÖN & namn*/
  person.gender = gender.getOne();
  if(person.gender == "Man"){
    person.name = boyNames.getOne();
    person.me = "he";
  } 
  else{
    person.name = girlNames.getOne();
    person.me = "she";
  } 
  if(person.me == "he") person.me = "he";

  person.age = numbers.getOne();
  person.height = height.getOne();
  person.hair = hair.getOne();
  person.work = work.getOne();
  person.feels = feelings.getOne();
  person.favColor = mixColors(colors)[0];
  person.magicPos = align.getOne() + " - " + position.getOne();
  person.location = countries.getOne() + ", " + cities.getOne() + ", " + adresses.getOne();


  	var story = 
	  "Once upon a time there was "+person.gender+" called " +  person.name + ".\n" +
	  person.name + " worked as a " + person.work + ", and " + person.me + " were " + person.feels + " all the time.\n"+
    "..and nobody know why."+
    "\n\nI am " + person.age + " dogyears old! -" + person.name + " said.. not even " + person.name + 
    "'s friends did'nt know how old " + person.me + " was.";

  console.log(story);

  $('.randSiffra').html(person.age);
  $('.randFarg').html(person.favColor);
  $('.randNamn').html(person.name);
  $('.randArbete').html(person.work);
  $('.randStory').html(story);
  $('.randStoryTitle').html('A little story about '+ person.age + " year old " + person.gender + " called " + person.name );


  $('body').css("background-color", person.favColor);

  return person

}
