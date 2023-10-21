import axios from "axios";
import { useState, useEffect, useCallback } from "react";

export const useCharacter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  const getCharacters = useCallback(async () => {
    try {
      setIsLoading(true);

      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${nextPage}`
      );

      if (data.info.next) {
        setNextPage(nextPage + 1);
      }

      setCharacters((prevCharacters) => [...prevCharacters, ...data.results]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("error en getCharacters", error.message);
    }
  }, [nextPage]);

  useEffect(() => {
    getCharacters();
  }, []);

  return {
    characters,
    isLoading,
    getCharacters,
  };
};
