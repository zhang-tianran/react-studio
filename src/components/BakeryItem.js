// TODO: create a component that displays a single bakery item
function BakeItem(props) {
	return (
		<div className="BakeryItem">
            <h3>{props.name}</h3>
            <img src={props.image}></img>
            <p>{props.description}</p>
            <p>${props.price}</p>
            <button onClick={() => props.setStateOfParent(props.name, props.price)}>Add to Cart</button>
        </div>
	);
}
  
export default BakeItem;