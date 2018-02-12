// Añadimos todos los paises al select con DOM

var select = document.createElement("select");
countries.forEach(function(element){
    var option = document.createElement("option");  
    var texto = document.createTextNode(element.name);
    option.appendChild(texto);
    select.appendChild(option);
});
document.getElementById("pais").appendChild(select);


// Cuando elija los campos direccion y pais aparecerá el campo de la tarjeta de crédito
 
$("input[name=direccion]").on('keyup',function() {
  if ($(this).val() != "" && document.getElementById("TC") == null) {
  var label = document.createElement("label");
  var texto = document.createTextNode("CREDIT CARD");
  label.appendChild(texto);
  var input = document.createElement("input");
  // Creamos un atributo id para que identifique en la condición si existe o no el elemento
  var att = document.createAttribute("id");
  att.value="TC";
  input.setAttributeNode(att);
  var att = document.createAttribute("type");
  att.value="text";
  input.setAttributeNode(att);
  document.getElementById("tarjeta").appendChild(label);
  document.getElementById("tarjeta").appendChild(input);
  } else if($(this).val() == ""){ 
	document.getElementById("tarjeta").innerHTML = '';
  }
});