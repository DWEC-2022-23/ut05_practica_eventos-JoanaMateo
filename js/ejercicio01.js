
document.getElementById('numero').addEventListener('mouseover',entrar);
document.getElementById('numero').addEventListener('mouseout',salir);
document.getElementById('numero').addEventListener('dblclick',triplicar);

        function triplicar(){
            var valor=document.getElementById('numero').innerHTML;
            valor=parseInt(valor);
            var resul = (valor*3);
            document.getElementById("numero").innerHTML=resul;
        }
        function entrar(){
            document.getElementById("numero").style.backgroundColor = '#da70d6';
            document.getElementById("numero").style.fontFamily = "Times" ;
        }
        function salir(){
            document.getElementById("numero").style.backgroundColor = '#ffa500';
            document.getElementById("numero").style.fontFamily = "fantasy";
        }