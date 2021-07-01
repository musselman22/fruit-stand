import fruitStand from '../images/fruitStand.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: "25vw",
    height: "auto"
  },
  font: {
    fontFamily: "'Kaushan Script', 'cursive'",
    fontSize: "5vw",
    color: "#D95252",
    letterSpacing: "2px",
  }
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <img src={fruitStand} alt="fruitStand" className={classes.img} />
      <h1 className={classes.font}>AJ's Fruit Stand</h1>
    </div>
  )
}

export default Home;