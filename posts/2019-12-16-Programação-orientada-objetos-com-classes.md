---
date: 2019-12-16 21:20:00
title: Programação Orientada a Objetos com classes
description: Estudando Estrutura de Dados com JavaScript
category: JS
background: "#d6ba32"
---

A ES2015 também introduziu uma maneira mais limpa de declarar classes. Vimos que podemos declarar uma classe chamada Book na seção sobre programação orientada a objetos.

```js
function Book(title, pages, isbn) {
  this.title = title
  this.pages = pages
  this.isbn = isbn
}

Book.prototype.printTitle = function() {
  console.log(this.title)
}
```

Podemos Simplificar a sintaxe e usar o código a seguir:

```js
class Book {
  constructor(title, pages, isbn) {
    this.title = title
    this.pages = pages
    this.isbn = isbn
  }

  printIsbn() {
    console.log(this.isbn)
  }
}
```

Fonte: Livro Estrutura de dados e algoritmos com JavaScript - Loiane Groner
