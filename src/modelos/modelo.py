import random

# Cadastrar participantes e números escolhidos
lista = {
    'Fernando': 13,
    'Ana': 10,
    'Alexandre': 15,
    'Mara': 17,
    'Davi': 43,
    'Cindy': 2,
    'Rocy': 42,
    'Leo': 56,
    'Juju': 11,
    'Hermany': 7,
    'Victor': 2,
    'Sandra': 53,
    'Thiago': 41,
    'Aline': 16,
    'Baida': 34,
    'Nonato': 12,
    'Fred': 4,
    'Luza': 6,
    'Daniel': 21,
    'Rafaela': 7,
    'Dany': 9,
    'Eduardo': 48,
    'Gretchen': 3,
    'Danilo': 3,
    'Patrícia': 8,
    'Di': 49,
    'Kelen': 22,
    'Sara': 35,
    'Mario': 20,
    'Mariana': 37,
    'Ricardo': 13,
    'Julio': 14,
    'Isabela': 18,
    'Ruan': 36
}

#Criar lista com todos os valores do dicionário
numeros = lista.values()
lista_numeros = list(numeros)
# print(len(lista_numeros))
# print(lista_numeros)

# # Fazer uma lista com todos os números, sem repetição.
lista_correta = set(lista_numeros)
lista_correta = list(lista_correta)
# print(len(lista_correta))
print(lista_correta)

# Sortear 8 números aleatórios da lista
numeros_sorteados = []

for i in lista_correta:
    numeros_sorteados.append(random.sample(lista_correta, 8))

aposta = random.choice(numeros_sorteados)
aposta = sorted(aposta)
print(aposta)