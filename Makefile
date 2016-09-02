help:
	@echo "Por favor utilize 'make <target>' onde <target> é um dos comandos abaixo"
	@echo "  install		=> install package dependencies from package.json"
	@echo "  dev			=> rode o projeto em desenvolvimento"
	@echo "  test		=> teste todos os testes bem testados"
	@echo "  deploy		=> builde os arquivos diretamente para deploy"

install:
	npm install

dev:
	npm start

test:
	npm test

# Be sure on testing
deploy: test
	npm run start:build