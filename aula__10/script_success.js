function iniciar_success () {

    class Aparelho {
        constructor(){
            this.distribuidora = "Amazon";
            this.montadora =     "Samsung";
            this.tipo =          "Tecnológico"
        }
    }

    
    class S7 extends Aparelho {
        constructor(){
            super()
            this.codigo = 1;
        }
    }

    
    const s7 = new S7() ; 

    
    console.log("A montadora do S7 é a " , s7.montadora , 
                " e a distribuidora é a" , s7.distribuidora , 
                " o código identificador é " , s7.codigo)
}