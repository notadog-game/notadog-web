const key = "auth-token";

export const tokenService = {
  get: function() {
    return localStorage.getItem(key);
  },
  set: function(value) {
    localStorage.setItem(key, value);
  },
  remove: function() {
    localStorage.removeItem(key);
  }
};
