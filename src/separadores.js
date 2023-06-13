function verificacion(separador){
    if(separador == " " || separador == "-" || separador == ";" || separador == "," || separador == "."){
        return true;
    }
    return false;
}

export default verificacion;