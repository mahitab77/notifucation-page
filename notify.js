
/////////////////////////////////////////////////////////////

var allnotes=document.getElementsByClassName("note-content")
var reddots=document.getElementsByClassName("unreaddot")
var countoftrue=0
var countoffalse=0

for (var i = 0; i < allnotes.length; i ++){
    
  var obj=allnotes[i].getAttribute("read-flag") 
  
  if (obj=="true") {   
    countoftrue++
    document.getElementById("nnum").innerText=countoffalse
    allnotes[i].style.backgroundColor='white'
    reddots[i].style.display='none'  
  }
  else{      
    countoffalse++
    document.getElementById("nnum").innerText=countoffalse
    allnotes[i].style.backgroundColor='hsl(211, 68%, 94%)'
    reddots[i].style.display='inline-block'
  }
}

//////////////////////////mark all as read//////////////////////
maar=document.getElementById("maread")

function makeallread(){
  var allnotes=document.getElementsByClassName("note-content")
  var reddots=document.getElementsByClassName("unreaddot")

  for (var i = 0; i < allnotes.length; i ++){

      
  allnotes[i].style.backgroundColor='white'  
  reddots[i].style.display='none'
  document.getElementById("nnum").innerText='0'
  allnotes[i].setAttribute("read-flag","true")
  maar.style.color='hsl(224, 90%, 26%)'
  }
}
 maar.onclick = makeallread 
 //////////////////////if note clicked////////////////
 


function chosen(e) {

    
    var targparentdiv=e.currentTarget
    

    let children = e.currentTarget.children
    let childrenArray = Array.from(children)
    let choch=childrenArray[1].firstElementChild
    console.log(choch)
    let chochoch=choch.lastElementChild
    console.log(chochoch)
    chochoch.style.display='none'
    
   
    targparentdiv.style.backgroundColor='white'
    targparentdiv.setAttribute("read-flag","true")

    var recentcount=document.getElementById("nnum").innerText
    var counttoset=recentcount-1
    document.getElementById("nnum").innerText=counttoset

    

}


for (var i = 0; i < allnotes.length; i ++){ 
   
    allnotes[i].onclick = chosen
       
}
























 





