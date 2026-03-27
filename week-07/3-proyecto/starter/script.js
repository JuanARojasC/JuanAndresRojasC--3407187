"use strict"; // activa el modo estricto — mejores errores

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================
const DOMAIN_NAME = "Servicios de Traducción";
const VALUE_LABEL = "precio";

const items = [
  { id: 1, name: "Traducción Legal", category: "Legal", value: 150_000, active: true },
  { id: 2, name: "Traducción Técnica", category: "Técnica", value: 180_000, active: true },
  { id: 3, name: "Localización Web", category: "Digital", value: 220_000, active: true },
  { id: 4, name: "Traducción Médica", category: "Salud", value: 200_000, active: false },
  { id: 5, name: "Subtitulación", category: "Audiovisual", value: 120_000, active: true }
];

// ============================================
// SECCIÓN 2: Función de formato
// ============================================
const formatItem = (item) =>
  `🌐 ${item.name} [${item.category}] — $${item.value}`;

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================
const calculateValue = (baseValue, factor = 1) => {
  return baseValue * factor;
};

// ============================================
// SECCIÓN 4: Función de validación
// ============================================
const isValid = (item) => {
  return item.active === true;
};

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================
const formatWithDefault = (value, label = VALUE_LABEL, currency = "COP") => {
  return `${label}: ${currency} ${value}`;
};

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

if (items.length === 0) {
  console.log("\n⚠️  No hay elementos.");
} else {
  console.log("\n📋 Listado:");
  let lineNumber = 1;
  for (const item of items) {
    console.log(`  ${lineNumber}. ${formatItem(item)}`);
    lineNumber++;
  }

  let validCount = 0;
  for (const item of items) {
    if (isValid(item)) {
      validCount++;
    }
  }
  console.log(`\n✅ Elementos válidos: ${validCount} / ${items.length}`);

  let totalValue = 0;
  for (const item of items) {
    totalValue += calculateValue(item.value ?? 0);
  }
  console.log(formatWithDefault(totalValue, `Total ${VALUE_LABEL}`));
}

console.log(`\n${"═".repeat(45)}\n`);