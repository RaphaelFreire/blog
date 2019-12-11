---
date: 2019-12-10 22:18:00
title: Declarando os operadores de espalhamento e rest
description: Estudando Estrutura de Dados com JavaScript
category: JS
background: "#d6ba32"
---

Podemos transformar arrays em parametros usando a função apply(), A ES2015 tem o operador de espalhamento (spread operator), representado por `...`, para isso. Por exemplo, considere a função `sum` que declaramos na seção anterior. Podemos executar o código a seguir para passar os parâmetros x,y e z:

```js

let params = [3,4,5];
console.log(sum(...params));

```
O código anterior é igual a este código escrito em ES5:

```js

console.log(sum.apply(undefined, params));

```

O operador de espalhamento `...` também pode ser usado como um parâmetro rest em funções para substituir `arguments`. Considere o exemplo a seguir: 

```js

function restParamaterFunction(x, y ...a){
  return (x+y) * a.length;
}

```


Fonte: Livro Estrutura de dados e algoritmos com JavaScript - Loiane Groner

