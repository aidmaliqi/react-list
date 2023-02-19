import "../CSS/Style.css";

export function Item({ item, calculateTotal }) {
  return (
    <main>
      <div>
        <span>{item.product}</span>
        <span>{item.price}$</span>
      </div>
      <button
        onClick={() => {
          calculateTotal(item.price);
        }}
      >
        Shto{" "}
      </button>
    </main>
  );
}
