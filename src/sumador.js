function contarPalabra(a) {
  let lista = [];
  lista.push(a);
  let mensaje = "";
  if(lista.length == 1){
    mensaje = lista[0] + ": " + 1;
    return mensaje;
  }
}

export default contarPalabra;
