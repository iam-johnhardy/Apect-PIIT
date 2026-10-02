

function Card({movie}){
  const x = 100;
  const y = 400

   function WatchNow(even){
    // console.log('Hello world')
    // alert('Miss Me?')
    console.log(even.target)
   }
    return(
        <main className="card">
            <img src={movie.img} alt={movie.title} />
            <div className="title">
                <h1>{movie.title}</h1>
            <span>{movie.year}</span>
            <button onClick={WatchNow}>Click me👌</button>
            <button onClick={() => {alert('hello world')}}>try me</button>
            <h1>{x - y}</h1>
            </div>

            <article>
                <div><span>running time </span> <h5>{movie.runningTime}</h5></div>
                <div><span>directed by </span> <h5>{movie. directed}</h5></div>
                <div><span>produced by </span> <h5>{movie.produced}</h5></div>
                <div><span>starring </span> <h5>{movie.starting}</h5></div>

            </article>
        </main>
    )
}

export default Card