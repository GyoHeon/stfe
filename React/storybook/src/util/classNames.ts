export const classNames = (classNames: string[] | string) => {
  if (typeof classNames === "string") {
    return classNames;
  }

  return classNames.map((className) => className.trim()).join(" ");
};
