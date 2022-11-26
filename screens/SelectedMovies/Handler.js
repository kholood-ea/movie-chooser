import { useQuery } from "react-query";
import { useState, useEffect } from "react";
export default ({ route }) => {
  const [shuffeling, setShuffeling] = useState(false);
  const [movies, setMovies] = useState([]);
  const { hero } = route.params;
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(`https://www.omdbapi.com/?s=${hero.name}&apikey=737e2b80`).then(
      (res) => res.json()
    )
  );
  const shuffle = (movies) => {
    setShuffeling(true);
    let shuffeledMovies = movies;
    for (var i = shuffeledMovies?.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = shuffeledMovies[i];
      shuffeledMovies[i] = shuffeledMovies[j];
      shuffeledMovies[j] = temp;
    }
    setMovies(shuffeledMovies);
    setTimeout(() => {
      setShuffeling(false);
    }, 1000);
  };
  useEffect(() => {
    shuffle(data?.Search);
  }, [data]);

  return { shuffeling, movies, shuffle };
};
