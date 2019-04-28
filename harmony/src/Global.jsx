


export const INTERVALO = Object.freeze(
    {

        
        'TONICA':0,
        'SEGUNDA_MENOR':1,
        'SEGUNDA_MAIOR':2,
        'SEGUNDA_AUMENTADA':3,
        'TERCA_MENOR':3,
        'TERCA_MAIOR':4,
        'QUARTA_DIMINUTA':4,
        'QUARTA':5,
        'QUARTA_AUMENTADA':6,
        'QUINTA_DIMINUTA':6,
        'QUINTA':7,
        'QUINTA_AUMENTADA':8,
        'SEXTA_MENOR':8,
        'SEXTA_MAIOR':9,
        'SETIMA_DIMINUTA':9,
        'SETIMA_MENOR':10,
        'SETIMA_MAIOR':11
        
    });



export const NOTA = Object.freeze(
    {
        "DO":{
            "SIMBOLO":"C",
            "ID":0

        },
        "DO#":{
            "SIMBOLO":"C#",
            "ID":1
        },
        "RE":{
            "SIMBOLO":"D",
            "ID":2
            
        },
        "RE#":{
            "SIMBOLO":"D#",
            "ID":3
        },
        "MI":{
            "SIMBOLO":"E",
            "ID":4
        },
        "FA":{
            "SIMBOLO":"F",
            "ID":5
        },
        "FASUS":{
            "SIMBOLO":"F#",
            "ID":6
        },
        "SOL":{
            "SIMBOLO":"G",
            "ID":7
        },
        "SOLSUS":{
            "SIMBOLO":"G#",
            "ID":8
        },
        "LA":{
            "SIMBOLO":"A",
            "ID":9
        },
        "LA#":{
            "SIMBOLO":"A#",
            "ID":10
        },
        "SI":{
            "SIMBOLO":"B",
            "ID":11
        }
    
    });

