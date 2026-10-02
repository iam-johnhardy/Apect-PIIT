import Card from './component/Card.jsx'
import { BatMan, SpiderCard } from './DataCard/data'

function App(){
  return(
<main className='app'>
<Card movie={SpiderCard}/>
<Card movie={BatMan}/>
</main>
  )
}
export default App