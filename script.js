// ARRAY METHODS:
// 1.Solving problems using array function on rest countries data
// A)Get all the countries from Asia continent/region using Filter method

var request= new XMLHttpRequest()
 request.open("GET","https://restcountries.com/v3.1/all")
 request.send()
 request.onload=function(){
 var res=JSON.parse(request.response)
// var reg=res.filter((ele)=>ele.region=="Asia")
 console.log(res);

// for(var i in res){
//    console.log(res[0].currencies)
// }
//   for(var i=0;i<res.length;i++)
//   {

//  var dol=Object.values(res[i].currencies)[0].name
//   console.log(dol)
//   }
let count=res.filter((ele)=>(ele.currencies?.USD))
        console.log(count)
    var cou=count.map((ele)=>ele.name.common)
         console.log(cou)
 }    

    