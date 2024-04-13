const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');
console.log(miURL.hostname);// www.ejemplo.org

console.log(miURL.pathname);// /cursos/programacion

console.log(miURL.searchParams); // 'ordenar' => 'vistas', 'nivel' => '1'
// los quary son tomados como objetos, en este caso estos son los atributos y sus valores
// 'ordenar' => 'vistas', 'nivel' => '1'