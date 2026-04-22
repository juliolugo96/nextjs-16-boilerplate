interface IconFlyweight {
  name: string;
  path: string;
}

const iconCache = new Map<string, IconFlyweight>();

export const iconFlyweightFactory = {
  get(name: string, path: string) {
    const existing = iconCache.get(name);

    if (existing) {
      return existing;
    }

    const icon = { name, path };
    iconCache.set(name, icon);

    return icon;
  },
  count() {
    return iconCache.size;
  },
};
