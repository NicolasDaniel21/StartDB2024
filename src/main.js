import { RecintosZoo } from "./recintos-zoo.js";

function main() {
  let recintos = new RecintosZoo();
  const resultado = recintos.analisaRecintos("MACACO", 1);

  console.log("recintosViaveis: " + resultado.recintosViaveis);
  console.log("erro: " + resultado.erro);
}


main();
