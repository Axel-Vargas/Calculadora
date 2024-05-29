<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
<script src="jquery.js"></script>
<script src="funciones.js"></script>
<link rel="stylesheet" href="css/style.css">
</head>
<center>
<body>
  <div class="fondo">
    <h1 style="color:white">Calculadora</h1>
    <form name="calculator">
      <ul>
        <li><p>≡</p></li>
        <li><h3>Científica</h3></li>
      </ul>
    <input type="text" id="resultado" name="ans">
    <div class="funcionesEspeciales">
    <input type="button" value="MC" id="MC">
    <input type="button" value="MR" id="MR">
    <input type="button" value="M+" id="Mmas">
    <input type="button" value="M-" id="Mmenos">
    <input type="button" value="MS" id="MS">
    <input type="button" value="M" id="M">
    </div>
    <div class="funciones">
      <select id="opcionesT" class="opcionesT">
        <option value="">Trigonometría</option>
        <option>2nd</option>
        <option>sin</option>
        <option>cos</option>
        <option>tan</option>
      </select>
      <select class="opcionesF">
      <option value="">Función</option>
      </select>
    </div>  
    <input type="button" value="2nd" id="2nd">
    <input type="button" value="π" id="pi">
    <input type="button" value="e" id="euler">
    <input type="reset" value="CE" id="res">
    <input type="button" value="←" id="borrar">
    <br>
    <input type="button" value="x²" id="potenciaCuadrada">
    <input type="button" value="1/x" id="fraccion">
    <input type="button" value="|x|" id="absoluto">
    <input type="button" value="exp" id="notacion">
    <input type="button" value="mod" id="mod">
    <br>
    <input type="button" value="√x" id="raiz">
    <input type="button" value="(" id="parentesisI">
    <input type="button" value=")" id="parentesisD">
    <input type="button" value="n!" id="factorial">
    <input type="button" value="÷" id="div">
    <br>
    <input type="button" value="xⁿ" id="potencia">
    <input type="button" value="7" id="siete">
    <input type="button" value="8" id="ocho">
    <input type="button" value="9" id="nueve">
    <input type="button" value="X" id="por">
    <br>
    <input type="button" value="10x" id="potenciaBDiez">
    <input type="button" value="4" id="cuatro">
    <input type="button" value="5" id="cinco">
    <input type="button" value="6" id="seis">
    <input type="button" value="-" id="menos">
    <br>
    <input type="button" value="log" id="logaritmo">
    <input type="button" value="1" id="uno">
    <input type="button" value="2" id="dos">
    <input type="button" value="3" id="tres">
    <input type="button" value="+" id="mas">
    <br>
    <input type="button" value="ln" id="logaritmoN">
    <input type="button" value="+/-" id="masmenos">
    <input type="button" value="0"  id="cero">
    <input type="button" value="." id="punto">
    <input type="button" value="=" id="igual">
    </form>
</div>
</body></center>
</html>