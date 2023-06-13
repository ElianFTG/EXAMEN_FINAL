import contarPalabra from "./sumador.js";

describe("Contar Palabra", () => {
  it("Deberia devolverme la frase y la cantidad 1", () => {
    expect(contarPalabra("bola")).toEqual("bola: 1");
  });
});
