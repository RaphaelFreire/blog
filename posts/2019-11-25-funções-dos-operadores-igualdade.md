---
date: 2019-11-25 21:17:00
title: Funções dos Operadores de Igualdade
description: Estudando Estrutura de Dados com JavaScript
category: JS
background: "#d6ba32"
---

# Funções dos operadores de igualdade (`==` e `===`)

Os dois operadores de igualdade aceitos em JavaScript podem causar um pouco de confusão quando trabalhamos com eles.

Quando `==` é usado, os valores poderão ser considerados iguais mesmo se forem de tipos diferentes. Isso pode ser confuso, até mesmo para um desenvolvedor JavaScript mais experiente. Vamos analisar como `==` funciona usando a tabela a seguir:

|     Type(x)      |     Type(y)      |      Resultado      |
| :--------------: | :--------------: | :-----------------: |
|       null       |    undefined     |        true         |
|      number      |      String      |  x == toNumber(y)   |
|      String      |      Number      |  toNumber(x) == y   |
|     Boolean      |       Any        |  toNumber(x) == y   |
|       Any        |     Boolean      |  x == toNumber(y)   |
| String ou Number |      Object      | x == toPrimitive(y) |
|      Object      | String ou Number | toPrimitive(x) == y |

Se `x` e `y` forem do mesmo tipo, então JavaScript usará o método `equals` para comparar os dois valores ou objetos. Qualquer outra combinação não listada na tabela resultará em `false`.

Os métodos `toNumber` e `toPrimitive` são internos e avaliam os valores de acordo com os resultados a seguir.

Método `toNumber`

| Tipo do valor |            Resultado             |
| :-----------: | :------------------------------: |
|   undefined   |              É NaN               |
|     null      |               É +0               |
|    Boolean    | True valor = 1; False valor = +0 |
|    Number     |       É o valor do número        |

Método `toPrimitive`

`Object`: Se `valueOf` devolver um valor primitivo, esse valor primitivo será devolvido; caso contrário, se `toString` devolver um valor primitivo, esse valor será devolvido; senão, um erro será devolvido.
	
Já o operador `===` ? Esse é muito mais simples. Se estivermos comparando dois valores de tipos diferentes, o resultado será sempre `false`. Se forem do mesmo tipo, eles serão comparados de acordo com a tabela a seguir:

| Type(x) |                  Valores                  | Resultado |
| :-----: | :---------------------------------------: | :-------: |
| Number  | x tem o mesmo valor que y (mas não é NaN) |   true    |
| String  |      x e y têm caracteres idênticos       |   true    |
| Bolean  |  x e y são ambos true ou são ambos false  |   true    |
| Object  |     x e y referenciam o mesmo objeto      |   true    |


Fonte: Livro Estrutura de dados e algoritmos com JavaScript - Loiane Groner