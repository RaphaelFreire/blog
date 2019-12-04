---
date: 2019-12-03 21:44:00
title: Escopo de variáveis com let e const
description: Estudando Estrutura de Dados com JavaScript
category: JS
background: "#d6ba32"
---

Para entender como as variáveis declaradas com as palavras reservadas `let` ou `const` funcionam, vamos usar o seguinte exemplo.

```js
let movie = "Lord of the Rings" //{1};
//var movie = 'Batman v Superman'; //erro, movie já foi declarada

console.log(movie) //{8}
```

Na linha {1}, declaramos uma variável `movie` cujo valor é `Lord of the Rings` e exibimos o seu valor na linha {8}. Essa variável tem um escopo global.

```js
function starWarsFan() {
  const movie = "Star Wars" //{2}
  return movie
}

console.log(starWarsFan()) //{9}
```

Na linha {9}, executamos a função `starWarsFan`. Nessa função, também declaramos uma varável chamada `movie` na linha {2}. A saída dessa função é `Star Wars` porque a variável da linha {2} tem um escopo local, o que significa que ela é válida somente dentro da função.

```js
function marvelFan() {
  movie = "The Avengers" //{3}
}

console.log(marvelFan()) //{10}
```

Na linha {10}, executamos a função `marvelFan`. Nessa função, alteramos o valor da variável movie (Linha {3}). Essa variável fez uma referência à variável global declarada na linha {1}. É por isso que obtinhamos a saída `The Avengers` na linha {10} e na Linha {11}, nas quais exibimos a variável global.

```js
function blizzardFan() {
  const isFan = true
  let phrase = "Warcraft"

  console.log("Before if: " + phrase)

  if (isFan) {
    let phrase = "initial text" // {5}
    phrase = "For the Horde!" // {6}

    console.log("Inside if: " + phrase)
  }

  phrase = "For the Alliance!" //{7}
  console.log("After if: " + phrase)
}

console.log(movie)
{
  11
}
blizzardFan() //{12}
```

Por fim, executamos a função `blizzardFan` na linha {12}. Nessa função, declaramos uma variável
chamada `phrase` linha{4} no escopo da função. Então, linha {5}, declaramos novamente uma variável chamada `phrase`, porém, dessa vez, essa variável tem como escopo somente a instrução `if`.

Na linha {6}, alteramos o valor `phrase`. Como ainda estamos dentro da instrução `if`, apenas a variável declarada na linha {5} terá o seu valor alterado.

Em seguida, linha {7}, alteramos novamente o valor de `phrase`, mas como não estamos no bloco da instrução `if`, o valor da variável declarada na linha {4} é alterado.
