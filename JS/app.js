'use strict';


// //var total=0;
var hours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am '
  , '12am ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

var locations=['Seattle','Tokyo','Dubai','Paris','Lima'];

var myBranches = [];
function Branches (minCustomer,maxCustomer,avgNum,location){ // This is my Constructor
  this.minCustomer = minCustomer; // For minimun number of customer per hour
  this.maxCustomer = maxCustomer; // For maximum number of customer per hour
  this.avgNum = avgNum ; // For avg number of cookies per customer
  //this.branchName = branchName; // For my location for each branch
  this.location=location;
  this.numOfCookies = [];
  this.totalCookies = 0;
  myBranches.push(this);

}
////////////////////////////////////////////////

Branches.prototype.myNumber=function(){ // My method to defines number of cookies for each hour
  for (var i = 0; i < hours.length; i++) {
    var myAvg = Math.floor(this.avgNum); // converte from decimal to integer
    this.numOfCookies.push((getRandomCustomer(this.minCustomer, this.maxCustomer)) * myAvg); // to calculate the number of cookies
    this.totalCookies = this.totalCookies + this.numOfCookies[i]; //for calculat the total

  }
  //console.log=this.totalCookies;
};

/////////////////////////////////////////////////////////

Branches.prototype.dailyCalcuation = function() {
  for (var i = 0; i < this.numOfCookies.length; i++) {
    this.totalCookiesThroughTheDay += this.numOfCookies[i];
    // console.log(this.totalCookiesThroughTheDay);
  }
};

//////////////////////////////////////////////////////////


Branches.prototype.locationCalcuation = function() {
  for (var i = 0; i < this.locations.length; i++) {
    this.totalCookiesTotalLocations += this.numOfCookies[i];
    // console.log(this.totalCookiesThroughTheDay);
  }
};

//////////////////////////////////////////////////////////

// My helper function
function getRandomCustomer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

/////////////////////////////////////////////////////////

var salmonContainer = document.getElementById('Salmon-Cookies');
Branches.prototype.myHeaderRender=function(){

  //creating my table tag
  var salmonTable = document.createElement('table');
  salmonContainer.appendChild(salmonTable);
  //creating <thead> tag
  var firstThead = document.createElement('thead');
  salmonTable.appendChild(firstThead);
  //creating <tr> tag for header
  var firstTr = document.createElement('tr');
  salmonTable.appendChild(firstTr);

  //I tried to creat the empty cell without loop but i couldn't
  for (var n=0 ;n<=13;n++){
    var firstTh = document.createElement('th');
    firstTr.appendChild(firstTh);
  }

  //This (for loop) list my hours in a row
  for (var i = 0; i <= hours.length; i++) {
    firstTh = document.createElement('th');
    firstTr.appendChild(firstTh);
    firstTh.textContent = hours[i] ;
  }
  // This is for creat another cell in the same row
  firstTh.textContent='DailyLocationTotal';

};
//////////////////////////////////////////////////////////////////

Branches.prototype.myBodyRender=function(){

  var salmonbody = document.createElement('tbody');
  salmonContainer.appendChild(salmonbody);
  var secondTr = document.createElement('tr');
  salmonbody.appendChild(secondTr);
  var secondTh=document.createElement('th');
  //secondTr.appendChild(secondTh);

  for (var k=0 ; k< myBranches.length;k++){
    secondTh.textContent=locations[k];
    secondTr.appendChild(secondTh);
  }

  for (var j=0 ;j<hours.length ;j++){
    var firstTd=document.createElement('td');
    firstTd.textContent= `// ${this.numOfCookies[j]} ` ;
    secondTr.appendChild(firstTd);
  }
  // firstTd.textContent= ` ${this.dailyCalcuation} ` ;
};

////////////////////////////////////////////////////////////////////

Branches.prototype.myFooterRender = function() {

  var salmonfooter = document.createElement('tfoot');
  salmonContainer.appendChild(salmonfooter);
  var finalTr = document.createElement('tr');
  salmonfooter.appendChild(finalTr);
  var finalTd = document.createElement('td');
      finalTd.textContent = (this.totalCookiesTotalLocations);
      finalTr.appendChild(finalTd);
    
  
};

//////////////////////////////////////////////////////////////////
// // here are my Objects
var Seattle = new Branches(23,65 , 6.3, 'Seattle');
Seattle.myNumber();
Seattle.myHeaderRender();
Seattle.myBodyRender();

var Tokyo = new Branches(3, 24 , 1.2 , 'Tokyo');
Tokyo.myNumber();
Tokyo.myBodyRender();

var Dubai = new Branches(11, 38 , 3.7 , 'Dubai');
Dubai.myNumber();
Dubai.myBodyRender();

var Paris = new Branches(20, 38 , 2.3 , 'Paris');
Paris.myNumber();
Paris.myBodyRender();

var Lima = new Branches(2, 16 , 4.6 , 'Lima');
Lima.myNumber();
Lima.myBodyRender();

///////////////////////////////////////////////

//  for (var i =0; i< myBranches.length; i++) {
//   myBranches[i].myNumber();
//    myBranches[i].myBodyRender();
//  }

//////////////////////////////////////////


