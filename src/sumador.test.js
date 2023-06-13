import contarPalabra from "./sumador.js";
import verificacion from "./separadores.js";
describe("Contar Palabra", () => {
  it("Deberia devolverme la frase y la cantidad 1", () => {
    expect(contarPalabra("bola")).toEqual("bola: 1\n");
  });
  it("Deberia devolverme las frases y su cantidad 1", () => {
    expect(contarPalabra("bola hola")).toEqual("bola: 1\nhola: 1");
  });
});

describe("Verificar separador", () => {
  it("Deberia devolverme true si el separador es un espacio ", () => {
    expect(verificacion(" ")).toEqual(true);
  });
  it("Deberia devolverme true si el separador es un -", () => {
    expect(verificacion("-")).toEqual(true);
  });
  it("Deberia devolverme true si el separador es un ;", () => {
    expect(verificacion(";")).toEqual(true);
  });
  it("Deberia devolverme true si el separador es un ,", () => {
    expect(verificacion(",")).toEqual(true);
  });
  it("Deberia devolverme true si el separador es un .", () => {
    expect(verificacion(".")).toEqual(true);
  });
});
