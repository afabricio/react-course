


export const INTERVALO = Object.freeze(
    {

        
        'TONICA':0,
        'SEGUNDA_MENOR':1,
        'SEGUNDA_MAIOR':2,
        'TERCA_MENOR':3,
        'TERCA_MAIOR':4,
        'QUARTA':5,
        'QUARTA_AUMENTADA':6,
        'QUINTA_DIMINUTA':6,
        'QUINTA':7,
        'QUINTA_AUMENTADA':8,
        'SEXTA_MENOR':8,
        'SEXTA_MAIOR':9,
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
        "FA#":{
            "SIMBOLO":"F#",
            "ID":6
        },
        "SOL":{
            "SIMBOLO":"G",
            "ID":7
        },
        "SOL#":{
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

export const TIPOACORDE = Object.freeze(
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
    
        

                
        "ALT":{
            "SIMBOLO":"°"
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