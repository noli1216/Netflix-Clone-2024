// import React from 'react'
// import Row from '../Row/Row';
// import requests from '../../../utils/requests';

// const RowList = () => {
//   return (
//     <>
//       <Row  title='NETFLIX ORIGINALS'
//              fetchurl = {requests.fetchNetflixOriginals}/>
//       <Row />
//       <Row />
//       <Row />
//       <Row />
//     </>
//   );
// }

// export default RowList


import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/requests";

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Kids" fetchUrl={requests.fetchKids} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Adventure" fetchUrl={requests.fetchAdventureMovies} />
    </>
  );
};

export default RowList;
