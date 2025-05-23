export default function Product(props) {
  const name = props.name;
  const price = props.price + 15000; 
  const desc = "This is Product Description."
  return(
    <div>
      <h3>This is Product component - {name}---{price}</h3>
      <p>
        {desc}
      </p>
    </div>
  );
}