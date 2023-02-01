
# Testando uma aplicação com React-Redux

Neste módulos vamos aprender técnicas e modos de testar uma aplicação com React-Redux.

## Introdução 
## O que é Redux, React-Redux e para que servem os Testes?

Para relembrarmos, o Redux é uma  biblioteca para armazenamento de estados de aplicações JavaScript.
Foi criado utilizando conceito de fluxo de dados unidirecional, por Dan Abramov em 2015.

Ao desenvolver aplicações, há a necessidade de lidar com gerenciamento de estado e o Redux é utilizado para suprir a necessidade de simplificar o controle destes estados, tornando o compartilhamento entre vários componentes mais simplificado. Em suma, poderá 'digitar e visualizar' informações a partir de qualquer parte (ou qualquer componente - se usar Redux com React). Desta maneira, os componentes, individualmente, não possuem a necessidade de armazenar os próprios estados.

Os elementos de sua estrutura são: 

***Store*** - Local onde todas as informações ficam armazenadas. É o local onde acontecem as atualizações do estado, através dos *Reducers* e também é onde possui o método *dispatch*, onde são chamadas as actions. Um ponto a mais é que o Store é imutável.

***Action*** - São as mudanças, as ações que deseja disparar para a aplicação. É a única forma de acionar as mudanças de estado no store. 

***Reducers*** - É quem se responsabiliza em lidar com as *Actions* e detalha como o estado da aplicação modificará de acordo com a action enviada à store. Cada dado presente na *Store* deve ter seu próprio *Reducer*.

*React-Redux* é uma biblioteca desenvolvida para melhorar e facilitar a comunicação entre *Redux* e *React* e seu principal objetivo é ajudar na produtividade e facilitação, pois não é necessário fazer toda a comunicação entre eles manualmente.

Entrando nos testes, intuito da sua utilização é validar a funcionalidade e renderização dos componentes, se cada elemento funciona da maneira correta. Mas como se faz isso em uma aplicação React? É isso que vamos ver! 
## O que vamos aprender?

No dia de hoje vamos aprender como instalar e configurar a biblioteca Redux para a utilização dos testes, tendo a análise de que a aplicação está funcionando corretamente. 

## Você será capaz de
- Criar uma ***`store`***, ***`Reducers`***, ***`Actions`***, ***`dispach()`*** para armazernar e atualizar o estado de uma aplicação;

- Utilizar ***`getState()`*** para ler dados da ***`store`***;

- Configurar *React-Redux* para sua utilização;

- Testar a aplicação *React-Redux* para verificar sua funcionalidade;

## Por que isso é importante?

No desenvolvimento de uma aplicação, um obstáculo dos profissionais é a garantia de um bom funcionamento do produto final, sem erros e com menos trabalho de manutenção possível.

A resposta para superar este obstáculo são os ***Testes***. Com eles você poderá verificar a funcionalidade de cada elemento de cada componente desenvolvido, assim como toda a aplicação geral, mantendo a clareza e a certeza de que sua aplicação trabalha como o desejado.

Para isso precisamos tomar os primeiros passos, iniciando com a instalação. Vamos começar?

## Iniciando

*Primeiramente em seu terminal, vamos criar nossa aplicação:*

```bash
    npx create-react-app my-project
```

*Logo após, entre no qrquivo criado e instale as dependências que iremos utilizar:*

```bash
    npm install redux react-redux 
```

*Para visualizarmos as informações do estado, devemos instalar a extensão `Redux Devtools`:*
```bash
    npm install --save @redux-devtools/extension
```

*Iniciaremos com um componente*

- Inicialmente crie uma pasta chamada `componentes` dentro de seu *`src`*;
- Adicione um arquivo chamado `Counter.jsx` dentro de sua pasta *`componentes`* (você pode escolher o nome que desejar, neste caso será `Counter` devido à função ser um contador);
- Insira o código abaixo: 

```JavaScript
import React from 'react'

const Counter = () => {
  return (
    <div>
      <p>0</p>
      <button>Adicionar 1</button>
    </div>
  )
}

export default Counter;
```

- Delete o conteúdo de `App.js`, para que renderize somente o componente criado. 
- Insira o código abaixo: 

```JavaScript
import React from "react";
import Counter from "./components/Counter";

const App = () => {
  return (
    <>
      <Counter />
    </>
  );
}

export default App;
```


## Configurando o Redux
*Para configurar o *Redux*, vamos começar pelo store:*

- Crie uma pasta chamada `store` dentro de seu ***`src`***;
- Adicione um arquivo chamado `index.js` dentro de sua pasta ***`store`***;
- Para nossos exemplo, insira o código descrito abaixo em `store.js`:

```javaScript
import { createStore } from "redux";

const store = createStore(state => state);

export default store;

```

- Logo em seguida, devemos "unir" nossa aplicação com o Provider, em nosso arquivo `index.js`. Devemos fazer a importação correta, como segue abaixo o exemplo:

```JavaScript
import { Provider } from 'react-redux'
import store from './store'

const stores = store()
```


