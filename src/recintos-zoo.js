import { Recinto } from "./recinto.js";

export class RecintosZoo {
  static animais = {
    LEAO: {
      tamanho: 3,
      bioma: "savana",
    },
    LEOPARDO: {
      tamanho: 2,
      bioma: "savana",
    },
    CROCODILO: {
      tamanho: 3,
      bioma: "rio",
    },
    MACACO: {
      tamanho: 1,
      bioma: ["savana", "floresta"],
    },
    GAZELA: {
      tamanho: 2,
      bioma: "savana",
    },
    HIPOPOTAMO: {
      tamanho: 4,
      bioma: ["savana", "rio"],
    },
  };

  constructor() {
    this.recintos = [
      new Recinto(1, 10, "savana"),
      new Recinto(2, 5, "floresta"),
      new Recinto(3, 7, "savana", "rio"),
      new Recinto(4, 8, "rio"),
      new Recinto(5, 9, "savana"),
    ];

    this.recintos[0].adicionarAnimal("macaco", 3);
    this.recintos[1].adicionarAnimal("", 0);
    this.recintos[2].adicionarAnimal("gazela", 1);
    this.recintos[3].adicionarAnimal("", 0);
    this.recintos[4].adicionarAnimal("leao", 1);
  }

  analisaRecintos(animal, quantidade) {
    this.recintos.forEach((recinto) => {
      console.log(recinto.adicionarAnimal(animal, quantidade));
    });
  }
}
