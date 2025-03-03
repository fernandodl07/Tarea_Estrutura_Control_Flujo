/*
MENÚ DE OPCIONES: SE LE SOLICITA HACER UN PROGRAMA MULTIFUCIÓN PARA UTILIZARLO EN LA SUCURSAL DEL SUR DE LA EMPRESA "TUTTO" QUE 
SE ENCARGA DE LA VENTA DE CHOCOLATES DE DIFERENTES SABORES. SE DEBERÁN INCLUIR LAS SIGUIENTES OPCIONES.

* REGISTRO DE VENTAS: ESCRIBE UN PROGRAMA QUE PERMITA AL USUARIO INGRESAR EL PRECIO Y LA CANTIDAD DE CADA 
PRODUCTO VENDIDO Y LUEGO CALCULE EL TOTAL DE VENTAS.

* CONVERSIÓN DE DIVISAS: AL INICIAR EL PROGRAMA, 
SE DEBE ESTABLECER EL TIPO DE CAMBIO PARA CONVERTIR DE DÓLARES A QUETZALES Y DE EUROS A QUETZALES. LUEGO AL SELECCIONAR LA OPCION,
SE DEBE SOLICITAR LA MONEDA INICIAL Y EL MONTO QUE SE DESEA CONVERTIR, DEVOLVIENDO EL RESULTADO EN QUETZALES.

* CÁLCULO DE INTERÉSES: LA EMPRESA OFRECE EL SERVICIO DE RENTA DE STANDS, 
CADA UNO CUESTA Q.300.00. COBRA UN 2% DE MORA CAPITALIZABLE DIARÍAMENTE, 
LUEGO DEL 2 DIA DE RETRASO EN LA DEVOLUCIÓN. CÁLCULE EL MONTO A PAGAR SEGÚN LOS DÍAS DE RETRASO DEL CLIENTE Y LA CANTIDAD 
DE STANDS QUE SOLICITÓ.
*/

let opcion
	do {
	    opcion = prompt(`
            Escoja una opción para continuar
                1. REGISTRO DE VENTAS
                2. CONVERSIÓN DE DIVISAS
                3. CÁLCULO DE INTERÉSES
                0. Salir`);

	    switch (opcion) {
	        case `1`:
	            let total = 0
	            let continuar
	            do {
	                let precio = parseFloat(prompt("Ingrese el precio del producto: "))
	                let cantidad = parseInt(prompt("Ingrese la cantidad vendida: "))
	                total += precio * cantidad
	                console.log(`El total de las ventas es: Q.${total.toFixed(2)}`)
	                continuar = prompt("¿Desea ingresar otro producto? (si/no): ")
	            } while (continuar.toLowerCase() === 'si')
	            console.log("Regresando al menú principal")
	            break

	        case `2`:
	        	const dolarQuet = 7.8
	        	const EuroQuet = 8.02
	        	let conversion = 0


	        	let opcion2 = parseInt(prompt(`
                    Ingrese la moneda que desea ingresar:
                    1: Dolar a quezal 
                    2: Euro a quezal`
	        		))
	        	let monto

	        	if(opcion2 == 1){
	        		monto = parseFloat(prompt(`Ingrese el monto que desea convertir:`))
	        		conversion = dolarQuet * monto
	        		console.log(`El tipo de conversion es de: ${dolarQuet} y la conversion a quezales es de: ${conversion}`)
	        	}else if(opcion2 == 2){
	        		monto = parseFloat(prompt(`Ingrese el monto que desea convertir:`))
	        		conversion = EuroQuet * monto
	        		console.log(`El tipo de conversion es de: ${EuroQuet} y la conversion a quezales es de: ${conversion}`)
	        	}else{
	        		console.log(`Ingrese una opcion valida`)
	        	}
	            console.log("Regresando al menú principal")
	            break

	        case `3`:
	        	const precioStands = 300
	        	const interesDiario = 0.02;
	            let cantidad = parseInt(prompt(`Ingrese la cantidad de stands que desea alquilar`))
	            let dias = parseInt(prompt(`Ingrese la cantidad de dias que transcurrio de la entrega de los stands`))
	            let subTotal
	            let total_3
	            let interes

	            if (dias > 2) {
	            	diasMora = dias - 2
	            	subTotal = precioStands * cantidad
	            	interes = subTotal * (Math.pow((1 + interesDiario), diasMora) - 1)
	            	total_3 = subTotal + interes
	            	console.log(`El total dal que tiene que pagar con intereses es de: ${total_3.toFixed(2)}`)
	            }else{
	            	total_3 = precioStands * cantidad
	            	console.log(`El total dal que tiene que pagar es de: ${total_3}`)
	            }

	            console.log("Regresando al menú principal")
	            break
	        case `0`:
	        	console.log("Fin del programa")
	        break
	        default:
	            alert('Ingrese una opcion valida')
	        break
	    }
	} while (opcion !== `0`)
