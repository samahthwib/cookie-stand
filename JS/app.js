'use strict';

//var total=0;
var Seattle = {

  minCustomer : 23 , //minimum number of customer per hour
  maxCustomer : 65 , //maximum number of customer per hour
  avgNum : 6.3, //Avg Cookies per customer
  numOfCookies:[],
  location : 'Seattle' ,
  hours : ['6am ','7am ','8am ','9am ','10am ','11am '
    ,'12am ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm '],

  getmyNum : function (){
    for (var i=0 ; i<this.hours.length;i++){
      var myAvg= Math.floor(this.avgNum);
      this.numOfCookies.push((getRandomCustomer(this.minCustomer,this.maxCustomer))*myAvg);
    //   total++;
    //   console.log(total);
    }
  },
  myrender : function(){ // I will star DOM manipulation,I need to convert the values of the object on creating the html , so i will create an html using javascript and passing the value from object
    var myContainer = document.getElementById('Salmon-Cookies'); //i get the parent
    var myArticle = document.createElement('article');
    myContainer.appendChild(myArticle);
    //console.log(myContainer);
    var h2Element = document.createElement('h2'); //Creat h2
    myArticle.appendChild(h2Element);//my child is h2
    h2Element.textContent = this.location;
    var ulElement = document.createElement('ul');
    myContainer.appendChild(ulElement);
    for(var i = 0 ; i< this.hours.length; i++){
      var liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${this.hours[i]} :${this.numOfCookies[i]} Cookies.`;
    }
  }


};
// console.log(Seattle.getmyNum());
Seattle.getmyNum();
Seattle.myrender();
// console.log(Seattle);
// console.log(Seattle.numOfCookies);
// Seattle.myrender;

//console.log(Seattle);
//console.table(Seattle);
//console.log(Seattle.myrender);
// Seattle.getmyNum();

// Seattle.myrender();



var Tokyo = {

  minCustomer : 3 , //minimum number of customer per hour
  maxCustomer : 24 , //maximum number of customer per hour
  avgNum : 1.2, //Avg Cookies per customer
  numOfCookies:[],
  location : 'Tokyo' ,
  hours : ['6am ','7am ','8am ','9am ','10am ','11am '
    ,'12am ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm ' ],

  getmyNum : function (){
    for (var i=0 ; i<this.hours.length;i++){
      var myAvg= Math.floor(this.avgNum);
      this.numOfCookies.push((getRandomCustomer(this.minCustomer,this.maxCustomer))*myAvg);
    }
  },

  myrender1 : function(){ // I will star DOM manipulation,I need to convert the values of the object on creating the html , so i will create an html using javascript and passing the value from object
    var myContainer = document.getElementById('Salmon-Cookies'); //i get the parent
    var myArticle = document.createElement('article');
    myContainer.appendChild(myArticle);
    //console.log(myContainer);
    var h2Element = document.createElement('h2'); //Creat h2
    myArticle.appendChild(h2Element);//my child is h2
    h2Element.textContent = this.location;
    var ulElement = document.createElement('ul');
    myContainer.appendChild(ulElement);
    for(var k = 0 ; k< this.hours.length; k++){
      var liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${this.hours[k]} :${this.numOfCookies[k]} Cookies.`;
    }
  }
};
Tokyo.getmyNum();
Tokyo.myrender1();






var Dubai = {

  minCustomer : 11 , //minimum number of customer per hour
  maxCustomer : 38 , //maximum number of customer per hour
  avgNum : 3.7, //Avg Cookies per customer
  numOfCookies:[],
  location : 'Dubai' ,
  hours : ['6am ','7am ','8am ','9am ','10am ','11am '
    ,'12am ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm ' ],

  getmyNum : function (){
    for (var i=0 ; i<this.hours.length;i++){
      var myAvg= Math.floor(this.avgNum);
      this.numOfCookies.push((getRandomCustomer(this.minCustomer,this.maxCustomer))*myAvg);
    }
  },

  myrender2 : function(){ // I will star DOM manipulation,I need to convert the values of the object on creating the html , so i will create an html using javascript and passing the value from object
    var myContainer = document.getElementById('Salmon-Cookies'); //i get the parent
    var myArticle = document.createElement('article');
    myContainer.appendChild(myArticle);
    //console.log(myContainer);
    var h2Element = document.createElement('h2'); //Creat h2
    myArticle.appendChild(h2Element);//my child is h2
    h2Element.textContent = this.location;
    var ulElement = document.createElement('ul');
    myContainer.appendChild(ulElement);
    for(var k = 0 ; k< this.hours.length; k++){
      var liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${this.hours[k]} :${this.numOfCookies[k]}cookies.`;
    }
  }
};

Dubai.getmyNum();
Dubai.myrender2();

var Paris = {

  minCustomer : 20 , //minimum number of customer per hour
  maxCustomer : 38 , //maximum number of customer per hour
  avgNum : 2.3, //Avg Cookies per customer
  numOfCookies:[],
  location : 'paris' ,
  hours : ['6am ','7am ','8am ','9am ','10am ','11am '
    ,'12am ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm ' ],

  getmyNum : function (){
    for (var i=0 ; i<this.hours.length;i++){
      var myAvg= Math.floor(this.avgNum);
      this.numOfCookies.push((getRandomCustomer(this.minCustomer,this.maxCustomer))*myAvg);
    }
  },

  myrender3 : function(){ // I will star DOM manipulation,I need to convert the values of the object on creating the html , so i will create an html using javascript and passing the value from object
    var myContainer = document.getElementById('Salmon-Cookies'); //i get the parent
    var myArticle = document.createElement('article');
    myContainer.appendChild(myArticle);
    //console.log(myContainer);
    var h2Element = document.createElement('h2'); //Creat h2
    myArticle.appendChild(h2Element);//my child is h2
    h2Element.textContent = this.location;
    var ulElement = document.createElement('ul');
    myContainer.appendChild(ulElement);
    for(var k = 0 ; k< this.hours.length; k++){
      var liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${this.hours[k]} :${this.numOfCookies[k]} Cookies.`;
    }
  }
};

Paris.getmyNum();
Paris.myrender3();

var Lima = {

  minCustomer : 2 , //minimum number of customer per hour
  maxCustomer : 16 , //maximum number of customer per hour
  avgNum : 4.6, //Avg Cookies per customer
  numOfCookies:[],
  location : 'Lima' ,
  hours : ['6am ','7am ','8am ','9am ','10am ','11am '
    ,'12am ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm ' ],

  getmyNum : function (){
    for (var i=0 ; i<this.hours.length;i++){
      var myAvg= Math.floor(this.avgNum);
      this.numOfCookies.push((getRandomCustomer(this.minCustomer,this.maxCustomer))*myAvg);
    }
  },

  myrender4 : function(){ // I will star DOM manipulation,I need to convert the values of the object on creating the html , so i will create an html using javascript and passing the value from object
    var myContainer = document.getElementById('Salmon-Cookies'); //i get the parent
    var myArticle = document.createElement('article');
    myContainer.appendChild(myArticle);
    //console.log(myContainer);
    var h2Element = document.createElement('h2'); //Creat h2
    myArticle.appendChild(h2Element);//my child is h2
    h2Element.textContent = this.location;
    var ulElement = document.createElement('ul');
    myContainer.appendChild(ulElement);
    for(var k = 0 ; k< this.hours.length; k++){
      var liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${this.hours[k]} :${this.numOfCookies[k]} Cookies.`;
    }
  }
};

Lima.getmyNum();
Lima.myrender4();


function getRandomCustomer(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

