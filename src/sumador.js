function contarPalabra(a) {
  let lista = [];
  let control = 0;
  let palabra = "";
  let recorrido = 0;
  for(let i = 0; i < a.length; i ++){
    if(a[i] == " " || a[i] == "-" || a[i] == ";" || a[i] == "," || a[i] == "."){
      control = i - 1;
      while(recorrido <= control){
        palabra += a[recorrido];
        recorrido ++;
      }
      recorrido = i + 1;
      lista.push(palabra);
    }
    else{
      while(recorrido <= i){
        palabra += a[recorrido];
        recorrido ++;
      }
      recorrido = i;
      lista.push(palabra);
    }
  }
  
  lista.push(a);
  let mensaje = "";
  for(let i = 0; i < lista.length; i += 1){
    mensaje = lista[i] + ": " + 1;
    if(lista.length > 1){
      mensaje += '\n';
    }
  } 
  return mensaje;
}

export default contarPalabra;

