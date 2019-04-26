


export const INTERVALO = Object.freeze(
    {
        "QUINTA":7
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
            "SIMBOLO":"7M"
        },
        "MIXOLIDIO":{
            "SIMBOLO":"7"
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