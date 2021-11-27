import React from "react";
import MesaVerde from "./parks/MesaVerde";
import { trees, wildlife } from "./parks/RockyMountains";
import * as RMFunctions from "./parks/RockyMountain";

import {
  trees as parkTrees,
  wildlife as parkWildlife,
} from "./parks/RockyMountain";

console.log (RMFunctions.trees);

console.log(parkTrees);

parkWildlife();

RMFunctions.wildlife();

RMFunctions.elevation();

console.log (trees);

export default function ColoradoStateParks() {
  return (
    <div>
        <MesaVerde />
    </div>
  );
}

console.log(trees);

wildlife();
