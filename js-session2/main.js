




var Myform = document.getElementById("my form")
Myform.addEventListener('submit',(e)=>{
  e.preventDefault()
  console.log(e.target)
  var nameValue = e.target[0].Value
  console.log(nameValue)
   var emailValue = e.target[1].Value
  console.log(emailValue)
  var divForData = document.createElement('div')
  Myform.appendChild(divForData)
  var p = document.createElement('p')
  divForData.appendChild(p)
  p.classList.add('text-black','p-2','bg-info')
  p.innerText = "name is :"+ nameValue+"email is"+emailValue
})
var inputName = document.getElementById("name ")