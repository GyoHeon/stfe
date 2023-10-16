export const token = (sender, receiver) => [sender, receiver].sort().join("_");
