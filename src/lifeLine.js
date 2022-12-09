export const life = {
  healthy: {
    name: 'Varior',
    health: 90,
  },
  wounded: {
    name: 'Mar',
    health: 27,
  },
  critical: {
    name: 'Ogr',
    health: 8,
  },
};

export default function lifeLine(damage) {
  if (damage > 50) {
    return 'healthy';
  }
  if (damage < 15) {
    return 'critical';
  }
  return 'wounded';
}
