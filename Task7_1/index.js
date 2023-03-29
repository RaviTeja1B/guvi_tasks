let url="https://restcountries.com/v3.1/all"
let options={
    method:"get",
    headers:{
        'Content-Type':'application/json',
        Accept:'application/json'
    }
}
let data= async (values)=>{
    let fetchData=await fetch (url,options)
    let response=await fetchData.json()
    values=response
    return displayData(values)
    
 
    
}
data()

let displayData=(items)=>{
    console.log(items)

    let countriesFilter=items.filter(value=>{
        return value.region==="Asia"
    })
    console.log(countriesFilter)

    let populationLessThan2Lakhs=items.filter(values=>{
       return values.population<200000
    })
    console.log(populationLessThan2Lakhs)

    let populationGreaterThan2Lakhs=items.filter(values=>{
        return values.population>200000
    })
    console.log(populationGreaterThan2Lakhs)
/* */
let div1=document.createElement("div")
document.body.appendChild(div1)

/**/ 
    
    let flags=items.map(value=>{
      let imageurl=value.flags.png
      return imageurl
    })
    console.log(flags)

    for (let i of flags){
        
        let image=document.createElement("img")
        image.src=i
        div1.appendChild(image)
    }



    /**/ 
   let name1=items.map(value=>{
    let user=value.name.common
    return user
   })
console.log(name1)

for (let item of name1)    {
    let para=document.createElement("p")
    div1.appendChild(para)
    para.textContent=item
}


/* */

let capitals=items.map(value=>{
    let user=value.capital
    return (user)
    
})
console.log(capitals)

let totalPopulationArray=items.map(value=>{
    return value.population
})
console.log(totalPopulationArray)
let totalPopulation=totalPopulationArray.reduce((acc,current)=>{
    let populationTotal=acc+current
    return populationTotal
})
console.log("The Total population is :- "+ totalPopulation)

/**/ 

let filterCurrencyDoller=items.filter(value=>{
return value.region==='Americas'
 
  
})
console.log(filterCurrencyDoller)
let doller=filterCurrencyDoller.map(value=>{
    value.symbol==="$"
})
console.log(doller)
}




// let arr=[20,30]
// let arr2=[40,50]
// let arr3=[...arr,...arr2]
// console.log(arr3)

