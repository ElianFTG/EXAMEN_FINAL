import contarPalabra from "./sumador.js";

describe("Contar Palabra", () => {
  it("Deberia devolverme la frase y la cantidad 1", () => {
    expect(contarPalabra("bola")).toEqual("bola: 1");
  });
  it("Deberia devolverme las frases y su cantidad 1", () => {
    let mensaje = "bola: 1" +'\n' + "hola: 1"
    expect(contarPalabra("bola hola")).toEqual(mensaje);
  });
});
