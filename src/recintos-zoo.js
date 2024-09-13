import { AnimaisEnum } from "./animaisEnum.js";
import { Recinto } from "./recinto.js";

export class RecintosZoo {
  constructor() {
    this.recintos = [
      new Recinto(1, 10, "savana"),
      new Recinto(2, 5, "floresta"),
      new Recinto(3, 7, "savana", "rio"),
      new Recinto(4, 8, "rio"),
      new Recinto(5, 9, "savana"),
    ];

    let animaisPreDefinidos = ["MACACO", "", "GAZELA", "", "LEAO"];
    let quantidadeAnimais = [3, 0, 1, 0, 1];

    for (let i = 0; i < animaisPreDefinidos.length; i++) {
      let animal = animaisPreDefinidos[i];

      if (Object.keys(AnimaisEnum.animais).includes(animal)) {
        for (let j = 0; j < quantidadeAnimais[i]; j++) {
          this.recintos[i].adicionarAnimal(animal);
        }
      }
    }
  }

  analisaRecintos(animal, quantidade) {
    let recintosViaveis = [];

    if (quantidade <= 0) {
      return {
        erro: "Quantidade inválida",
        recintosViaveis: false,
      };
    }


    if (!Object.keys(AnimaisEnum.animais).includes(animal)) {
      return {
        erro: "Animal inválido",
        recintosViaveis: false,
      };
    }

    this.recintos.forEach((recinto) => {
      let biomasAnimal = AnimaisEnum.animais[animal];
      biomasAnimal = biomasAnimal.bioma;

      if (!Array.isArray(biomasAnimal)) biomasAnimal = [biomasAnimal];

      /* verifica se o bioma tem compatibilidade com o animal */
      let biomaCompativel = false;
      biomasAnimal.forEach((biomaAtualAnimal) => {
        recinto.bioma.forEach((biomaAtualRecinto) => {
          if (biomaAtualAnimal == biomaAtualRecinto)
            biomaCompativel = true;
        });
      });

      let possuiSavanaERio = ["savana", "rio"].every((bioma) =>
        recinto.getBioma.includes(bioma)
      );

      let animaisCarnivoros = ["LEAO", "LEOPARDO", "CROCODILO"];

      if (biomaCompativel) {
        /* verifica se o animal eh carnivoro */
        let animalCarnivoro = false;
        if (animaisCarnivoros.includes(animal)) {
          animalCarnivoro = true;
        }

        let adicionarAnimal = true;

        let recintoPossuiCarnivoros = false;
        let recintoPossuiHipopotamo = false;

        /* verifica se o recinto possui animais carnivoros e hipopotamo */
        recinto.getAnimais.forEach((animalAtual) => {
          if (animaisCarnivoros.includes(animalAtual))
            recintoPossuiCarnivoros = true;

          if (recinto.getAnimais.includes("HIPOPOTAMO"))
            recintoPossuiHipopotamo = true;
        });

        /* garante que carnivoros convivam com carnivoros */
        if (animalCarnivoro && !recintoPossuiCarnivoros && recinto.getAnimais != 0)
          adicionarAnimal = false;
        else if (!animalCarnivoro && recintoPossuiCarnivoros && recinto.getAnimais != 0)
          adicionarAnimal = false;

        /* garante que hipopotamos possam conviver com outras especies */
        if (!possuiSavanaERio && recinto.getAnimais != 0) {
          if (recintoPossuiHipopotamo && animal != "HIPOPOTAMO")
            adicionarAnimal = false;
          else if (!recintoPossuiHipopotamo && animal == "HIPOPOTAMO")
            adicionarAnimal = false;
        }

        /* garante que macacos tenham companhia */
        if (animal == "MACACO" && quantidade <= 1)
          adicionarAnimal = false;

        if (adicionarAnimal) {
          let tamanhoAnimal = AnimaisEnum.animais[animal].tamanho;

          if (recinto.temAnimaisDiferentes(animal)) {

            if (recinto.tamanhoTotal - recinto.calculaEspacoLivre() + tamanhoAnimal*quantidade > recinto.tamanhoTotal) {
              adicionarAnimal = false;
            }
          } else {
            if (recinto.tamanhoTotal - recinto.calculaEspacoLivre() + tamanhoAnimal*quantidade + 1 > recinto.tamanhoTotal) {
              adicionarAnimal = false;
            }
          }
        }

        if (adicionarAnimal) {
          for (let i = 0; i < quantidade; i++) {
            recinto.adicionarAnimal(animal);
          }

          recintosViaveis.push(recinto.toString());
        }
      }
    });

    if(recintosViaveis.length == 0)
      return { erro: "Não há recinto viável", recintosViaveis: false, };
    else
      return { erro: false, recintosViaveis, };
  }
}
