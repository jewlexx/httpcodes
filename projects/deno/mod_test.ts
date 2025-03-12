import { assertEquals } from "@std/assert";
import { constantCase } from "@mesqueeb/case-anything";

import { HttpCode } from "./enum.ts";
import * as constCodes from "./consts.ts";

for (const [key, enumValue] of Object.entries(HttpCode)) {
  if (typeof enumValue !== "number") {
    continue;
  }

  Deno.test(`${key} is ${enumValue}`, () => {
    const constantKey = constantCase(key);
    const constValue = constCodes[constantKey as keyof typeof constCodes];

    assertEquals(enumValue, constValue);
  });
}
