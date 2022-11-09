import { JSDOM } from "jsdom";
import { setTimeout } from "timers/promises";
import { test } from "uvu";
import * as assert from "uvu/assert";
let filePath = "./src/index.html";

test("Fix Logo Rendering Issue", async () => {
  const dom = await JSDOM.fromFile(filePath, {
    runScripts: "dangerously",
    resources: "usable",
  });
  assert.ok(["./logo.svg", "logo.svg"].includes(dom.window.document.querySelector("img").src));
});

test("Add HTML Email Validation to Email Input", async () => {
  const dom = await JSDOM.fromFile(filePath, {
    runScripts: "dangerously",
    resources: "usable",
  });
  assert.ok(dom.window.document.getElementById("email").type === "email");
});

test("Update HTML Password Input to Hide Password Visibility", async () => {
  const dom = await JSDOM.fromFile(filePath, {
    runScripts: "dangerously",
    resources: "usable",
  });
  assert.ok(dom.window.document.getElementById("password").type === "password");
});

test("Adjust CSS so that form is centered on page", async () => {
  const dom = await JSDOM.fromFile(filePath, {
    runScripts: "dangerously",
    resources: "usable",
  });

  await setTimeout(10); // need to let css load

  let body = dom.window.document.querySelector("body");
  assert.is(dom.window.getComputedStyle(body)["justify-content"], "center");
});

test("Validate User Credentials & show validation status message (Successful Auth)", async () => {
  const dom = await JSDOM.fromFile(filePath, {
    runScripts: "dangerously",
    resources: "usable",
  });

  await setTimeout(10); // need to let css load

  // simulate valid login
  dom.window.document.getElementById("email").value = "hello@world.com";
  dom.window.document.getElementById("password").value = "badpassword";
  dom.window.document.querySelector("button").dispatchEvent(new dom.window.MouseEvent("click"));

  assert.is(dom.window.document.getElementById("success-message").hidden, false);
  assert.is(dom.window.document.getElementById("error-message").hidden, true);
});

test("Validate User Credentials & show validation status message (Bad Auth)", async () => {
  const dom = await JSDOM.fromFile(filePath, {
    runScripts: "dangerously",
    resources: "usable",
  });

  await setTimeout(10); // need to let css load

  // simulate valid login
  dom.window.document.querySelector("button").dispatchEvent(new dom.window.MouseEvent("click"));

  assert.is(dom.window.document.getElementById("success-message").hidden, true);
  assert.is(dom.window.document.getElementById("error-message").hidden, false);
});

test.run();
