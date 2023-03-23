let userData={
    method:'get'
}
fetch('https://restcountries.com/v3.1/all',userData)
.then(function(data){
    return data.json()
})
.then(function(jsData){
    console.table(jsData)
    console.log(jsData[0].area)
    let createDiv1=document.createElement("div")
    document.body.appendChild(createDiv1)
  /*  
    let asiaCountries=jsData.map(element => {
     
        let asia=element.region
        let asianCountries=element.name.common
        if(asia==="Asia"){
        let tableContries=`${asianCountries}`
        console.table(tableContries)
        return tableContries
    }   
    });
    console.table(createDiv1.textContent=asiaCountries)
    createDiv1.textContent=asiaCountries

*/

/*
    let americanContries=jsData.filter(value=>{
        let region=(value.region==="Asia")
      
        return region
      
    })
    createDiv1.textContent=americanContries
    console.log(americanContries)
   let commoName=americanContries.map(value=>{
   let name1= value.name.common
    return name1
   })
   createDiv1.textContent=commoName
   console.log(commoName)
   console.table(commoName)

*/
   
let americanContries2=jsData.filter(value=>{
  
let population=parseInt(value.population)<20000
  
    return population
})
createDiv1.textContent=americanContries2
console.log(americanContries2)
let commoName2=americanContries2.map(value=>{
let name1= value.name.common
return name1
})
createDiv1.textContent=commoName2
console.log(commoName2)
console.table(commoName2)
})


