
let options1={
    method:"GET",
}
let url="https://gorest.co.in/public-api/users"
fetch(url,options1)
.then(function(response){
    return response.json()

})
.then(function(data){
  
    console.log(data)
})