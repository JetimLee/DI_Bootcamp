const express = require("express");
const fs = require("fs");
//this is a syncronous (blocking) method
//if you don't specify this you'll get back a buffer
const textInput = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textInput);

const textOut = `This is what we know about the avocado ${textInput}. \nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
fs.writeFileSync("./newText", textOut);
fs.writeFileSync("./shoppingList", "buy milk");
fs.appendFileSync("./shoppingList", "buy avocados");
fs.unlinkSync("./shoppingList");
