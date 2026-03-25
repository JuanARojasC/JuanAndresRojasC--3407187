// ============================================
// SECCIÓN 1: Datos del elemento
// ============================================

const elementName = "Servicio de Localización Empresarial Global Text";
const elementStatus = "active";
const elementValue = 200_000;
const elementType = "LocalizationService";

const elementInfo = {
  targetMarket: "Europa",
  platform: "Web",
  adaptationLevel: "Completa"
};

// ============================================
// SECCIÓN 2: Clasificación (if/else)
// ============================================

let classification;

if (elementValue >= 200_000) {
  classification = "Premium";
} else if (elementValue >= 100_000) {
  classification = "Estándar";
} else {
  classification = "Básico";
}

// ============================================
// SECCIÓN 3: Estado (ternario)
// ============================================

const statusLabel = elementStatus === "active" ? "Activo" : "Inactivo";

// ============================================
// SECCIÓN 4: Tipo (switch)
// ============================================

let typeLabel;

switch (elementType) {
  case "TranslationService":
    typeLabel = "Traducción";
    break;
  case "LocalizationService":
    typeLabel = "Localización";
    break;
  case "RevisionService":
    typeLabel = "Revisión";
    break;
  default:
    typeLabel = "Tipo desconocido";
}

// ============================================
// SECCIÓN 5: Valores por defecto (??)
// ============================================

const displayName = elementName ?? "Sin nombre";
const infoDetail = elementInfo?.platform ?? "Sin información";

// ============================================
// SECCIÓN 6: Acceso seguro (?.)
// ============================================

const location = elementInfo?.targetMarket ?? "No especificado";
const safeProperty = elementInfo?.adaptationLevel ?? "No definido";

// ============================================
// SECCIÓN 7: Salida
// ============================================

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("=".repeat(40));
console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`Ubicación: ${location}`);
console.log(`Adaptación: ${safeProperty}`);
console.log("=".repeat(40));