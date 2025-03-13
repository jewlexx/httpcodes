/**
 * Converts the original consts file to a JSON file to be imported by alternative generators.
 */

import { camelCase, capitalCase } from "jsr:@mesqueeb/case-anything";
import {
  Informational,
  Successful,
  Redirection,
  ClientError,
  ServerError,
} from "../consts.ts";

const groups = {
  Informational,
  Successful,
  Redirection,
  ClientError,
  ServerError,
};

function mapValues(obj: Record<string, number>): {
  message: string;
  code: number;
}[] {
  return Object.entries(obj).map(([key, value]) => {
    return {
      message: capitalCase(camelCase(key)),
      code: value,
    };
  });
}

const codes = Object.entries(groups).map(([key, value]) => {
  return {
    name: capitalCase(key),
    codes: mapValues(value),
  };
});

console.log(JSON.stringify(codes, null, 2));
