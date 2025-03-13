import { upperCamelCase, constantCase } from "jsr:@mesqueeb/case-anything";
import codeRanges from "./codeRanges.ts";

export const outputFileName = "enum.ts";

function formatImports(): string {
  let outputString = "";

  outputString += `import {\n`;
  for (const range of codeRanges) {
    for (const code of range.codes) {
      outputString += `  ${constantCase(code.message)},\n`;
    }
  }
  outputString += `} from "./consts.ts";\n`;
  outputString += `\n`;

  return outputString;
}

export function generateEnum(): string {
  let outputString = "";

  outputString += formatImports();

  outputString += `export enum HttpCode {\n`;
  for (const range of codeRanges) {
    outputString += `  // ${range.range} ${range.name}\n`;
    for (const code of range.codes) {
      outputString += `  ${upperCamelCase(code.message)} = ${constantCase(
        code.message
      )},\n`;
    }
    outputString += `\n`;
  }
  outputString += `}\n`;

  return outputString;
}
