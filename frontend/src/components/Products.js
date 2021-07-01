import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  card: {
    width: "30%",
    flexGrow: '4',
    margin: 10
  },
  media: {
    height: 140,
  },
  row: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
  }
}));


function Products() {
  const classes = useStyles();
  const [products, setProducts] = useState([])
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    // make call to localhost:3001/products
    let getProducts = async () => {
      let response = await fetch('http://localhost:3001/products')
      let data = await response.json()
      console.log(data)
      setProducts(data)
    }
    getProducts()
  }, [])

  const addToCart = async (fruit_id) => {
    await fetch('http://localhost:3001/cart', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userQuantity: quantity, fruit: fruit_id })
    })
  }

  return (
    <>
      <h1>Products</h1>
      <div className={classes.row}>
        {products && products.map(f => {
          return (<Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={f.image_url}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {f.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Price: ${f.price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <label for="quantity">Quantity:</label>
              <input min="0" type="number" id="quantity" onChange={(event) => setQuantity(event.target.value)} />
              <Button size="small" color="primary" onClick={() => addToCart(f.fruit_id)}>
                Add to cart
              </Button>
            </CardActions>
          </Card>
          )
        })}
      </div>
    </>
  )
}

export default Products;