import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1> 📚 goodbooks </h1>
      <p>Checkout my favorite books. Select a genre to get started </p>
      <button id="btn">javascript</button>
      <button id="btn">fiction</button>
      <button id="btn">business</button>

      <br />
      <textarea style={{ width: "50%" }}> </textarea>
      <textarea style={{ width: "50%", marginTop: "5px" }}> </textarea>
    </div>
  );
}
