function parse_vars(req){
    var parametros = [];
    var valores = [];

    // Obtener la parte de la URL después del '?' si existe
    var queryString = req.url.split('?')[1];

    // Verificar si hay una queryString y dividirla en pares de clave=valor
    if(queryString){
        var pairs = queryString.split('&');

        // Iterar sobre los pares para separar las claves y valores
        pairs.forEach(function(pair){
            var keyValue = pair.split('=');
            parametros.push(keyValue[0]);
            valores.push(keyValue[1]);
        });
    }

    // Retornar un objeto con los parámetros y valores
    return {
        parametros: parametros,
        valores: valores
    };
}

module.exports.parse_vars = parse_vars;
module.exports.batman={
    identidad: 'Bruce Wayne',
    poder:'Dinero'
}