import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/formatPrice";
import Button from "./Button";

export default function ProductCard({ product }) {

  const { addItem } = useCart();

  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <strong>{formatPrice(product.price)}</strong>

      <div className="product-card-actions">

        <Link to={`/products/${product.id}`}>
          <Button>Ver detalhes</Button>
        </Link>

        <Button
          onClick={() => addItem(product, 1)}
        >
          Adicionar ao carrinho
        </Button>

      </div>

    </div>
  );
}