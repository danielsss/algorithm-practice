/**
 * Example: @after('clean')
 * @param { String} hook
 * @constructor
 */
export const After = function (hook: string) {
  return function(target, key, descriptor: PropertyDescriptor): PropertyDescriptor {
    if (!hook) {
      throw new Error('the hook key name is required');
    }

    const after = Object.getOwnPropertyDescriptor(target, hook)
    const method = descriptor.value;
    descriptor.value = function (...arg) {
      const values = method.apply(this, arg);
      after.value.apply(this);
      return values;
    }
    return descriptor;
  };
}