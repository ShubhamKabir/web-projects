export const MAX_DEPTH = 10924;

export function getDepth(progress: number) {
  return Math.round(progress * MAX_DEPTH);
}

export function formatDepth(depth: number) {
  return depth.toLocaleString("en-US").padStart(5, "0");
}

export function getPressure(depth: number) {
  return Math.round(1 + depth / 10.1);
}

export function getTemperature(depth: number) {
  if (depth < 200) {
    return 24 - depth * 0.035;
  }

  if (depth < 1000) {
    return 17 - (depth - 200) * 0.012;
  }

  if (depth < 4000) {
    return 7.4 - (depth - 1000) * 0.0012;
  }

  return 3.8 - Math.min((depth - 4000) * 0.00008, 1.8);
}

export function getZone(depth: number) {
  if (depth < 200) return "EPipelagic";
  if (depth < 1000) return "Mesopelagic";
  if (depth < 4000) return "Bathypelagic";
  if (depth < 6000) return "Abyssopelagic";
  return "Hadalpelagic";
}
