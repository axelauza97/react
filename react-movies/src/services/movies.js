export const searchMovie = async ({ search }) => {
  return fetch("https://www.omdbapi.com/?apikey=4287ad07&s=" + search)
    .then((response) => response.json())
    .then((json) => {
      //console.log(JSON.stringify(json));
      return json;
    })
    .catch((error) => {
      throw new Error("Error fetching");
    });
};
