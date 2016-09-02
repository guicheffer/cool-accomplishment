# Spotippos

Resolução do teste https://github.com/VivaReal/code-challenge/blob/master/frontend.md

Coisinhas bem importantes:
-------------------------

- Utilizando **npm** _~3.8.9_
- Utilizando **Node.js** _>=5.1.1_

Setup
-----
Baixe o projeto e rode:
```
npm i
```

##### EM SEGUIDA.....

Rode-o _just like that_:
```
npm start
```

Agora acesse http://localhost:3000/ para testar a parte _front_ do Spotippos e realizar seu sonho de encontrar um belo imóvel :)

Testes
-----

Para rodar os testes:
```
npm test
```

Observações
-----------

- Optei por utilizar as seguintes tecnologias abaixo (calma, explicarei o porquê rs)

	- React.js (from facebook)
	- Redux.js (from React thing)
	- lodash
	- Babel [es6]
	- Stylus
	- Webpack
	- Karma

- Primeiramente decidi utilizar as tecnologias em JS justamente pela questão da preferência e conforto em trabalhar no dia a dia com as mesmas por mais que já tenho experienciado frameworks como Angular 1/2 e Meteor.

- React com Redux simplesmente me deixou apaixonado pela agilidade e simplicidade na hora de codar camadas _only-view_, tanto que venho brincado com o mesmo há 2 anos em outros projetos. **PORÉM** também já brinquei e participei de projetos utilizando Angular (só estou falando isso pq eu sei que o Viva Real [vocês aí] utilizam Angular! LOL)

- Stylus? AMO como é escrito...como eu disse: pura preferência;

- Webpack pq é modinha. MENTIRA: a forma de como os pacotes são modularizados e compactados em um bundle realmente me convence a largar os _task runners_ e daí aprendi bastante a maneira de como o Webpack trabalha juntamente as suas rotinas e seus loaders.

- De qualquer forma, fica a dica pra desencargo rs:

- > Minha preferência ~~política~~(técnica) é o nada aquém do mínimo ético.

- Adicionalmente, fiz os filtros workarem juntamente as firulas implantadas com parte do código desenvolvida para deixar o UX ainda mais agradável como no layout :)

Melhorias
---------
* Testes unitários
* Testes end-to-end
* Testes de UI
* Testes de stress/sobrecarga (frontend)