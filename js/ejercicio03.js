document.getElementById('coord').addEventListener('mousemove',coordenadasNav);
document.getElementById('info').addEventListener('mousemove',coordenadasPag)
document.getElementById('coord').addEventListener('click',botonRaton);
document.getElementById('coord').addEventListener('keydown',infoTeclado);

function coordenadasNav(event){
    var x= event.screenX;
    var y= event.screenY;
    var posicionRatonNav = document.getElementById('div1');
    
    document.getElementById('caja1').style.backgroundColor = '#FFFFFF';
    document.getElementById('h3').innerText='RATON';
    posicionRatonNav.innerHTML='Navegador['+x+','+y+']';
    document.getElementById('div3').innerText='Se mueve el ratón';

}
function coordenadasPag(event){
    var x= event.pageX;
    var y= event.pageY;
    var posicionRatonNav = document.getElementById('div2');
   
    posicionRatonNav.innerHTML='Pagina['+x+','+y+']';

}
function botonRaton(){
    document.getElementById('caja1').style.backgroundColor = '#FFFFCC';
    document.getElementById('div3').innerText='Se hace click con el ratón';

}

function infoTeclado(event){
    var tecla = event.key;
    var codigo = event.keyCode;//Está deprecate
    var infoTecla = document.getElementById('div1');
    var infoCodigo = document.getElementById('div2');

    document.getElementById('caja1').style.backgroundColor = '#CCE6FF';
    document.getElementById('h3').innerText='TECLADO';
    infoTecla.innerHTML='El caracter es: ['+tecla+']';
    infoCodigo.innerHTML='El codigo es: ['+codigo+']';
    document.getElementById('div3').innerText='Se pulsa una tecla';

}