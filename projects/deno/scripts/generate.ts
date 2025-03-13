import { resolve } from "jsr:@std/path";
import * as consts from "./generate_consts.ts";
import * as _enum from "./generate_enum.ts";

const outputDir = resolve(import.meta.dirname!, "..");

const constsOutput = consts.generateConsts();
const enumOutput = _enum.generateEnum();

await Deno.writeTextFile(
  resolve(outputDir, consts.outputFileName),
  constsOutput
);

await Deno.writeTextFile(resolve(outputDir, _enum.outputFileName), enumOutput);
