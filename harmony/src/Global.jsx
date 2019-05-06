


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

    export var ACORDE = function(tonica, modo, grau){
        this.tonica = tonica;
        this.modo = modo;
        this.grau = grau


        this.getNotasEmTercas = function(){

            console.log('GRAU '+grau);
            var notas=[];
            var offset = 48;
            var n1 = getNotaByIntervalo(tonica,modo.INTERVALOS[0]).ID + offset;
            var n2 = getNotaByIntervalo(tonica,modo.INTERVALOS[2]).ID + offset;
            var n3 = getNotaByIntervalo(tonica,modo.INTERVALOS[4]).ID + offset;
            var n4 = getNotaByIntervalo(tonica,modo.INTERVALOS[6]).ID + offset;

            if(n2 < n1) n2 += 12;
            if(n3 < n2) n3 += 12;
            if(n4 < n3) n4 += 12;

            notas.push(n1 -12);//set like bass
            notas.push(n2);
            notas.push(n3);
            notas.push(n4);

            return notas;
        }

    }

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
        "NATURAL":{
            "JONIO":{
                "SIMBOLO":"7M",
                "INTERVALOS":[INTERVALO.TONICA,
                    INTERVALO.SEGUNDA_MAIOR,
                    INTERVALO.TERCA_MAIOR,
                    INTERVALO.QUARTA,
                    INTERVALO.QUINTA,
                    INTERVALO.SEXTA_MAIOR,
                    INTERVALO.SETIMA_MAIOR],
                    'PARENT':'NATURAL',
                    "PROXIMO": 'DORICO'
            },
            "DORICO":{
                "SIMBOLO":"m7",
                "INTERVALOS":[INTERVALO.TONICA,
                    INTERVALO.SEGUNDA_MAIOR,
                    INTERVALO.TERCA_MENOR,
                    INTERVALO.QUARTA,
                    INTERVALO.QUINTA,
                    INTERVALO.SEXTA_MAIOR,
                    INTERVALO.SETIMA_MENOR],
                    'PARENT':'NATURAL',
                "PROXIMO": "FRIGIO"
            },        
            "FRIGIO":{
                "SIMBOLO":"m7",
                "INTERVALOS":[INTERVALO.TONICA,
                    INTERVALO.SEGUNDA_MENOR,
                    INTERVALO.TERCA_MENOR,
                    INTERVALO.QUARTA,
                    INTERVALO.QUINTA,
                    INTERVALO.SEXTA_MENOR,
                    INTERVALO.SETIMA_MENOR],
                    'PARENT':'NATURAL',
                "PROXIMO": "LIDIO"
            }, 
            "LIDIO":{
                "SIMBOLO":"7M",
                "INTERVALOS":[INTERVALO.TONICA,
                    INTERVALO.SEGUNDA_MAIOR,
                    INTERVALO.TERCA_MAIOR,
                    INTERVALO.QUARTA_AUMENTADA,
                    INTERVALO.QUINTA,
                    INTERVALO.SEXTA_MAIOR,
                    INTERVALO.SETIMA_MAIOR],
                    'PARENT':'NATURAL',
                "PROXIMO": "MIXOLIDIO"
            }, 
            "MIXOLIDIO":{
                "SIMBOLO":"7",
                "INTERVALOS":[INTERVALO.TONICA,
                    INTERVALO.SEGUNDA_MENOR,
                    INTERVALO.TERCA_MAIOR,
                    INTERVALO.QUARTA,
                    INTERVALO.QUINTA,
                    INTERVALO.SEXTA_MAIOR,
                    INTERVALO.SETIMA_MENOR],
                    'PARENT':'NATURAL',
                "PROXIMO": "EOLIO"
            },
            "EOLIO":{
                "SIMBOLO":"m7",
                "INTERVALOS":[INTERVALO.TONICA,
                    INTERVALO.SEGUNDA_MAIOR,
                    INTERVALO.TERCA_MENOR,
                    INTERVALO.QUARTA,
                    INTERVALO.QUINTA,
                    INTERVALO.SEXTA_MENOR,
                    INTERVALO.SETIMA_MENOR],
                    'PARENT':'NATURAL',
                "PROXIMO": "LOCRIO"
            }, 
            
            "LOCRIO":{
                "SIMBOLO":"m7b5",
                "INTERVALOS":[INTERVALO.TONICA,
                    INTERVALO.SEGUNDA_MENOR,
                    INTERVALO.TERCA_MENOR,
                    INTERVALO.QUARTA,
                    INTERVALO.QUINTA_DIMINUTA,
                    INTERVALO.SEXTA_MENOR,
                    INTERVALO.SETIMA_MENOR],
                    'PARENT':'NATURAL',
                "PROXIMO": "JONIO"
            }

        },
        "HARMONICA":{
            "EOLIO7MAIOR":{
                "SIMBOLO":"m7M",
                "INTERVALOS":[INTERVALO.TONICA,
                    INTERVALO.SEGUNDA_MAIOR,
                    INTERVALO.TERCA_MENOR,
                    INTERVALO.QUARTA,
                    INTERVALO.QUINTA,
                    INTERVALO.SEXTA_MENOR,
                    INTERVALO.SETIMA_MAIOR],
                    'PARENT':'HARMONICA',
                "PROXIMO": "LOCRIO6MAIOR"
            }, 
            
            "LOCRIO6MAIOR":{
                "SIMBOLO":"m7(b5)",
                "INTERVALOS":[INTERVALO.TONICA,
                    INTERVALO.SEGUNDA_MENOR,
                    INTERVALO.TERCA_MENOR,
                    INTERVALO.QUARTA,
                    INTERVALO.QUINTA_DIMINUTA,
                    INTERVALO.SEXTA_MAIOR,
                    INTERVALO.SETIMA_MENOR],
                    'PARENT':'HARMONICA',
                "PROXIMO": "JONIO5AUM"
            },
            "JONIO5AUM":{
                "SIMBOLO":"7M(5#)",
                "INTERVALOS":[INTERVALO.TONICA,
                    INTERVALO.SEGUNDA_MAIOR,
                    INTERVALO.TERCA_MAIOR,
                    INTERVALO.QUARTA,
                    INTERVALO.QUINTA_AUMENTADA,
                    INTERVALO.SEXTA_MAIOR,
                    INTERVALO.SETIMA_MAIOR],
                    'PARENT':'HARMONICA',
                    "PROXIMO": "DORICO4AUM"
            },
            "DORICO4AUM":{
                "SIMBOLO":"m7(4#)",
                "INTERVALOS":[INTERVALO.TONICA,
                    INTERVALO.SEGUNDA_MAIOR,
                    INTERVALO.TERCA_MENOR,
                    INTERVALO.QUARTA_AUMENTADA,
                    INTERVALO.QUINTA,
                    INTERVALO.SEXTA_MAIOR,
                    INTERVALO.SETIMA_MENOR],
                    'PARENT':'HARMONICA',
                "PROXIMO": "FRIGIO3"
            },        
            "FRIGIO3":{
                "SIMBOLO":"7(13b)",
                "INTERVALOS":[INTERVALO.TONICA,
                    INTERVALO.SEGUNDA_MENOR,
                    INTERVALO.TERCA_MAIOR,
                    INTERVALO.QUARTA,
                    INTERVALO.QUINTA,
                    INTERVALO.SEXTA_MENOR,
                    INTERVALO.SETIMA_MENOR],
                    'PARENT':'HARMONICA',
                "PROXIMO": "LIDIO2AUM"
            }, 
            "LIDIO2AUM":{
                "SIMBOLO":"7M(9#)",
                "INTERVALOS":[INTERVALO.TONICA,
                    INTERVALO.SEGUNDA_AUMENTADA,
                    INTERVALO.TERCA_MAIOR,
                    INTERVALO.QUARTA_AUMENTADA,
                    INTERVALO.QUINTA,
                    INTERVALO.SEXTA_MAIOR,
                    INTERVALO.SETIMA_MAIOR],
                    'PARENT':'HARMONICA',
                "PROXIMO": "ALT"
            }, 
            "ALT":{
                "SIMBOLO":"°",
                "INTERVALOS":[INTERVALO.TONICA,
                    INTERVALO.SEGUNDA_MENOR,
                    INTERVALO.TERCA_MENOR,
                    INTERVALO.QUARTA_DIMINUTA,
                    INTERVALO.QUINTA_DIMINUTA,
                    INTERVALO.SEXTA_MENOR,
                    INTERVALO.SETIMA_DIMINUTA],
                    'PARENT':'HARMONICA',
                "PROXIMO": "EOLIO7MAIOR"
            }
        },
        "MELODICA":{
            "DORICO7MAIOR":{
                "SIMBOLO":"m7(13)",
                "INTERVALOS":[INTERVALO.TONICA,
                    INTERVALO.SEGUNDA_MAIOR,
                    INTERVALO.TERCA_MENOR,
                    INTERVALO.QUARTA,
                    INTERVALO.QUINTA,
                    INTERVALO.SEXTA_MAIOR,
                    INTERVALO.SETIMA_MAIOR],
                    'PARENT':'MELODICA',
                "PROXIMO": "FRIGIO6MAIOR"
            },
            "FRIGIO6MAIOR":{
                "SIMBOLO":"m7(9b)",
                "INTERVALOS":[INTERVALO.TONICA,
                    INTERVALO.SEGUNDA_MENOR,
                    INTERVALO.TERCA_MENOR,
                    INTERVALO.QUARTA,
                    INTERVALO.QUINTA,
                    INTERVALO.SEXTA_MAIOR,
                    INTERVALO.SETIMA_MENOR],
                    'PARENT':'MELODICA',
                "PROXIMO": "LIDIO5AUM"
            }, 
            "LIDIO5AUM":{
                "SIMBOLO":"7M(5#)",
                "INTERVALOS":[INTERVALO.TONICA,
                    INTERVALO.SEGUNDA_MAIOR,
                    INTERVALO.TERCA_MAIOR,
                    INTERVALO.QUARTA_AUMENTADA,
                    INTERVALO.QUINTA_AUMENTADA,
                    INTERVALO.SEXTA_MAIOR,
                    INTERVALO.SETIMA_MAIOR],
                    'PARENT':'MELODICA',
                "PROXIMO": "MIXOLIDIO4AUM"
            }, 
            "MIXOLIDIO4AUM":{
                "SIMBOLO":"7(4#)",
                "INTERVALOS":[INTERVALO.TONICA,
                    INTERVALO.SEGUNDA_MAIOR,
                    INTERVALO.TERCA_MAIOR,
                    INTERVALO.QUARTA_AUMENTADA,
                    INTERVALO.QUINTA,
                    INTERVALO.SEXTA_MAIOR,
                    INTERVALO.SETIMA_MENOR],
                    'PARENT':'MELODICA',
                "PROXIMO": "MIXOLIDIO6MENOR"
            },
            "MIXOLIDIO6MENOR":{
                "SIMBOLO":"7(13b)",
                "INTERVALOS":[INTERVALO.TONICA,
                    INTERVALO.SEGUNDA_MAIOR,
                    INTERVALO.TERCA_MAIOR,
                    INTERVALO.QUARTA,
                    INTERVALO.QUINTA,
                    INTERVALO.SEXTA_MENOR,
                    INTERVALO.SETIMA_MENOR],
                    'PARENT':'MELODICA',
                "PROXIMO": "LOCRIO2AUM"
            },
    
                    
            "LOCRIO2AUM":{
                "SIMBOLO":"m7b5",
                "INTERVALOS":[INTERVALO.TONICA,
                    INTERVALO.SEGUNDA_MAIOR,
                    INTERVALO.TERCA_MENOR,
                    INTERVALO.QUARTA,
                    INTERVALO.QUINTA_DIMINUTA,
                    INTERVALO.SEXTA_MENOR,
                    INTERVALO.SETIMA_MENOR],
                    'PARENT':'MELODICA',
                "PROXIMO": "SUPERLOCRIO"
            },
                    
            "SUPERLOCRIO":{
                "SIMBOLO":"m7b5",
                "INTERVALOS":[INTERVALO.TONICA,
                    INTERVALO.SEGUNDA_MENOR,
                    INTERVALO.TERCA_MENOR,
                    INTERVALO.QUARTA_DIMINUTA,
                    INTERVALO.QUINTA_DIMINUTA,
                    INTERVALO.SEXTA_MENOR,
                    INTERVALO.SETIMA_MENOR],
                    'PARENT':'MELODICA',
                "PROXIMO": "DORICO7MAIOR"
            }
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