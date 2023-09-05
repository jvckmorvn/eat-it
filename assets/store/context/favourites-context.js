import { createContext, useState } from 'react';

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {}
});

export default function FavouritesContextProvider({children}) {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  function addFavourite(id) {
    setFavouriteMealIds((prevFavIds) => [...prevFavIds, id]);
  }

  function removeFavourite(id) {
    setFavouriteMealIds((prevFavIds) => prevFavIds.filter((favId) => favId !== id));
  }

  const values = {
    ids: favouriteMealIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite
  }

  return <FavouritesContext.Provider value={values}>{children}</FavouritesContext.Provider>
}
