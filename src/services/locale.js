const key = "notadog-locale";

export const localeService = {
  get: function() {
    return localStorage.getItem(key);
  },
  set: function(value) {
    localStorage.setItem(key, value);
  },
  remove: function() {
    localStorage.removeItem(key);
  },
};
