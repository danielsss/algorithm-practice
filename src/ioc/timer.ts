/**
 * Example: @Timer('test')
 * @param name
 * @constructor
 */
export const Timer = function (name: string = '') {
  return function(target, key, descriptor: PropertyDescriptor): PropertyDescriptor {
    if (!descriptor) {
      throw new Error('Descriptor is required');
    }

    const method = descriptor.value;
    descriptor.value = function (...arg) {
      const start = Date.now();
      try {
        return method.apply(this, arg);
      } finally {
        const end = Date.now();
        console.info('%s totally spent %d ms', name,end - start);
      }
    }
    return descriptor;
  };
}