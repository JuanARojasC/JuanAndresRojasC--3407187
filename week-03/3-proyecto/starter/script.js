// ============================================
// SECCION 1: Datos del dominio
// ============================================

// Precios
const PRICE_PER_WORD = 120;
const PROJECT_WORDS = 8_500;

// Capacidad por dia
const DAILY_TRANSLATION_CAPACITY = 3_000;

// ============================================
// SECCION 2: Operaciones ariteticas
// ============================================

console.log("=== Operaciones basicas ===");

// Calculo del proyecto
const projectCost = PRICE_PER_WORD * PROJECT_WORDS;
console.log("Costo total del proyecto:", projectCost);

// Dias para completar el proyecto
const estimatedDays = PROJECT_WORDS / DAILY_TRANSLATION_CAPACITY;
console.log("Dias estimados:", estimatedDays);

// Restante
const remainingWords = PROJECT_WORDS - DAILY_TRANSLATION_CAPACITY;
console.log("Palabras restantes despues de 1 dia:", remainingWords);

// Potencia
const projectedWorkload = 2 ** 3;
console.log("Proyectos posibles en crecimiento:", projectedWorkload);

console.log("");

// ============================================
// SECCION 3: Asignacion compuesta
// ============================================

console.log("=== Asignación compuesta ===");

let totalRevenue = 0;

console.log("Ingreso inicial:", totalRevenue);

totalRevenue += projectCost;
console.log("Después del primer proyecto:", totalRevenue);

totalRevenue += 450_000;
console.log("Después del segundo proyecto:", totalRevenue);

totalRevenue *= 0.90;
console.log("Después de descuento corporativo:", totalRevenue);

console.log("");

// ============================================
// SECCION 4: Comparacion estricta
// ============================================

console.log("=== Validaciones con === ===");
// Requerimientos
const requiredLanguage = "Inglés";
const translatorLanguage = "Inglés";
// Verificacion
const correctTranslator = translatorLanguage === requiredLanguage;
console.log("Traductor correcto?", correctTranslator);
// Comparacion entre si es un proyecto grande si es que supera las 10000 palabras
const largeProject = PROJECT_WORDS > 10_000;
console.log("Proyecto grande?", largeProject);
console.log("");

// ============================================
// SECCION 5: Operadores logicos
// ============================================

console.log("=== Condiciones logicas ===");
// Disponibilidad 
const translatorAvailable = true;
const clientPriority = true;
// Comprobacion de disponibilidad de ambas partes
const canStartProject = translatorAvailable && clientPriority;
console.log("Puede iniciar el proyecto?", canStartProject);
// Comprueba que cumpla alguna de las dos
const urgentOrLarge = clientPriority || largeProject;
console.log("Proyecto urgente o grande?", urgentOrLarge);
// Negacion
const projectBlocked = !translatorAvailable;
console.log("Proyecto bloqueado?", projectBlocked);

console.log("");

// ============================================
// SECCION 6: Resumen final
// ============================================

console.log("=== Resumen ===");

console.log("Palabras del proyecto:", PROJECT_WORDS);
console.log("Costo total:", projectCost);
console.log("Dias estimados:", estimatedDays);
console.log("Ingreso acumulado:", totalRevenue);

console.log("");
