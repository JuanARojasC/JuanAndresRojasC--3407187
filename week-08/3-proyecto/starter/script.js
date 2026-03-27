// ---- CONFIGURA TU DOMINIO ----
const DOMAIN_NAME = "Servicios de Traducción";
const VALUE_LABEL = "servicios";

// ============================================
// 1. ARRAY INICIAL — Define tu inventario
// ============================================

const items = [
  { id: 1, name: "Traducción Legal", price: 150_000, active: true, category: "Legal", language: "EN-ES" },
  { id: 2, name: "Traducción Técnica", price: 180_000, active: true, category: "Técnica", language: "EN-FR" },
  { id: 3, name: "Localización Web", price: 220_000, active: true, category: "Digital", language: "EN-PT" },
  { id: 4, name: "Traducción Médica", price: 200_000, active: false, category: "Salud", language: "EN-ES" },
  { id: 5, name: "Subtitulación", price: 120_000, active: true, category: "Audiovisual", language: "EN-IT" }
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

const addItem = (newItem) => {
  items.push(newItem);
  console.log(`Agregado: ${newItem.name}`);
};

const removeLastItem = () => {
  const removed = items.pop();
  console.log(`Eliminado: ${removed.name}`);
  return removed;
};

const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`Elemento prioritario agregado: ${priorityItem.name}`);
};

const removeByIndex = (index) => {
  const removed = items.splice(index, 1);
  console.log(`Eliminado: ${removed[0].name}`);
};

const getActiveItems = () => {
  return items.filter(item => item.active);
};

const findByName = (name) => {
  return items.find(item => item.name === name);
};

const formatItem = (item) => {
  return `[${item.id}] ${item.name} — ${item.category} — $${item.price}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

addItem({ id: 6, name: "Interpretación en Vivo", price: 250_000, active: true, category: "Eventos", language: "EN-ES" });

addPriorityItem({ id: 0, name: "Traducción Urgente", price: 300_000, active: true, category: "Express", language: "EN-ES" });

removeByIndex(2);
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

const found = findByName("Traducción Legal");
console.log(found ? formatItem(found) : "No encontrado");

const activeItems = getActiveItems();
console.log(`Activos: ${activeItems.length}`);

const snapshot = [...items, { id: 99, name: "Extra", price: 0, active: false }];

console.log("\n--- Transformación con map ---\n");

const names = items.map(item => item.name);
console.log(names);

const discounted = items.map(item => item.price * 0.9);
console.log(discounted);

console.log("\n--- Resumen final ---\n");
console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);

const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);