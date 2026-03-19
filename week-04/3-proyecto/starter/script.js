// ============================================
// SECCION 1: Datos del dominio
// ============================================
const DOMAIN_NAME = "Empresa de Traduccion Profesional";

const rawEntityName = "  Global Text ";

const entityCategory = "Servicios linguisticos";

const entityCode = "TRD-001";

const entityDescription = "Servicio de traduccion profesional para documentos empresariales y legales.";

const mainValue = 120_000;

const isActive = true;


// ============================================
// SECCION 2: Transformaciones de string
// ============================================

// Quita los espacios
const entityName = rawEntityName.trim();

// Convertir a mayusculas
const entityNameUpper = entityName.toUpperCase();

// Convertir a minusculas
const entityNameLower = entityName.toLowerCase();

// Extraer prefijo
const codePrefix = entityCode.slice(0, 3);


// ============================================
// SECCION 3: Validaciones con busqueda
// ============================================

// Valida el prefijo
const hasValidPrefix = entityCode.startsWith(codePrefix);

// Verifica que este la palabra "TRADUCCION"
const descriptionIsRelevant = entityDescription.includes("traduccion");

// Validar en que acaba
const hasValidSuffix = entityCode.endsWith("001");


// ============================================
// SECCION 4: Generacion de la ficha principal
// ============================================

const separator = "=".repeat(45);
const subSeparator = "-".repeat(45);

// Tarjeta
const mainCard = `
${separator}
  ${DOMAIN_NAME.toUpperCase()} — FICHA DE ENTIDAD
${separator}
Nombre:      ${entityNameUpper}
Categoria:   ${entityCategory}
Codigo:      ${entityCode}
Prefijo:     ${codePrefix}
Valor:       ${mainValue}
Estado:      ${isActive ? "Activo" : "Inactivo"}

${subSeparator}
Descripción:
${entityDescription}
${separator}
`;

console.log(mainCard);


// ============================================
// SECCION 5: Validaciones
// ============================================

console.log("--- Validaciones ---");
console.log(`Codigo empieza con '${codePrefix}'?: ${hasValidPrefix}`);
console.log(`Descripcion contiene 'traduccion'?: ${descriptionIsRelevant}`);
console.log(`Codigo termina con '001'?: ${hasValidSuffix}`);
console.log("");


// ============================================
// SECCIÓN 6: Mensaje de notificacion corto
// ============================================

console.log("--- Notificacion ---");
const notification = `Servicio disponible: ${entityName} (${entityCode})`;
console.log(notification);
console.log("");