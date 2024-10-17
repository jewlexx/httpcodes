import { assertEquals } from "@std/assert";
import { snakeCase } from "@mesqueeb/case-anything";

import { HttpCode } from "./enum.ts";
import * as constCodes from "./consts.ts";

for (const [key, enumValue] of Object.entries(HttpCode)) {
  if (typeof enumValue !== "number") {
    continue;
  }

  const upperSnakeCaseKey = snakeCase(key).toUpperCase();
  const constValue = constCodes[upperSnakeCaseKey as keyof typeof constCodes];

  Deno.test(`${key} is ${enumValue}`, () => {
    assertEquals(enumValue, constValue);
  });
}
