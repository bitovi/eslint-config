import fs from "fs";
import { expect } from "expect";
import { ESLint } from "eslint";

export default async function test(configFile, codeFile = configFile) {
  try {
    const linter = new ESLint({ overrideConfigFile: configFile });
    const errors = await linter.lintText(fs.readFileSync(codeFile, "utf8"));

    expect(errors[0].messages).toEqual([]);
  } catch (e) {
    console.error(e);
  }
}
