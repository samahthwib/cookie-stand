'use strict';


// //var total=0;
var hours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am '
  , '12am ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

var salmonContainer = document.getElementById('Salmon-Cookies');
//creating my table tag
var salmonTable = document.createElement('table');
salmonContainer.appendChild(salmonTable);

//creating <thead> tag
// var firstThead = document.createElement('thead');
// salmonTable.appendChild(firstThead);

var myBranches = []; //empty array to push the object inside it

// This is my Constructor
function Branches (minCustomer,maxCustomer,avgNum,location){
  this.minCustomer = minCustomer; // For minimun number of customer per hour
  this.maxCustomer = maxCustomer; // For maximum number of customer per hour
  this.avgNum = avgNum ; // For avg number of cookies per customer
  this.location=location;
  this.numOfCookies = [];
  this.totalCookies = 0;
  myBranches.push(this);
}
////////////////////////////////////////////////

// My method to defines number of cookies for each hour
Branches.prototype.myNumber=function(){
  for (var i = 0; i < hours.length; i++) {
    var myAvg = Math.floor(this.avgNum); // converte the num from decimal to integer
    this.numOfCookies.push((getRandomCustomer(this.minCustomer, this.maxCustomer)) * myAvg); // to calculate the number of cookies

    this.totalCookies = this.totalCookies + this.numOfCookies[i]; //for calculat the daily location total

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



Branches.prototype.myHeaderRender=function(){

  //creating <tr> tag for header
  var firstTr = document.createElement('tr');
  salmonTable.appendChild(firstTr);

  //this loop for space
  for (var n=0 ;n<=13;n++){
    var firstTh = document.createElement('th');
    firstTr.appendChild(firstTh);
    firstTr.classList.add("styleEmpty");
  }

  //This (for loop) list my hours in a row
  for (var i = 0; i <= hours.length; i++) {
    firstTh = document.createElement('th');
    firstTr.appendChild(firstTh);
    firstTh.textContent = hours[i] ;
    firstTh.classList.add("mystyle");
  }
  // This is for creat another cell in the same row
  firstTh.textContent='Total1';
  firstTh.classList.add("mystyle");
};
//////////////////////////////////////////////////////////////////

Branches.prototype.myBodyRender=function(){

  var salmonbody = document.createElement('tbody');
  salmonContainer.appendChild(salmonbody);
  var secondTr = document.createElement('tr');

  salmonbody.appendChild(secondTr);
  var secondTh=document.createElement('th');

  secondTr.appendChild(secondTh);
  for (var k=0 ; k< myBranches.length;k++){ //This loop print my branches name
    secondTh.textContent=this.location;
    secondTr.appendChild(secondTh);
  }

  for (var j=0 ;j<hours.length ;j++){ //This loop print the number of cookies in each branch per hour
    var firstTd=document.createElement('td');
    firstTd.textContent= `${this.numOfCookies[j]} ` ;
    secondTr.appendChild(firstTd);
  }
   
  var firsttTd=document.createElement('td');
  firsttTd.textContent+= `${this.totalCookies} ` ; //This statement to print the daily location data
  secondTr.appendChild(firsttTd);
  

};

////////////////////////////////////////////////////////////////////

Branches.prototype.myFooterRender = function() {

  var salmonfooter = document.createElement('tfoot');
  salmonContainer.appendChild(salmonfooter);

  var finalTr = document.createElement('tr');
  salmonfooter.appendChild(finalTr);

  var finalTh =document.createElement('th');
  finalTh.textContent = ('Total');
  finalTr.appendChild(finalTh);


  var myTotal =0;

  for (var x=0 ; x<=hours.length ; x++){ //these tow loops for the total in every our for all branches

    for (var z=0;z<myBranches.length ; z++) {
      myTotal += (myBranches[z].numOfCookies[x]);
    }

    var finalTd = document.createElement('td');
    finalTr.appendChild(finalTd);
    finalTd.textContent= myTotal;

  }


  var maxtotal=0;
  for(var t=0;t<myBranches.length ; t++) {
    var tdTd=document.createElement('td');
    maxtotal += myBranches[t].totalCookies; // the total of total
    tdTd.textContent=maxtotal;
  }
  finalTr.appendChild(tdTd);



};

//////////////////////////////////////////////////////////////////

// // here are my Objects
var store1 = new Branches(23,65 , 6.3, 'Seattle');
store1.myNumber();
store1.myHeaderRender();
store1.myBodyRender();


var store2 = new Branches(3, 24 , 1.2 , 'Tokyo');
store2.myNumber();
store2.myBodyRender();

var store3 = new Branches(11, 38 , 3.7 , 'Dubai');
store3.myNumber();
store3.myBodyRender();

var store4 = new Branches(20, 38 , 2.3 , 'Paris');
store4.myNumber();
store4.myBodyRender();


var store5 = new Branches(2, 16 , 4.6 , 'Lima');
store5.myNumber();
store5.myBodyRender();
store5.myFooterRender();
///////////////////////////////////////////////



