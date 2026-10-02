import react,{ useState } from "react";
import NavBar from "./component/NavBar"

function Movie(){
  const [category, setCategory] = useState(false);

  return(
    <main className="bg-gray-900 text-white">
      <NavBar/>
      <button onClick={() => setCategory(prev => !prev)}>
        {/* {category === "Action" ? (
  <h2>Action Movies</h2> 
) : ' Latest'} */}john
      </button>
      
    {category  && 
  <h2>Action Movies</h2> 
}
      
    </main>

  )
}

// function Movie() {
//   const [showAction, setShowAction] = useState(false);

//   return (
//     <main className="bg-gray-900 text-white">
//       <NavBar />
//       <button onClick={() => setShowAction(prev => !prev)}>
//         Toggle Action
//       </button>

//       {showAction && <h2>Action Movies</h2>}
//     </main>
//   );
// }

export default Movie