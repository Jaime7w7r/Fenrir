var Users = localStorage.getItem("Users");
Users=JSON.parse(Users);
const UserName = document.getElementById("Nombre");
var UserNombre;
var Indice=-1;


function CreateNewUser(Nombre){
  var User = JSON.stringify({
    Nombre: Nombre,
    Tiempo:0,
    Puntos:0
  });
  Users.push(User); 
  localStorage.setItem("Users",JSON.stringify(Users));
  UserNombre=Nombre;
}

if(Users==null) Users=[];

function Redirect(){
  window.location.assign('index2.html?id='+Indice);
  
}

function VerSiExiste() {
  var i=0,cont=0,aux=0;
  if(Users.length>0){
    while (i<Users.length) {
      var User = JSON.parse(Users[i]);
      i++;
      if (UserName.value == User.Nombre) {
        cont++;
        aux=i;
      }
      
    }
    if(cont>0){
      Indice=aux-1;
    }else{
      Indice=i;
      CreateNewUser(UserName.value);
    }
  }else{
    
    CreateNewUser(UserName.value);
    Indice=0;
  }
  console.log(Indice);
  Redirect();

}

