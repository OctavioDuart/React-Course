Neste projeto estamos criando formulário de uma novo jeito mais pratico e rápido além de ser a forma mais recomendavel de desenvolver formularios :

Onde tudo começa :

components/user.js --> atribuimos ao estado do componente um objeto, nas quais 
as propriedades serão usadas para criar e formatar os campos de entrada do nosso 
formulário .  Na linha 56 passamos o estado do componente como props ao arquivo
widgets/Forms/formFields.js

widgets/Forms/formFields.js --> É neste arquivo que trabalhamos a renderização dos campos do formulário e algumas regras que atribuiremos aos nossos inputs . 
A primeira função a ser chamada é renderFields() na linha 65 . Começamos ela declarando um array e neste mesmo array atribuimos através de um for + push as props que recebemos do user.js (lembrando que estas mesmas props contem dados para formatamos nossos inputs). Ao final do for + push o array ficara assim :

formArray = [
    {
     id: name,
     settings: {
        element: 'input',
        value: '',
        label: true,
        labelText: "Seu nome",
        config: {
                  name: 'name_input',
                  type: 'text',
                  placeholder: 'Digite seu nome'
                }
     }
  }
]

Ou seja formArray receberá todos os dados da props de user.js .

Finalizado o array remos um .map a ser executado no formArray ele basicamente renderiza os dados que estão no array através da função renderTemplates, esta função cria uma variavel formTemplate com o valor nulo e outra variavel com o atributo settings que está dentro do objeto do FormArray.

Verificamos se o tipo do campo é um input 
através de um Switch Case , 

se for  
Damos uma tratativa pra ele que renderiza o input com as configurações (carregadas no formArray ) 

senão for 
formTemplate recebe null e nada é renderizado


Outro detalhe importante é COMO OS VALORES PREENCHIDOS NOS INPUTS SÃO ATUALIZADOS, estamos criando Inputs CONTROLADOS, ou seja, inputs que tem seu valor alterado pelo estado do componente

No user.js -> passamos uma função change como props na linha 57. Essa função é declarada na linha 33 ela basicamente  pega o valor do input atualiza o estado deste input através do setState 











