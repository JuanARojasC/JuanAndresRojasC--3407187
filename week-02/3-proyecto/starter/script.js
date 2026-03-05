// ============================================
// DATOS PRINCIPALES
// ============================================

const DOMAIN_NAME = "Global Text";

const itemName = "Traducción Inglés - Español";

const itemCategory = "Servicio de traducción profesional";

const itemQuantity = 12500; // palabras del documento

const isItemAvailable = true;

const assignedTranslator = null;


// ============================================
// MOSTRAR FICHA DE DATOS
// ============================================

console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

console.log(`Nombre:        ${itemName}`);
console.log(`Categoría:     ${itemCategory}`);
console.log(`Cantidad:      ${itemQuantity}`);
console.log(`Disponible:    ${isItemAvailable}`);
console.log("");


// ============================================
// VERIFICACIÓN DE TIPOS CON typeof
// ============================================

console.log("--- Tipos de datos ---");

console.log("typeof itemName:        ", typeof itemName);
console.log("typeof itemQuantity:    ", typeof itemQuantity);
console.log("typeof isItemAvailable: ", typeof isItemAvailable);
console.log("");


// ============================================
// CONVERSIONES EXPLÍCITAS
// ============================================

console.log("--- Conversiones ---");

const quantityAsText = String(itemQuantity);
console.log("Cantidad como texto:", quantityAsText);
console.log("typeof (convertido):", typeof quantityAsText);

console.log("");


// ============================================
// VALOR NULL
// ============================================

console.log("--- Valor nulo ---");

console.log("Traductor asignado:", assignedTranslator);
console.log("typeof null:", typeof assignedTranslator);
console.log("¿Es null?:", assignedTranslator === null);
console.log("");


// ============================================
// CIERRE
// ============================================

console.log("===========================");
console.log("FIN DE FICHA");
console.log("===========================");