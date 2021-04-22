#!/usr/bin/env node
const [term] = process.argv.slice(2, process.argv.length);
const pensador = require('pensador-api');

if (!term) {
  console.error("Por favor, informe um tema para sua frase");
} else {
  pensador({ term, max: 5 })
    .then(({ phrases }) => {
      const index = Math.floor(Math.random() * 5)
  
      console.log(`Como diria ${phrases[index].author}: "${phrases[index].text}"`);
    })
    .catch(() => console.log("Como diria Albert Einstein: \"Deu ruim na API \""));
}
