<!-- 12.1.3 Resolución de ejercicios

Número Armstrong
Generar un algoritmo que reciba un número entero y determine si este es un número Armstrong (Un número Armstrong: Aquel número que es la suma de cada uno de sus mismos dígitos elevado al número total de dígitos.
Ejemplo:
153
1³+5³+3³
1+125+27

Zapatito blanco, zapatito azul (Josephus)
Un grupo de x personas todas de la misma edad están decidiendo quién irá por las pizzas con “zapatito blanco, zapatito azul…”, sabiendo la edad de los participantes y con qué persona se empieza a contar.
¿Quién es el desafortunado que tiene que ir por las pizzas?
desafortunado(x, y) -> fn que regresa la posición del desafortunado
x -> la cantidad de personas (int)
y -> la edad de los participantes (int)
Ejemplo:
desafortunado(7, 3) => significa 7 personas en el círculo y 3 la edad de los participantes.
“zapatito blanco, zapatito azul, dime ¿cuántos años tienes tú?”
tiene 14 tiempos que hay que tomar en cuenta.
14 tiempos + 3 años = 17
cada 17 personas se sale del círculo y vuelven a contar con la persona que seguía, no olvides que si las personas son representadas por un arreglo después de la última persona del arreglo continua con la primera simulando un círculo.
[1,2,3,4,5,6,7] - inicio
[1,2,4,5,6,7] => 3 se salva
[2,4,5,6,7] => 1 se salva
[2,5,6,7] => 4 se salva
[2,6,7] => 5 se salva
[2,6] => 7 se salva
[6] => 2 se salva, 6 es el desafortunado -->
