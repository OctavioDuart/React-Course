function iniciar () {

    // Vamos declarar uma classe PAI
    class Aparelho {
        constructor(){
            this.distribuidora = "Amazon";
            this.montadora =     "Samsung";
            this.tipo =          "Tecnológico"
        }
    }

    // Vamos Criar Uma Herança 
    class S7 extends Aparelho {

    }

    // Instanciamos a herança
    const s7 = new S7() ; 

    //O código abaixo funciona perfeitamente
    console.log("A montadora do S7 é a " , s7.montadora , " e a distribuidora é a" , s7.distribuidora)
}