O arquivo `index.js` ficará com esta configuração: 

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```
obs: Desta forma, haverá a possibilidade de acesso ao estado global em toda a aplicação.

*Continuando, agora chegou a hora de criarmos o ´Reducer´.*
- Crie uma nova pasta chamada `reducer` dentro de sua pasta ***`redux`***;
- Adicione um arquivo chamado `couterReducer.js` dentro de sua pasta ***`reducer`***;
- Insira o código descrito abaixo em `couterReducer.js`:

```JavaScript
const INITIAL_STATE = {
  counter: 0
}

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return {
        ...state,
        counter: state.counter + 1
      }
    case "DECREMENT_COUNTER":
      return {
        ...state,
        counter: state.counter - 1
  }
    default:
      return state;

}
}

export default counterReducer;
```
obs: O reducer é a função que permite alterar o estado.

- Adicione seu *reducer* no arquivo `index.js`, dentro da pasta `store`;
- Seu código ficará com esta estrutura:

```JavaScript
import { createStore } from "redux";

import counterReducer from "../reducer/counterReducer";

const store = createStore(counterReducer);

export default store;
```

*Logo em seguida, devemos criar nossa Action:*

- Crie uma nova pasta chamada `actions` dentro de sua pasta ***`store`***;
- Adicione um arquivo chamado `index.js` dentro de sua pasta ***`actions`***;
- Insira o código descrito abaixo em `index.js`, dentro da pasta ***`actions`***:

```JavaScript
export const incrementCounter = () => (
  {
    type: "INCREMENT_COUNTER"
  }
);

export const decrementCounter = () => (
  {
    type: "DECREMENT_COUNTER"
  }
);
```
obs: Essa é a ação que será disparada ao aumentar ou diminuir nosso contador.

*Para finalizar a configuração do Redux:*

- Em seu componente `Couter.js`, insira este código: 

```JavaScript
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "../store/actions";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  return (
    <div>
      <p
      data-testid="result"
      >{counter}</p>
      <button
        data-testid="increment-button"
        onClick={() => dispatch(incrementCounter())}
      >
        Adicionar 1
      </button>
      <button
        data-testid="decrement-button"
        onClick={() => dispatch(decrementCounter())}
      >
        Remover 1
      </button>
    </div>
  )
}

export default Counter;
```
obs: O hook `useSelector` e `useDispatch` foram usados, respectivamente, para ler a informação do estado e disparar a ação de aumentar/diminuir no contador(trazendo as actions ***incrementCounter*** e ***decrementCounter*** criada anteriormente).

Assim já está feita a integração do `React` com o `Redux`, para verificar como anda sua aplicação, abra seu terminal e coloque `npm start` para averiguar o que foi feito até então! 

Agora por fim, vamos finalmente iniciar nossos testes!


## Testes em Redux
Com tudo isto em mãos, agora é hora de começarmos nossos testes! 

- Inicialmente, crie uma pasta chamada `testes` dentro de seu ***`src`***;
- Dentro da pasta `testes`, coloque o arquivo chamado ***`App.test.js`***;


Para testar o *React-Redux* é necessário importar uma função auxiliar, para renderizar o componente, pois este será usado multiplas vezes! Então vamos criá-la! 

- Dentro da pasta `testes`, crie uma nova pasta chamada ***`helpers`***;
- Dentro da pasta `helpers`, crie um arquivo chamado ***`renderWithRedux.js`***;
- No arquivo ***`renderWithRedux.js`***, escreva este código:

```JavaScript
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';

const renderWithRedux = (component) => {
  return render(<Provider store={store}>{component}</Provider>);
}

export default renderWithRedux;

```
obs: A função auxiliar *renderWithRedux* recebe como parâmetros o componente a renderizar, estado inicial e armazenamento. Se não houver store, ele criará um novo, se não recebeu um estado inicial ou um store, retornará um objeto vazio.

Agora que já sabe como configurar o *Redux* e seus testes, é hora de praticarmos um pouco nossos aprendizados!! 
## Vamos praticar!

*Dica:
Ao decorrer dos exercícios, para verificar a cobertura de seus testes, é necessário a instalação de uma dependência.
 Instale em seu terminal: 

```bash
npm test -- --coverage
```
Boa sorte! 
## Exercício 01
Agora que já sabe como  iniciar neste mundo de testes, o primeiro exercício será simples, a partir do código de modelo, teste se ***`App.js`*** possui um elemento com o 'data-test-id =result'


## Exercício 02

Para seu segundo exercício, faça os testes dar 50% de cobertura em `App.js`.


- Verificar se o App possui um resultado com data-test-id = result;
- Verificar se o App possui um botão com data-test-id = increment;
- Verificar se o App possui um botão com data-test-id = decrement;
- Verificar se a aplicação possio o texto Adicionar 1;
- Verificar se a aplicação possio o texto Removerr 1;
## Exercício Bônus

Para seu exercício bônus, você deverá aplicar testes para que chegue a 100% de cobertura em `App.js`.

O que deverá ser testado:

- Verificar se o App possui um resultado com data-test-id = result;
- Verificar se o App possui um botão com data-test-id = increment;
- Verificar se o App possui um botão com data-test-id = decrement;
- Verificar se a aplicação possio o texto Adicionar 1;
- Verificar se a aplicação possio o texto Removerr 1;
- Verificar se ao clicar no botão, o valor do contador é incrementado em 1;
- Verificar se ao clicar no botão, o valor do contador é decrementado em 1;
