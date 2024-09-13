import { AnimaisEnum } from './animaisEnum.js';
export class Recinto {
  constructor(numero, tamanhoTotal, ...bioma) {
    this.numero = numero;
    this.bioma = bioma;
    this.tamanhoTotal = tamanhoTotal;
    this.animais = [];
  }

  get getAnimais() {
    return this.animais;
  }

  get getBioma() {
    return this.bioma;
  }

  adicionarAnimal (animal) {
    this.animais.push(animal);
  }

  calculaEspacoLivre () {
    let espacoOcupado = 0;
    this.animais.forEach((animal) => {
      espacoOcupado = espacoOcupado + AnimaisEnum.animais[animal].tamanho;
    })

    const temValorDiferente = new Set(this.animais).size > 1;

    if(temValorDiferente)
      espacoOcupado++;

    return (this.tamanhoTotal - espacoOcupado);
  }

  temAnimaisDiferentes (animal) {
    for (let animalAtual of this.animais) {
      if(animalAtual != animal) {
        return true;
      }
    }

    return false;
  }

  toString() {
    return `Recinto ${this.numero} (espaço livre: ${this.calculaEspacoLivre()} total: ${this.tamanhoTotal})`;
  }
}

/*
carnívoros: leão, leopardo, crocodilo

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