export const MODO = Object.freeze(
    {
        "JONIO":{
            "SIMBOLO":"7M",
            "ESCALA":[INTERVALO.TONICA,
                INTERVALO.SEGUNDA_MAIOR,
                INTERVALO.TERCA_MAIOR,
                INTERVALO.QUARTA,
                INTERVALO.QUINTA,
                INTERVALO.SEXTA_MAIOR,
                INTERVALO.SETIMA_MAIOR],
                "PROXIMO": "DORICO"
        },
        "DORICO":{
            "SIMBOLO":"m7",
            "ESCALA":[INTERVALO.TONICA,
                INTERVALO.SEGUNDA_MAIOR,
                INTERVALO.TERCA_MENOR,
                INTERVALO.QUARTA,
                INTERVALO.QUINTA,
                INTERVALO.SEXTA_MAIOR,
                INTERVALO.SETIMA_MENOR],
            "PROXIMO": "FRIGIO"
        },        
        "FRIGIO":{
            "SIMBOLO":"m7",
            "ESCALA":[INTERVALO.TONICA,
                INTERVALO.SEGUNDA_MENOR,
                INTERVALO.TERCA_MENOR,
                INTERVALO.QUARTA,
                INTERVALO.QUINTA,
                INTERVALO.SEXTA_MENOR,
                INTERVALO.SETIMA_MENOR],
            "PROXIMO": "LIDIO"
        }, 
        "LIDIO":{
            "SIMBOLO":"7M",
            "ESCALA":[INTERVALO.TONICA,
                INTERVALO.SEGUNDA_MAIOR,
                INTERVALO.TERCA_MAIOR,
                INTERVALO.QUARTA_AUMENTADA,
                INTERVALO.QUINTA,
                INTERVALO.SEXTA_MAIOR,
                INTERVALO.SETIMA_MAIOR],
            "PROXIMO": "MIXOLIDIO"
        }, 
        "MIXOLIDIO":{
            "SIMBOLO":"7",
            "ESCALA":[INTERVALO.TONICA,
                INTERVALO.SEGUNDA_MENOR,
                INTERVALO.TERCA_MAIOR,
                INTERVALO.QUARTA,
                INTERVALO.QUINTA,
                INTERVALO.SEXTA_MAIOR,
                INTERVALO.SETIMA_MENOR],
            "PROXIMO": "EOLIO"
        },
        "EOLIO":{
            "SIMBOLO":"m7",
            "ESCALA":[INTERVALO.TONICA,
                INTERVALO.SEGUNDA_MAIOR,
                INTERVALO.TERCA_MENOR,
                INTERVALO.QUARTA,
                INTERVALO.QUINTA,
                INTERVALO.SEXTA_MENOR,
                INTERVALO.SETIMA_MENOR],
            "PROXIMO": "LOCRIO"
        }, 
        
        "LOCRIO":{
            "SIMBOLO":"m7b5",
            "ESCALA":[INTERVALO.TONICA,
                INTERVALO.SEGUNDA_MENOR,
                INTERVALO.TERCA_MENOR,
                INTERVALO.QUARTA,
                INTERVALO.QUINTA_DIMINUTA,
                INTERVALO.SEXTA_MENOR,
                INTERVALO.SETIMA_MENOR],
            "PROXIMO": "JONIO"
        },
    
        //HARMONICA


        "EOLIO7MAIOR":{
            "SIMBOLO":"m7M",
            "ESCALA":[INTERVALO.TONICA,
                INTERVALO.SEGUNDA_MAIOR,
                INTERVALO.TERCA_MENOR,
                INTERVALO.QUARTA,
                INTERVALO.QUINTA,
                INTERVALO.SEXTA_MENOR,
                INTERVALO.SETIMA_MAIOR],
            "PROXIMO": "LOCRIO6MAIOR"
        }, 
        
        "LOCRIO6MAIOR":{
            "SIMBOLO":"m7(b5)",
            "ESCALA":[INTERVALO.TONICA,
                INTERVALO.SEGUNDA_MENOR,
                INTERVALO.TERCA_MENOR,
                INTERVALO.QUARTA,
                INTERVALO.QUINTA_DIMINUTA,
                INTERVALO.SEXTA_MAIOR,
                INTERVALO.SETIMA_MENOR],
            "PROXIMO": "JONIO5AUM"
        },
        "JONIO5AUM":{
            "SIMBOLO":"7M(5#)",
            "ESCALA":[INTERVALO.TONICA,
                INTERVALO.SEGUNDA_MAIOR,
                INTERVALO.TERCA_MAIOR,
                INTERVALO.QUARTA,
                INTERVALO.QUINTA_AUMENTADA,
                INTERVALO.SEXTA_MAIOR,
                INTERVALO.SETIMA_MAIOR],
                "PROXIMO": "DORICO4AUM"
        },
        "DORICO4AUM":{
            "SIMBOLO":"m7(4#)",
            "ESCALA":[INTERVALO.TONICA,
                INTERVALO.SEGUNDA_MAIOR,
                INTERVALO.TERCA_MENOR,
                INTERVALO.QUARTA_AUMENTADA,
                INTERVALO.QUINTA,
                INTERVALO.SEXTA_MAIOR,
                INTERVALO.SETIMA_MENOR],
            "PROXIMO": "FRIGIO3"
        },        
        "FRIGIO3":{
            "SIMBOLO":"7(13b)",
            "ESCALA":[INTERVALO.TONICA,
                INTERVALO.SEGUNDA_MENOR,
                INTERVALO.TERCA_MAIOR,
                INTERVALO.QUARTA,
                INTERVALO.QUINTA,
                INTERVALO.SEXTA_MENOR,
                INTERVALO.SETIMA_MENOR],
            "PROXIMO": "LIDIO2AUM"
        }, 
        "LIDIO2AUM":{
            "SIMBOLO":"7M(9#)",
            "ESCALA":[INTERVALO.TONICA,
                INTERVALO.SEGUNDA_AUMENTADA,
                INTERVALO.TERCA_MAIOR,
                INTERVALO.QUARTA_AUMENTADA,
                INTERVALO.QUINTA,
                INTERVALO.SEXTA_MAIOR,
                INTERVALO.SETIMA_MAIOR],
            "PROXIMO": "ALT"
        }, 
        "ALT":{
            "SIMBOLO":"°",
            "ESCALA":[INTERVALO.TONICA,
                INTERVALO.SEGUNDA_MENOR,
                INTERVALO.TERCA_MENOR,
                INTERVALO.QUARTA_DIMINUTA,
                INTERVALO.QUINTA_DIMINUTA,
                INTERVALO.SEXTA_MENOR,
                INTERVALO.SETIMA_DIMINUTA],
            "PROXIMO": "EOLIO7MAIOR"
        },



        //MELODICA

        "DORICO7MAIOR":{
            "SIMBOLO":"m7(13)",
            "ESCALA":[INTERVALO.TONICA,
                INTERVALO.SEGUNDA_MAIOR,
                INTERVALO.TERCA_MENOR,
                INTERVALO.QUARTA,
                INTERVALO.QUINTA,
                INTERVALO.SEXTA_MAIOR,
                INTERVALO.SETIMA_MAIOR],
            "PROXIMO": "FRIGIO6MAIOR"
        },
        "FRIGIO6MAIOR":{
            "SIMBOLO":"m7(9b)",
            "ESCALA":[INTERVALO.TONICA,
                INTERVALO.SEGUNDA_MENOR,
                INTERVALO.TERCA_MENOR,
                INTERVALO.QUARTA,
                INTERVALO.QUINTA,
                INTERVALO.SEXTA_MAIOR,
                INTERVALO.SETIMA_MENOR],
            "PROXIMO": "LIDIO5AUM"
        }, 
        "LIDIO5AUM":{
            "SIMBOLO":"7M(5#)",
            "ESCALA":[INTERVALO.TONICA,
                INTERVALO.SEGUNDA_MAIOR,
                INTERVALO.TERCA_MAIOR,
                INTERVALO.QUARTA_AUMENTADA,
                INTERVALO.QUINTA_AUMENTADA,
                INTERVALO.SEXTA_MAIOR,
                INTERVALO.SETIMA_MAIOR],
            "PROXIMO": "MIXOLIDIO4AUM"
        }, 
        "MIXOLIDIO4AUM":{
            "SIMBOLO":"7(4#)",
            "ESCALA":[INTERVALO.TONICA,
                INTERVALO.SEGUNDA_MAIOR,
                INTERVALO.TERCA_MAIOR,
                INTERVALO.QUARTA_AUMENTADA,
                INTERVALO.QUINTA,
                INTERVALO.SEXTA_MAIOR,
                INTERVALO.SETIMA_MENOR],
            "PROXIMO": "MIXOLIDIO6MENOR"
        },
        "MIXOLIDIO6MENOR":{
            "SIMBOLO":"7(13b)",
            "ESCALA":[INTERVALO.TONICA,
                INTERVALO.SEGUNDA_MAIOR,
                INTERVALO.TERCA_MAIOR,
                INTERVALO.QUARTA,
                INTERVALO.QUINTA,
                INTERVALO.SEXTA_MENOR,
                INTERVALO.SETIMA_MENOR],
            "PROXIMO": "LOCRIO2AUM"
        },

                
        "LOCRIO2AUM":{
            "SIMBOLO":"m7b5",
            "ESCALA":[INTERVALO.TONICA,
                INTERVALO.SEGUNDA_MAIOR,
                INTERVALO.TERCA_MENOR,
                INTERVALO.QUARTA,
                INTERVALO.QUINTA_DIMINUTA,
                INTERVALO.SEXTA_MENOR,
                INTERVALO.SETIMA_MENOR],
            "PROXIMO": "SUPERLOCRIO"
        },
                
        "SUPERLOCRIO":{
            "SIMBOLO":"m7b5",
            "ESCALA":[INTERVALO.TONICA,
                INTERVALO.SEGUNDA_MENOR,
                INTERVALO.TERCA_MENOR,
                INTERVALO.QUARTA_DIMINUTA,
                INTERVALO.QUINTA_DIMINUTA,
                INTERVALO.SEXTA_MENOR,
                INTERVALO.SETIMA_MENOR],
            "PROXIMO": "DORICO7MAIOR"
        }



       

                
       
    });


   export const getIntervalo = (notaIndice, intervalo)=>{

         var sum = notaIndice + intervalo;
        var resto=  sum % 12;
         if (resto >= 0) {
             return resto;
         }else{
             return 12 + resto;
         }
    
    }

    export const getNotaById = (id)=>{

        
         for (var N in NOTA) {
             if(NOTA[N].ID === id){
                 return NOTA[N];
             }
          }
   
          return null;

    }

    export const getNotaByIntervalo = (nota, intervalo)=>{

        var resultId = getIntervalo(nota.ID, intervalo);
        return getNotaById(resultId);
    }