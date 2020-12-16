# viacep

[![npm](https://img.shields.io/npm/v/viacep)](https://www.npmjs.com/viacep)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/viacep)](https://www.npmjs.com/viacep)
[![NPM](https://img.shields.io/npm/l/viacep)](LICENSE)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Procurando um webservice gratuito e de alto desempenho para consultar Códigos de Endereçamento Postal (CEP) do Brasil? Utilize o serviço, melhore a qualidade de suas aplicações web e colabore para manter esta base de dados atualizada. Mais informações no [site oficial](https://viacep.com.br/).

## Instalação

Para instalar o pacote rode:

```
npm install viacep
```

ou

```
yarn add viacep
```

## Início rápido

```js
import { ViaCEP } from 'viacep'

const viacep = new ViaCEP()

;(async () => {
  try {
    const data = await viacep.cep('01001-000')
    console.log(data)
  } catch (error) {
    console.log(error)
  }
})()
```

## Métodos disponíveis

### CEP

Busca por endereço pelo número do CEP.

```js
viacep.cep('01001-000')

// {
//   cep: '01310-000',
//   logradouro: 'Avenida Paulista',
//   complemento: 'até 610 - lado par',
//   bairro: 'Bela Vista',
//   localidade: 'São Paulo',
//   uf: 'SP',
//   ibge: '3550308',
//   gia: '1004',
//   ddd: '11',
//   siafi: '7107'
// }
```

Também existe um overload para encontrar endereços a partir de estado, cidade e rua. O retorno desse método é uma array de endereços.

```js
viacep.cep({ state: 'SP', city: 'São Paulo', street: 'Praça da Sé' })

// [
//   {
//     cep: '01001-000',
//     logradouro: 'Praça da Sé',
//     complemento: 'lado ímpar',
//     bairro: 'Sé',
//     localidade: 'São Paulo',
//     uf: 'SP',
//     ibge: '3550308',
//     gia: '1004',
//     ddd: '11',
//     siafi: '7107'
//   },
//   ...
// ]
```

## Contribuindo

Issues e Pull requests são bem-vindos.

## Licença

[MIT](https://github.com/rfoel/viacep/blob/main/LICENSE)
