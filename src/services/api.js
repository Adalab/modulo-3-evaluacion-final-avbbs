const dataApi = () => {
    return fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => {
            const cleanData = data.results.map((cartoon) => {
                return {
                    image: cartoon.image,
                    name: cartoon.name,
                    status: cartoon.status,
                    species: cartoon.species,
                    planet: cartoon.location.name,
                    episodes: cartoon.episode,
                    id: cartoon.id,
                };
            });
            return cleanData;
        });
};

export default dataApi;