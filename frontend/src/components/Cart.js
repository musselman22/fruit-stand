import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';


function Cart() {
  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(0)
  const [changed, setChanged] = useState(false)

  useEffect(() => {
    // make call to localhost:3001/products
    let getCart = async () => {
      let response = await fetch('http://localhost:3001/cart')
      let data = await response.json()
      console.log(data)
      setCart(data)
    }
    getCart()
  }, [changed])

  const addToCart = async (fruit_id) => {
    console.log(`fruit id : ${fruit_id} and quantity ${quantity}`)
    await fetch('http://localhost:3001/cart', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userQuantity: quantity, fruit: fruit_id })
    })
      .then(() => setChanged(false))

  }

  const deleteItem = async (fruit_id) => {
    await fetch('http://localhost:3001/cart', {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fruit_id: fruit_id })
    })
      .then(() => setChanged(false))
  }

  return (

    <Grid item xs={12} md={6}>
      <Typography variant="h6" className="">
        Shopping Cart
      </Typography>
      <div>
        <List>
          {cart && cart.map(item => {
            return (<ListItem key={item.fruit_id}>
              <ListItemAvatar>
                <Avatar
                  alt="fruit icon"
                  src={item.image_url}
                >
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={`$${item.price}`}
              />
              <label for="quantity">Quantity:</label>
              <input min="0" type="number" id="quantity" defaultValue={item.quantity} onChange={(event) => {
                setQuantity(event.target.value)
                setChanged(true)
              }} />
              <Button size="small" color="primary" onClick={() => addToCart(item.fruit_id)}>
                Update Item
              </Button>
              <label for="total"> Price: ${item.quantity * item.price}</label>
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon onClick={() => {
                    deleteItem(item.fruit_id)
                    setChanged(true)
                  }} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>)
          })}
        </List>
      </div>
    </Grid>
  )
}

export default Cart;

