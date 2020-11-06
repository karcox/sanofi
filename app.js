vacantes =0;
proyectos=0;
empleados=0;
nacionalidades=0;

vacantesInterval = setInterval(       
    function(){          
        if (vacantes < 200){
            vacantes +=1;
            document.querySelector("#vacantes").innerText = vacantes;        
        }else {
            clearInterval(vacantesInterval);        }
          
    }, 10);

    proyectosInterval = setInterval(       
        function(){          
            if (proyectos < 70){
                proyectos +=1;
                document.querySelector("#proyectos").innerText = proyectos;        
            }else {
                clearInterval(proyectosInterval);        }
        }, 10);


        empleadosInterval = setInterval(       
            function(){          
                if (empleados < 100000){
                    empleados +=100;
                    document.querySelector("#empleados").innerText = empleados;        
                }else {
                    clearInterval(empleadosInterval);        }
                  
            }, 10);


            nacionalidadesInterval = setInterval(       
                function(){          
                    if (nacionalidades < 145){
                        nacionalidades +=1;
                        document.querySelector("#nacionalidades").innerText = nacionalidades;        
                    }else {
                        clearInterval(nacionalidadesInterval);        }
                      
                }, 10);