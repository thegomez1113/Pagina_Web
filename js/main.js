let menu_hamburguesa;
let menu_celular;
let btn_cerrar;
let estado = false;

window.onload = inicio;

function inicio(){
  menu_hamburguesa = document.getElementById("menu_hamburguesa");
  menu_celular = document.getElementById("menu_celular");
  boton_cerrar = document.getElementById("boton_cerrar");
  
  menu_hamburguesa.addEventListener("click",cambiarEstadoMenu);
  boton_cerrar.addEventListener("click",cambiarEstadoMenu);
}

function cambiarEstadoMenu(event){
    if(!estado)
    {
     TweenLite.to(menu_celular, 1, {
      left:8, ease: Power1.easeInOut
      });  
    }
    else{
      TweenLite.to(menu_celular, 1, {
      left:-200, ease: Power1.easeInOut
      });
    }
  estado = !estado;
}