    
                
        function generarNumero(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    
    function crearBingo() {
        let bingoArray = [];
        for (let fila = 0; fila < 5; fila++) {
            let interno = [];
            for (let columna = 0; columna < 5; columna++) {
                interno[columna] = generarNumero(1, 75);
            }
            bingoArray[fila] = interno;
        }
        return bingoArray;
    }
    
            function llenarTabla(tablaId, bingoArray) {
        const tbody = document.querySelector(`#${tablaId} tbody`);
        for (let fila = 0; fila < bingoArray.length; fila++) {
            const tr = document.createElement('tr');
            for (let columna = 0; columna < bingoArray[fila].length; columna++) {
                const td = document.createElement('td');
                td.textContent = bingoArray[fila][columna];
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
            }  


    // Función para colorear una columna específica
    function colorearColumnas(tablaId, columnas, color) {
        const tabla = document.getElementById(tablaId);
        columnas.forEach(columna => {
            for (let fila = 0; fila < 5; fila++) {
                tabla.rows[fila + 1].cells[columna].style.backgroundColor = color;
            }
        });
    }


    let bingo1 = crearBingo();
    let bingo2 = crearBingo();
    let bingo3 = crearBingo();
    let bingo5 = crearBingo();
    let bingo6 = crearBingo();
    let bingo7 = crearBingo();
    let bingo8 = crearBingo();
    let bingo9 = crearBingo();
        

    console.log(bingo1);
    console.log(bingo2);
    console.log(bingo3);
    console.log(bingo5);
    console.log(bingo6);
     console.log(bingo7);
    console.log(bingo8);
    console.log(bingo9);

  
    llenarTabla('tabla1', bingo1);
    llenarTabla('tabla2', bingo2);
    llenarTabla('tabla3', bingo3);
    llenarTabla('tabla5', bingo5);
    llenarTabla('tabla6', bingo6);
    llenarTabla('tabla7', bingo7);
    llenarTabla('tabla8', bingo8);
    llenarTabla('tabla9', bingo9);


 
    colorearColumnas('tabla5', [0,1,3,4], 'green');
    colorearColumnas('tabla6', [1], 'green');
    colorearColumnas('tabla7', [2], 'green');
    colorearColumnas('tabla8', [3], 'green');
    colorearColumnas('tabla9', [4], 'green');
    // Mostrar la X en la tabla 2
    let tabla1= document.getElementById('tabla1');
  
        for(let fila=0;fila<3;fila++){
            for(let columna=0; columna<5; columna++){
                if ( fila === columna || fila+columna  === 4) {
                    tabla1.rows[fila+1].cells[columna].style.backgroundColor = 'red';

                }
            }
        }
    
    let tabla2 = document.getElementById('tabla2');
    for (let fila = 0; fila < 5; fila++) {
        for (let columna = 0; columna < 5; columna++) {
            if (fila === columna || fila + columna === 4) {
                tabla2.rows[fila+1].cells[columna].style.backgroundColor = 'red';
            }
        }
    }


    let tabla3 = document.getElementById('tabla3');

    //
    for (let fila = 0; fila < 3; fila++) { 
        for (let columna = 0; columna < 3; columna++) {
            if (fila === columna   || fila + columna === 2 || fila + columna === 4 ) { 
              tabla3.rows[fila+1].cells[columna].style.backgroundColor = 'green'; 
            }
        }
    }
    

    for (let fila = 0; fila < 3; fila++) { 
        for (let columna = 2; columna < 5; columna++) {
            if (fila + columna === 2  || fila + columna === 4 || fila + columna === 6) { 
                tabla3.rows[fila +1].cells[columna].style.backgroundColor = 'green';
            }
        }
    }


   
    for (let fila = 2; fila < 5; fila++) { 
        for (let columna = 0; columna < 3; columna++) {
            if (fila + columna === 2  || fila + columna === 4 || fila + columna === 6) {
              tabla3.rows[fila +1].cells[columna].style.backgroundColor = 'green'; 
            }
        }
    }
