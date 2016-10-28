const user_data = (username, password) => ({
  user: {
    username,
    password
  }
});


export const signup = (username, password) => (success, error) => {
  success = success || console.log;
  error = error || console.log;

  $.ajax({
    url: "/api/users",
    type: "POST",
    data: user_data(username, password),
    success,
    error,
  });
};

export const login = (username, password) => (success, error) => {
  success = success || console.log;
  error = error || console.log;

  $.ajax({
    url: "/api/session",
    type: "POST",
    data: user_data(username, password),
    success,
    error,
  });
};

export const logout = (success, error) => {
  success = success || console.log;
  error = error || console.log;

  $.ajax({
    url: "/api/session",
    type: "DELETE",
    success,
    error,
  });
};
