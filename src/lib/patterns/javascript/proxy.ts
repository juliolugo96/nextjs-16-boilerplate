interface Profile {
  name: string;
  email: string;
}

export const createProfileProxy = (profile: Profile) =>
  new Proxy(profile, {
    get(target, property: keyof Profile) {
      return target[property];
    },
    set(target, property: keyof Profile, value: string) {
      if (property === 'email' && !value.includes('@')) {
        throw new Error('Email must be valid.');
      }

      target[property] = value;
      return true;
    },
  });
