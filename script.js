// ARRAY METHODS:
// 1.Solving problems using array function on rest countries data
// A)Get all the countries from Asia continent/region using Filter method

 var request= new XMLHttpRequest()
 request.open("GET","https://restcountries.com/v3.1/all")
 request.send()
 request.onload=function(){
 var res=JSON.parse(request.response)
 var reg=res.filter((ele)=>ele.region==="Asia")
 console.log(reg);
 }
// OUTPUT:(50)

// B)Get all the countries with a population of less than 2 lakhs using Filter method
  
   var request= new XMLHttpRequest()
   request.open("GET","https://restcountries.com/v3.1/all")
   request.send()
   request.onload=function(){
   var res=JSON.parse(request.response)
   var pop=res.filter((ele)=>ele.population<200000)
   console.log(pop)
   }
//  OUTPUT:Array(62)

// C)Print the following details name,capital,flag using forEach method

     var request= new XMLHttpRequest()
     request.open("GET","https://restcountries.com/v3.1/all")
     request.send()
     request.onload=function(){
     var res=JSON.parse(request.response)
     res.forEach((ele) => {
     console.log(ele.name.common,ele.capital,ele.flags.png)
     })
     }

// D)Print the total population of countries using reduce method
  
    var request= new XMLHttpRequest()
    request.open("GET","https://restcountries.com/v3.1/all")
    request.send()
    request.onload=function(){
    var res=JSON.parse(request.response)
    for(var i in res)
    var tpop=res.reduce((acc,cv)=>acc+cv.population,0);
    console.log(tpop);
     }
// OUTPUT:(250) 7777721563

//  E)Print the country that uses US dollars as currency

   var request= new XMLHttpRequest()
   request.open("GET","https://restcountries.com/v3.1/all")
   request.send()
   request.onload=function(){
   var res=JSON.parse(request.response)
   let count=res.filter((ele)=>(ele.currencies?.USD))
   var cou=count.map((ele)=>ele.name.common)
   console.log(cou)
    }
// OUTPUT:20

 
