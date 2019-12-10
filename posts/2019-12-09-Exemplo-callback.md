---
date: 2019-12-06 21:20:00
title: Exemplo de Função Callback
description: Estudando Funções Callback
category: Node
background: "#81ec56"
---

Callbacks

A programação assíncrona é um padrão de design que garante a execução do código não bloqueável. Assim ela é excelente para uma execução mais rápida dos programas, é um pouco mais difícil de programar e, na maioria das vezes, acabamos tendo que lhe dar com o paradigma de callbacks que não usa o retorno da função para informar que a função foi finalizada.

Funções Callbacks trabalha com o “estilo de passagem de continuação”. Em definição, uma função escrita recebe como argumento uma “continuação explícita”. Quando a função resulta um valor, ela “retorna” pela chamada da função de continuação com este valor via argumento.

Funções de Callback não são features da linguagem, apenas uma convenção para usar funções em Javascript.

```js
function obterUsuario(callback) {
  setTimeout(function() {
    return callback(null, {
      id: 1,
      nome: "Aladin",
      dataNascimento: new Date(),
    })
  }, 1000)
}

function obterTelefone(idUsuario, callback) {
  setTimeout(function() {
    return callback(null, {
      telefone: "92242020",
      ddd: 17,
    })
  }, 2000)
}

function obterEndereco(idUsuario, callback) {
  setTimeout(function() {
    return callback(null, {
      rua: "dos bobos",
      numero: 0,
    })
  }, 2000)
}

obterUsuario(function resolverUsuario(error, usuario) {
  if (error) {
    console.erro("Deu Ruim em USUARIO", error)
    return
  }

  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if (error1) {
      console.log("Deu ruim em TELEFONE", error)
      return
    }

    obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
      if (error2) {
        console.log("Deu ruim em Endereco", error)
        return
      }

      console.log(`
              Nome: ${usuario.nome}
              Endereco: ${endereco.rua}, Número: ${endereco.numero}
              Telefone: (${telefone.ddd}) ${telefone.telefone}
            `)
    })
  })
})
```

fontes:
https://fernandofranzini.wordpress.com/2017/06/08/programacao-assincrona/
https://imasters.com.br/desenvolvimento/gerenciando-o-fluxo-assincrono-de-operacoes-em-nodejs
https://cursos.nodebr.org/
