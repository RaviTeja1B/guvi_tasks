let url="https://restcountries.com/v3.1/all";


let method1={
method:"GET"
}
let data= async (responseData)=>{
    try{
       responseData= await fetch(url).then((value)=>value.json())
        .then((data2)=>{
            return displayData(data2)
            // let response=data2
            // console.log(response)
            // response[0].region
            // return response
        })
            
    
        // /responseData=await fetchData.json()
        // // console.log(responseData)
        // return responseData

    }catch(error){
        console.log(error)
    }
    
}
data()
 const displayData=(response)=>{
    console.log(response)
 response.map((item)=>{
    console.log(item)
 })
 }




// let users=data().then(fetchValue=>{
//     //console.log(fetchValue)
//    //let region=fetchValue[0].region
//    //console.log(region)
//     let mapedArrey=fetchValue.map(value=>{
//         return value
//     })
//     return mapedArrey
// })
// console.log(users)