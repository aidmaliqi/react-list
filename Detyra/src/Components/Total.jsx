import "../CSS/Style.css";

export function Total({ total, restart }) {
  return (
    <main>
      <div>
        <span>Total Value:</span>
        <span>{total}$</span>
      </div>
      <button
        onClick={(event) => {
          restart();
        }}
      >
        Restarto
      </button>
    </main>
  );
}
