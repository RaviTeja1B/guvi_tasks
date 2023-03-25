 let data={
    name :"Rahul",
    email:"ravi@gmail.in",
    gender:"male",
    status:"Active"
 }




let options={
    method: "post",
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        Authorization:'Bearer a23edca9660f6013dade5da77dd76e41ca06b9730322e1c7ed2922da914c9833'
    },
    body: JSON.stringify(data)
}
let url="https://gorest.co.in/public/v2/users"
fetch(url,options)
.then(function(response){
    return response.json()

})
.then(function(data){
  
    console.log(data)
})  