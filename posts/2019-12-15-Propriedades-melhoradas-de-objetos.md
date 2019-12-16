---
date: 2019-12-15 21:20:00
title: Propriedades melhoradas de objetos
description: Estudando Estrutura de Dados com JavaScript
category: JS
background: "#d6ba32"
---

A ES6 introduziu um conceito chamado desestruturação de array (array destructuring), que é uma maneira de inicializar variáveis de uma só vez. Por exemplo, considere o código a seguir:

```js
let [x, y] = ["a", "b"]
```

Executar o código anterior é o mesmo que fazer o seguinte:

```js
let x = "a"
let y = "b"
```

A destruturação de array também pode ser usada para trocar valores (fazer swap)
de uma só vez, sem a necessidade de criar variáveis `temp`, o código anterior é o mesmo que:

```js
var temp = x
x = y
y = temp
```

Esse recurso será muito útil quando você conhecer os algoritmos de ordenação, pois essas trocas de valores
são muito comuns.

Há também outra funcionalidade chamada abreviação de propriedades (property shorthand), que é outra maneira de executara destruturação de objetos. Por exemplo considere o código a seguir:

```js
let [x, y] = ["a", "b"]

let obj = { x, y }

console.log(obj) // {x:"a", y:"b"}
```

O código anterior é o mesmo que o seguinte:

```js
var x = "a"

var y = "b"

var obj2 = { x: x, y: y }

console.log(obj2) // {x:"a", y:"b"}
```

Fonte: Livro Estrutura de dados e algoritmos com JavaScript - Loiane Groner
