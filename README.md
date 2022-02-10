<h1 align="center">MegaSenaScrapper</h1>
<p align="center"><strong>Scrapper em Nodejs para pegar números já sorteados da MegaSena</strong></p>

<div style="float: right">
<img src="https://img.shields.io/badge/Express-4.17.2-blue"/>
<img src="https://img.shields.io/badge/Config-3.3.7-purple"/>
<img src="https://img.shields.io/badge/Puppeter-13.1.2-orange"/>

<div>
<hr>

<h3 align="center"> 
 :construction_worker_man: in progress :warning:
</h3>
  <h3> Features</h3>

### 🎲 Rodando

```bash
# Clone este repositório
$ git clone https://github.com/RuanGoms/MegaSenaScrapper.git

# Acesse a pasta do projeto no terminal/cmd
$ cd MegaSenaScrapper

# Instale as dependências
$ npm install

# Inicie a aplicação
$ npm start
  
# O servidor inciará na porta 3000 por padrão - acesse http://localhost:3000/sorteio/:index

# Exemplo de Requisições com o Insomnia:
  GET Sorteio 150º:
    http://localhost:3000/sorteio/2000
 
 {
	"result": {
		"index": "2000",
		"place": "SÃO PAULO, SP",
		"dozens": {
			"1": "003",
			"2": "006",
			"3": "010",
			"4": "017",
			"5": "034",
			"6": "037"
		},
		"winners": {
			"track1": "17",
			"track2": "4862",
			"track3": "173428"
		},
		"prizes": {
			"prize1": "18.042.279,04",
			"prize2": "10.565,03",
			"prize3": "423,12"
		},
		"date": "31/12/2017"
	}
}

```
### Autor
---

 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/61697553?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Ruan Gomes</b></sub>

Feito por Ruan Gomes 👋🏽 Entre em contato!

[![Gmail Badge](https://img.shields.io/badge/-ruangomes.back@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:ruangomes@edu.unifor.br)](mailto:ruangomes.back@gmail.com)
