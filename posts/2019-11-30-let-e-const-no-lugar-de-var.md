---
date: 2019-11-30 16:03:00
title: let e const no lugar de var
description: Estudando Estrutura de Dados com JavaScript
category: JS
background: "#d6ba32"
---

Antes podíamos declarar variáveis em qualquer ponto de nosso código,
mesmo que sobrescrêssemos a sua declaração:

```js

var framework = 'Angular';
var framework = 'React';

console.log(framework);

```

A saída do código anterior é `React`, pois a última variável declarada, cujo nome é `var framework`, recebeu esse valor. 

No código anterior, tínhamos duas variáveis com o mesmo nome isso é muito perigoso e pode levar o código a gerar um resultado incorreto.

Na ES2015, uma nova palavra reservada chamada `let` foi introduzida. `let` é a nova palavra reservada `var`, o que significa que podemos simplesmente substituir a palavra reservada `var` por `let`.

```js

let language = 'JavaScript'; // Linha 1
let language = 'Ruby'; // Linha 2

console.log(language);

```

A linha {2} lançará um erro porque uma variável chamada language já foi declarada no mesmo escopo linha {1}. 

Na ES2015 também foi apresentado a palavra reservada `const`. Seu comportamento é igual ao da palavra reservada `let`; com uma única diferença é que uma váriavel definida como `const` tem um valor somente para leitura, isto é, tem um valor constante.

```js

const PI = 3.141593
PI = 3.0; // Lança um erro
console.log(PI);

```

Se tentarmos atribuir um novo valor para PI ou até mesmo se a declaramos novamente usando `var PI` ou `let PI`, o código lançará um erro informando que PI é somente para leitura.

Vamos analisar outro exemplo com `const`:

```js

const jsFramework = {
  name: 'Angular'
};

```

Vamos tentar alterar o name da variável `jsFramework`

```js

jsFramework.name = 'React';

```

Se tentarmos executar esse código, ele funcionará. No entanto, variáveis `const` são somente de leitura. Então por que é possivel executar o código anterior? Para tipos que não sejam objetos, como número, booleano ou até mesmo string, isso significa que não podemos modificar os valores das variáveis. Ao trabalhar com objetos, é possível que as propriedades do objeto recebam novos valores ou sejam atualizadas, mas, a referência à variável em si (o endereço de referência na memória) não pode ser alterada, o que significa que ela não pode receber um novo valor.

Se tentarmos atribuir uma nova referência à variável jsFramework, como vemos a seguir, o compilador reclamará e lançará um erro (`jsFramework` is read-only).

