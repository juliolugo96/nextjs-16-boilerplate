interface PrototypeUser {
  name: string;
  describe: () => string;
}

const userPrototype = {
  describe(this: PrototypeUser) {
    return `${this.name} is using prototype-shared behavior.`;
  },
};

export const createPrototypeUser = (name: string): PrototypeUser =>
  Object.assign(Object.create(userPrototype), { name });
