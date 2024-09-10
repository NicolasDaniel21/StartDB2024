export class Recinto {
  constructor(numero, tamanhoTotal, ...bioma) {
    this.numero = numero;
    this.bioma = bioma;
    this.tamanhoTotal = tamanhoTotal;
    this.animais = {};
  }

  adicionarAnimal(animal, quantidade) {
  }
}

/*
1. bioma certo, espaço suficiente
2. carnívoros só podem conviver com carnívoros
3. animais já presentes devem continuar confortáveis com inclusões
4. hipopótamos só convivem com outras espécies quando estão num 
bioma de savana e rio
5. macacos não podem ficar sozinhos (independente da outra espécie)
6. quando tem 2 espécies diferentes ou mais em um bioma, considerar
um espaço extra ocupado
7. não separar nem trocar animais de um recinto
*/
