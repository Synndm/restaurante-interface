algoritmo "calcularPeso

var
   M, A, IMC: real
inicio
      escreva("massa (kg): ")
      leia(M)
      escreva("Altura (M): ")
      leia(A)
      IMC <- M / (A ^ 2)
      escreval("IMC: ", IMC:5:2)
      SE (IMC >= 18.5) e (IMC < 25) entao
         escreva("Parabéns! Você está no peso ideal.")
      senao
           escreva("Voê não está na faixa de peso ideal.")
      fimse
      

fimalgoritmo