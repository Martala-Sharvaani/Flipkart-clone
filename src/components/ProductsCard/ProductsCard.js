/* eslint-disable no-sequences */
import classes from './productscard.module.css'
function ProductsCard(props)
{
 
  return(
    <div classNames={classes.productscard}>
        <h2 classNames={classes.card_title}>
            {props.data.title}
        </h2>
        <h2 classNames={classes.card_title}>
            {props.data.price}
        </h2>
    </div>
  )
}

export default ProductsCard