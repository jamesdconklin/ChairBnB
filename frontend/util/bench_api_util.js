export const fetchBenches = (success, error) => {
  success = success || console.log;
  error = error || console.log;
  $.ajax({
    url: "/api/benches",
    method: 'GET',
    success
  });
};
