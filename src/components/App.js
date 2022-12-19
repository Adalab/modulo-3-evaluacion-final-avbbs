//services
import { useEffect, useState } from "react";
import dataApi from "../services/api.js";
import { Routes, Route, matchPath, useLocation } from "react-router-dom";
import ls from "../services/localStorage";
//styles
import "../styles/App.scss";
//components
import Header from "./Header.js";
import CharacterList from "./CharacterList.js";
import Filters from "./Filters.js";
import CharacterDetail from "./CharacterDetail.js";

function App() {
  //VARIABLES ESTADO

  const [dataCartoon, setDataCartoon] = useState([]);
  const [filterSpecies, setFilterSpecies] = useState("all");
  const [filterName, setFilterName] = useState(ls.get("nameCartoon", ""));
  const [filterLocation, setFilterLocation] = useState("");
  //USEEFFECT

  useEffect(() => {
    dataApi().then((data) => {
      setDataCartoon(data);
    });
  }, []);

  //FUNCIONES HANDLE

  const handleFilterName = (value) => {
    
    setFilterName(value);
    ls.set("nameCartoon",value);
  };

  const handleFilterSpecies = (value) => {
    setFilterSpecies(value);
  };

  const handleFilterLocation = (value) => {
    setFilterLocation(value);
  };


  

  //FUNCIONES RENDERIZAR

  const cartoonsFiltered = dataCartoon

    .filter((nameCartoon) => 
      nameCartoon.name.toLowerCase().includes(filterName.toLowerCase())
    )

    .filter((cartoon) => {
      return filterSpecies === "all" ? true : cartoon.species === filterSpecies;
    })

    .filter((locationCartoon) =>
      locationCartoon.planet.toLowerCase().includes(filterLocation.toLowerCase())
    );

  //ROUTES
  const { pathname } = useLocation();
  const dataUrl = matchPath("/cartoon/:cartoonId", pathname);
  const cartoonId = dataUrl !== null ? dataUrl.params.cartoonId : null;
  const cartoonFound = dataCartoon.find((cartoon) => cartoon.id === parseInt(cartoonId));

  //RETURN HTML
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <main>
                <Filters
                  handleFilterName={handleFilterName}
                  filterName={filterName}
                  handleFilterSpecies={handleFilterSpecies}
                  handleFilterLocation={handleFilterLocation}
                />

                <CharacterList cartoons={cartoonsFiltered} />
              </main>
            </>
          }
        />
        <Route
          path="/cartoon/:cartoonId"
          element={<CharacterDetail cartoon={cartoonFound} />}
        />
      </Routes>
    </div>
  );
}

export default App;
