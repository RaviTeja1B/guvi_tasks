let mobiles=[
    {
        brand: "apple",
        color:  "red",
        year: 2020,
    },
    {
        brand : "samsung",
        color : " blue",
        year  :  2021,
    },
    {
        brand: "oneplus",
        color: "gray",
        year: 2022,
    }
    ]
     console.table(mobiles)
    
    mobiles.forEach((ele)=>{
        console.table(`Mobile Brand Of  ${ele.brand}`)

    })
    for (let i in mobiles){
        console.log(mobiles[i].brand)
        console.log(mobiles[i].color)
        console.log(mobiles[i].year)
    }
    console.table(mobiles)
    for (let j=0;j<mobiles.length;j++){
        console.log(mobiles[j].brand)
        console.log(mobiles[j].color)
        console.log(mobiles[j].year)
    
    }
    mobiles.push({
        brand: "miindia",
        color: "green",
        year: 2021
    })
    console.table(mobiles)
    
    
    for (let k of mobiles){
        c=k
        console.table(c )
    }
    
    for (let n in mobiles){
        d=mobiles[n]
        console.table(d)
    }
    
    for (let l=0;l<mobiles.length;l++){
        e=mobiles[l]
        console.table(e)
    }
    
    if(c===d&&c===e){
        console.log(true)
    }
    else
    {
        console.log(false)
    }
    
    f=mobiles.pop()
    console.log(mobiles)
    
    console.table(mobiles)
    console.table(f)
    console.log(f)
                              
    
    
                                        
    // Resume of  Ravi Teja
    
    let resume_1=
    [
    {
       details:[{ first_name: "Ravi",
              middle_name: "Teja",
              sur_name: "Morampudi"},
        {age:28},
        {gender:"male"},
        {D_of_B:"15-sep-1994"},]
        
    },
    {
        gmail:[
            {personal:"morampudiraviteja@gmail.com"},
            {officeal:"ravitejarhythm@gmail.com"}
        ]
    
    },
    {
        phone: [
            {personal:9704423820},
            {watsapp_no:8143862022}, 
            {land_line: 08676236185}
        ]
       
    },
    {
        address:{
            D_no: "7-226",
            street:"Sri Nagar Colony vuyyuru",
            city:"vuyyuru",
            state:"Andhra Pradesh",
            pin:521165
        }
    
    },
    {
        Education:[
            {B_tech:{
            college:"MVR COLLEGE OF ENGINEERING",
            university:"JNTTUK",
            branch:"MECHANICAL",
            year_of_passing:2016
        }},{M_tech:{
            college:"VRSEC",
            university:"JNTTUK",
            branch:"MECHANICAL",
            year_of_passing:2016
        }}]
    },
    {
        skills:{programing:
            ["python","JavaScript","html","css"],
            Designing:["CATIA","Fusion360","3D-Exp","Ansys"]}
    
    }
    ]
    
    console.table(resume_1)
    console.log(resume_1[0].details[0].middle_name)
    console.log(resume_1[1].gmail[0])
    console.log(resume_1[1].gmail[0].personal)
    console.log(resume_1[1].gmail[1])
    console.log(resume_1[1].gmail[1].officeal)
    // to get pin 
    console.log(resume_1[3].address.pin)
    // to get the designing skills
    console.log(resume_1[5].skills)
    console.log(resume_1[5].skills.Designing)
    console.log(resume_1[5].skills.programing)
    console.log(resume_1[5].skills.Designing[2])
//object destructuring
let [BasicDetails,Mail,Cellphone,address1,qualification,talent]=resume_1
console.table(BasicDetails)
console.table(talent)
let{details}=BasicDetails
console.log(details)
console.table(details)
let [name1,userage,usergender,userdob]=details
console.log(name1)
console.log(name1)
let{first_name,middle_name,sur_name}=name1
console.log(sur_name)
let {skills}=talent
console.table(skills)
let {programing,Designing}=skills
console.log(programing)
console.log(Designing)
    



//object destructuring
let person1={
    firstName:"ravi",
    secondName:"teja",
    age:178,
    phone:[08676236085,8143862022]
}
console.log(person1)
let {firstName,secondName,age,phone}=person1
console.log(firstName)
console.log(phone)
let [land,mobile]=phone
console.log(mobile)

