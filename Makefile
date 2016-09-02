help:
	@echo "Por favor utilize 'make <target>' onde <target> é um dos comandos abaixo"
	@echo "  install		=> instala as dependências do arquivo package.json"
	@echo "  dev			=> rode o projeto em desenvolvimento"
	@echo "  test			=> teste todos os testes bem testados"
	@echo "  deploy		=> builde os arquivos diretamente para deploy"

install:
	npm install

i: install

dev:
	npm start

start: dev

test:
	npm test

# Be sure on testing
deploy: test
	npm run start:build