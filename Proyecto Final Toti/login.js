function loguear()
{
let user=document.getElementById("usuario").value;
let pass=document.getElementById("senha").value;

if(user=="Joao" && pass=="1234")
{
    window.location="bemvindo.html";
}

else {
    alert("dados errados");
}

}