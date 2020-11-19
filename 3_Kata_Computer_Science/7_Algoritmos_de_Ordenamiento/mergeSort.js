/*
  Entradas:
    1) Arreglo desordenado
    
  Salida:
  1) Arreglo ordenado (de menor a mayor)


*/




const mergeSort = (unOrderedArray) => {
  return unOrderedArray;
  /*
    si el arreglo tiene 0 o 1 elementos
      retorno el arreglo, pues ya está ordenado

    obtenemos el tamaño del arreglo
      size = unOrderedArray.length
    
    obtenemos el punto medio del arreglo
      middle = truncarHaciaAbajo ( size / 2 )
    
    Dividimos el arreglo en mitades a partir del punto medio
      left = unOrderedArray.slice(0, middle);
      right = unOrderedArray.slice(middle, size);

    Dividimos los arreglos recursivamente hasta obtener la unidad o un arreglo ordenado
      orderedLeft = mergeSort(left);
      orderedRight = mergeSort(right);

    Conquistamos mezclando los arreglos ordenados (orderedLeft y orderedRight)
      orderedArray =merge(orderedLeft, orderedRight);
  
  */

}

const merge =(orderedLeft, orderedRight) => {
  /*
    Necesitamos saber dónde estamos posicionandos el arreglo izquierdo
      indexLeft
    Necesitamos saber dónde estamos posicionados en el arreglo derecho
      indexRight
    Necesitamos un arreglo auxiliar donde estaresmos instertando el nuevo orden
      auxArray

    Mientras  (indexLeft < orderedLeft.lenght && indexRight < orderedRight)
      if (orderedLeft[indexLeft] < orderedRight[indexRight])
        auxArray.push(orderedLeft[indexRight])
        leftIndex++
      else
      auxArray.push(orderedRight[indexRight])
        rigthIndex++

    Antes de devolver la mezcla (merge), debemos concatenar los posibles excedentes
      resultArray = auxArray.concat(orderedLeft.slice(indexLeft))
      

  */



}