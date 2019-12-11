---
date: 2019-12-06 21:50:00
title: Valores Default para parâmetros de funções
description: Estudando Estrutura de Dados com JavaScript
category: JS
background: "#d6ba32"
---

É possível definir valores default para os parâmetros das funções

```js

function sum(x = 1, y = 2, z = 3){
  return x + y + z;
}

console.log(sum(2,2)); // exibe como saída 9

```

Como não estamos passando z como parâmetro, ele terá um valor igual a 3 como default.

Fonte: Livro Estrutura de dados e algoritmos com JavaScript - Loiane Groner
