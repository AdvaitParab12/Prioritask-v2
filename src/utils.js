import shortUUID from "short-uuid";
import { startCase } from "lodash";

export function titleCase(str) {
  return startCase(str)
}

export function randomID()  {
  return shortUUID.generate();
}
