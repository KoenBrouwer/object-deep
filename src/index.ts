export const objectDeep = (obj: any, path: string): any => {
  if (obj === null || obj === undefined || typeof obj === 'undefined') {
    return undefined;
  }

  if (!path || path.length === 0) {
    return obj;
  }

  if (!path.indexOf('.')) {
    return obj[path];
  }

  const pathItems = path.split('.');

  let item = obj;
  try {
    pathItems.forEach(p => {
      item = item[p];
    });
  } catch (err) {
    return undefined;
  }

  return item;
};
