
function Spider() {
  // const movieStyle = {
  //   backgroundColor: "red",
  //   color : 'blue',
  //   opacity: 0.5
  // }
  
  return (
    <main className="SpiderCard">
      <img src="/xample.jpeg" alt="" className="w-20 text-center"/>
      <article className="">
        <h2 className="bg-blue-200 p-30"> Spider-Man: INTO THE </h2>
        <h2>SPIDER-VERSE <span className="span">2018</span></h2>
        <h4 ><span>running time</span> 117 MINUTES</h4>
        <h4 ><span>directed by</span> BOB PERSICHETTI PETER RAMSEY  ROONEY ROTHMAN</h4>
        <h4><span>produced by</span> AVI ARAD AMY PASCAL PHIL LORD</h4>
        <h4 ><span>staring</span> SHMEEIK MOORE JAKE JOHNSON HAILEE STEN=INFELD</h4>

      </article>

    </main>

  )
}

export default Spider

// import React from "react";

// function SpiderCard({ movie }) {
//   return (
//     <main className="spider-Card">
      
//       <img
//         src={movie.image}
//         alt={movie.title}
//       />

//       <article>
//         <h2>
//           {movie.title}
//           <span className="span">
//             {movie.year}
//           </span>
//         </h2>

//         <h4>
//           <span>running time</span> {movie.runningTime}
//         </h4>

//         <h4>
//           <span>directed by</span> {movie.directedBy}
//         </h4>

//         <h4>
//           <span>produced by</span> {movie.producedBy}
//         </h4>

//         <h4>
//           <span>staring</span> {movie.starring}
//         </h4>
//       </article>

//     </main>
//   );
// }

// export default SpiderCard;
