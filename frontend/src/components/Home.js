import fruitStand from '../images/fruitStand.png';
import { makeStyles } from '@material-ui/core/styles';

function Home() {

  return (
    <div>
      <img src={fruitStand} alt="fruitStand" height="350" width="350" />
      <h1>AJ's Fruit Stand</h1>
    </div>
  )
}

export default Home;