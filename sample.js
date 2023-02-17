var search=document.getElementById('search')
var options=["youtube","javatpoint","github","instagram","google"]
var body=document.getElementById("body")
console.log(options)
var avaliable=options.map(value=>{
  return `${value} `
})
document.getElementById("avaliable").innerHTML=`<p>search only these</p><p>${avaliable}</p>`
search.addEventListener('keyup',()=>{
   var output=search.value
   var choice=options.filter(value=>{
    return value===output;
   })
 console.log(choice)
 display(choice)
})
function display(dat){
  var card=document.getElementById("final")
  card.innerHTML=dat
  card.href=`http://www.${dat}.com`
  document.getElementById('cardbody').innerHTML=`<p>your option is ${dat} that is diaplayed popular website is recommended for your use</p>
  <p>browse at your own risk and your option will be provided</p> `
}
