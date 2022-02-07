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
    http://localhost:3000/sorteio/150
 
 {
	"result": {
		"index": "150",
		"place": "",
		"dozens": {
			"1": "012",
			"2": "044",
			"3": "050",
			"4": "052",
			"5": "054",
			"6": "055"
		},
		"winners": {
			"track1": "0",
			"track2": "56",
			"track3": "5540"
		},
		"prizes": {
			"prize1": "0,00",
			"prize2": "36.378,71",
			"prize3": "367,00"
		},
		"date": "16/01/1999"
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
