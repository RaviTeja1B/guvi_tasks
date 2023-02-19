//make a http request//create an instance of the requestlet 
xhr=new XMLHttpRequest();
//Open your request
xhr.open("GET","https://restcountries.com/v3.1/all");//onload event (server will listen to request and process data )
xhr.onload=function(){
    console.log("***Response Received***");
    console.log(this.responseText);
//raw data
let data=JSON.parse(xhr.responseText)
console.log(data)
console.table(data)
let [one,two,...rest]=data
console.log(one)
let{flags,...rest1}=one
console.log(flags)
//converted data into objectconsole.log(data);
//Loop throigh the data and print it on the console
for(let i=0;i<data.length;i++){
    console.log(`Flag  ${data[i].flags.png}
   `)}
for (let j in data){
    console.log(`Flag in ${data[j].flags.svg}
   `)}
for (let k of data){
    console.log(`Flag of ${k.flags.alt}
    `)
}
data.forEach(element => {
    console.log(`Name of the country is :- ${element.name.common}`)
    console.log(`Reagion is:- ${element.region}`)
    console.log(`Sub-Region is:- ${element.subregion}`)
});
}
    //send the request
//destructuring

    xhr.send();