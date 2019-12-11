---
date: 2019-11-26 22:40:00
title: Instruções Condicionais
description: Estudando Estrutura de Dados com JavaScript
category: JS
background: "#d6ba32"
---

A primeira instrução condicional que vamos analisar é a construção `if...else`. Há algumas maneiras de usar essa construção.

Podemos usar a instrução `if` se quisermos executar um bloco de código somente se a condição (expressão) for `true`.

```js
var num = 1

if (num === 1) {
  console.log("num is equal to 1")
}
```

Podemos usar a instrução `if...else` se quisermos executar um bloco de código e a condição for `true`, ou outro bloco de código, somente caso a condição seja `false` (else).

```js
var num = 0

if (num === 1) {
  console.log("num is equal to 1")
} else {
  console.log("not equal to 1, the value of num is " + num)
}
```

A Instrução `if...else` também pode ser representada por um operador ternário.

```js

(num === 1) ? console.log("num is equal to 1") : console.log("not equal to 1, the value of num is " + num);

```

Fonte: Livro Estrutura de dados e algoritmos com JavaScript - Loiane Groner