function table()
{
  var num=document.getElementById("num").value; 
  if(num<=0)
  {
   alert("Input the number greater than 0.");
   document.getElementById("num").value=null;
   document.getElementById("show").innerHTML=null;
  }
  else 
  {
    var table='<table id="table">';
     var count=1;
    for(let i=1;i<=10;++i)
    {
     table+='<tr><td>'+num+ ' X '+count+' = '+num*count+'</td></tr>';
     ++count;
    }
    table+='</table>';
    document.getElementById("show").innerHTML=table;
  }

}


function reset() {
    document.getElementById("num").value=null;
    document.getElementById("show").innerHTML=null;
}


function thank(event) {
    event.preventDefault();
    document.getElementById("msg").style.display = "block";

    var nm = document.getElementById("name").value;

    sessionStorage.setItem("name", nm);

    setTimeout(function() {
        // document.getElementById("msg").style.display = "none";   /*Not required */
        window.location.href="index.html";
    }, 2000);
}


