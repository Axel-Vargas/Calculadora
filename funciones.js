$(document).ready(function () {
    var log = false;
    var ln = false;
    var sin = false;
    var cos = false;
    var tan = false;
    var hyp = false;
    var sec = false;
    var csc = false;
    var cot = false;
    var operacion = "";

    $("#cero").click(function () {
        $("#resultado").val($("#resultado").val() + "0");
    });

    $("#uno").click(function () {
        $("#resultado").val($("#resultado").val() + "1");
    });

    $("#dos").click(function () {
        $("#resultado").val($("#resultado").val() + "2");
    });

    $("#tres").click(function () {
        $("#resultado").val($("#resultado").val() + "3");
    });

    $("#cuatro").click(function () {
        $("#resultado").val($("#resultado").val() + "4");
    });

    $("#cinco").click(function () {
        $("#resultado").val($("#resultado").val() + "5");
    });

    $("#seis").click(function () {
        $("#resultado").val($("#resultado").val() + "6");
    });

    $("#siete").click(function () {
        $("#resultado").val($("#resultado").val() + "7");
    });

    $("#ocho").click(function () {
        $("#resultado").val($("#resultado").val() + "8");
    });

    $("#nueve").click(function () {
        $("#resultado").val($("#resultado").val() + "9");
    });

    $("#mas").click(function () {
        $("#resultado").val($("#resultado").val() + "+");
    });

    $("#menos").click(function () {
        $("#resultado").val($("#resultado").val() + "-");
    });

    $("#por").click(function () {
        $("#resultado").val($("#resultado").val() + "*");
    });

    $("#div").click(function () {
        $("#resultado").val($("#resultado").val() + "/");
    });

    $("#punto").click(function () {
        $("#resultado").val($("#resultado").val() + ".");
    });

    $("#potenciaCuadrada").click(function () {
        if ($("#resultado").val() != "") {
            $("#resultado").val(Math.pow($("#resultado").val(), 2));
        }
    });

    $("#raiz").click(function () {
        if ($("#resultado").val() != "") {
            $("#resultado").val(Math.sqrt($("#resultado").val(), 2));
        }
    });

    $("#masmenos").click(function () {
        $("#resultado").val($("#resultado").val() * -1);
    });

    $("#fraccion").click(function () {
        if ($("#resultado").val() != "") {
            $("#resultado").val((1 / $("#resultado").val()));
        }
    });

    $("#borrar").click(function () {
        $("#resultado").val($("#resultado").val().slice(0, -1));
    });

    $("#pi").click(function () {
        if ($("#resultado").val() == "") {
            $("#resultado").val(Math.PI);
        } else {
            $("#resultado").val($("#resultado").val() + "*" + Math.PI);
        }
    });

    $("#parentesisI").click(function () {
        if ($("#resultado").val() != "") {
            $("#resultado").val($("#resultado").val() + "*" + "(");
        }
    });

    $("#parentesisD").click(function () {
        if ($("#resultado").val() != "") {
            $("#resultado").val($("#resultado").val() + ")");
        }
    });

    $("#euler").click(function () {
        if ($("#resultado").val() == "") {
            $("#resultado").val(Math.E);
        } else {
            $("#resultado").val($("#resultado").val() + "*" + Math.E);
        }
    });

    $("#absoluto").click(function () {
        if ($("#resultado").val() != "") {
            $("#resultado").val(eval($("#resultado").val()));
            $("#resultado").val(Math.abs($("#resultado").val()));
        }
    });

    $("#notacion").click(function () {
        if ($("#resultado").val() != "") {
            $("#resultado").val($("#resultado").val() + "E");
        }
    });

    $("#mod").click(function () {
        if ($("#resultado").val() != "") {
            $("#resultado").val($("#resultado").val() + "%");
        }
    });

    $("#factorial").click(function () {
        if ($("#resultado").val() != "") {
            $("#resultado").val(factorialice($("#resultado").val()));
        }
    });

    $("#potencia").click(function () {
        if ($("#resultado").val() != "") {
            $("#resultado").val($("#resultado").val() + "**");
        }
    });

    $("#potenciaBDiez").click(function () {
        if ($("#resultado").val() != "") {
            $("#resultado").val(Math.pow(10, $("#resultado").val()));
        }
    });

    $("#logaritmo").click(function () {
        operacion = "log";
        log = true;
        if ($("#resultado").val() != "") {
            localStorage.setItem("num1", $("#resultado").val());
        } else {
            localStorage.setItem("num1", "");
        }
        $("#resultado").val("");
    });

    $("#logaritmoN").click(function () {
        operacion = "ln";
        ln = true;
        if ($("#resultado").val() != "") {
            localStorage.setItem("num1", $("#resultado").val());
        } else {
            localStorage.setItem("num1", "");
        }
        $("#resultado").val("");
    });

    $("#opcionesT").change(function (event) {
        if ($("#opcionesT").val() == "sin") {
            operacion = "sin";
            sin = true;
            if ($("#resultado").val() != "") {
                localStorage.setItem("num1", $("#resultado").val());
            } else {
                localStorage.setItem("num1", "");
            }
            $("#resultado").val("");
        } else if ($("#opcionesT").val() == "cos") {
            operacion = "cos";
            cos = true;
            if ($("#resultado").val() != "") {
                localStorage.setItem("num1", $("#resultado").val());
            } else {
                localStorage.setItem("num1", "");
            }
            $("#resultado").val("");
        } else if ($("#opcionesT").val() == "tan") {
            operacion = "tan";
            tan = true;
            if ($("#resultado").val() != "") {
                localStorage.setItem("num1", $("#resultado").val());
            } else {
                localStorage.setItem("num1", "");
            }
            $("#resultado").val("");
        }
    });

    $("#igual").click(function () {
        switch (operacion) {
            case "ln":
                if (ln == true) {
                    if (localStorage.getItem("num1") == "") {
                        $("#resultado").val(Math.log($("#resultado").val()));
                    } else {
                        $("#resultado").val(localStorage.getItem("num1") * Math.log($("#resultado").val()));
                    }
                    ln = false;
                }
                break;
            case "log":
                if (log == true) {
                    if (localStorage.getItem("num1") == "") {
                        $("#resultado").val(Math.log10($("#resultado").val()));
                    } else {
                        $("#resultado").val(localStorage.getItem("num1") * Math.log10($("#resultado").val()));
                    }
                    log = false;
                }
                break;
            case "sin":
                if (sin == true) {
                    if (localStorage.getItem("num1") == "") {
                        $("#resultado").val(Math.sin($("#resultado").val()));
                    } else {
                        $("#resultado").val(localStorage.getItem("num1") * Math.sin($("#resultado").val()));
                    }
                    sin = false;
                }
                break;
            case "cos":
                if (cos == true) {
                    if (localStorage.getItem("num1") == "") {
                        $("#resultado").val(Math.cos($("#resultado").val()));
                    } else {
                        $("#resultado").val(localStorage.getItem("num1") * Math.cos($("#resultado").val()));
                    }
                    cos = false;
                }
                break;
            case "tan":
                if (tan == true) {
                    if (localStorage.getItem("num1") == "") {
                        $("#resultado").val(Math.tan($("#resultado").val()));
                    } else {
                        $("#resultado").val(localStorage.getItem("num1") * Math.tan($("#resultado").val()));
                    }
                    tan = false;
                }
                break;
        }
        $("#resultado").val(eval($("#resultado").val()));
    });



    function factorialice(num) {
        if (num === 0 || num === 1)
            return 1;
        for (var i = num - 1; i >= 1; i--) {
            num = num * i;
        }
        return num;
    }
});