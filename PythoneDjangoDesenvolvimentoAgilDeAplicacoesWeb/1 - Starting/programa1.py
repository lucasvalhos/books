#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# programa1.py - Primeiro programa

"""

Importa o módulo random e sorteia
um número inteiro entre 1 e 100

"""

import random
numero = random.randint(1,100)
escolha = 0
tentativas = 0

while escolha != numero:
    escolha = input("Escolha um número entre 1 e 100:")
    tentativas += 1
    if escolha < numero:
        print "O número", escolha ,"é menor que o sorteado."
    elif escolha > numero:
        print "O número", escolha ,"é maior que o sorteado."

print "Parabéns! Você acertou com", tentativas ," tentativas"
