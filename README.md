# DOM

## Implementación paises

1. Creamos el elemento `select`.
2. Creamos un bucle ___forEach___ para recorrer un __JSON__ y en cada bucle creamos un elemento `option`.
3. Por cada elemento `option` le introducimos un nodo de texto con el nombre del país.
4. Por último cogemos el `div` __pais__ y le asignamos los elementos creados.

## Creación del campo de la Tarjeta de Crédito

1. Cuando escriba en el capo de la dirección comprobaremos en que estado se encuentra.
2. Si no está vacio y no se han creado los elementos del campo de la __Tarjeta de Crédito__ creamos el `label`
al que le introducimos un nodo de texto y creamos el elemento `input` al que le asignamos un atributo id
para que al comienzo de la condición comprobemos si se ha creado o no anteriormente los elementos para no 
crearlos de nuevo.
3. Si se ha creado anteriormente y el campo del input está vacio eliminamos todo lo que se encuentre dentro del
`div` de la __Tarjeta de crédito__.



