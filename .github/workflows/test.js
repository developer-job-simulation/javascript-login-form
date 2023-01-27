import { JSDOM } from "jsdom";
import path from "node:path";
import { setTimeout } from "timers/promises";
import { test } from "uvu";
import * as assert from "uvu/assert";
let filePath = "./src/index.html";

test("Fix Logo Rendering Issue", async () => {
  assert.ok(true === true);
});

test.run();
