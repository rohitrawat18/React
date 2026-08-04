import { useState } from "react";
import "./App.css";

function Card10() {
  return (
    <div
      className="flex flex-col rounded-xl p-4 w-[350px] mx-auto mt-10"
      style={{
        border: "0.88px solid",
        backdropFilter: "saturate(180%) blur(14px)",
        background: "#ffffff0d",
      }}
    >
      <div>
        <img
          src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
          alt="NFT"
          className="rounded-xl w-full"
        />
      </div>

      <div className="flex flex-col rounded-b-xl py-4">
        <div className="flex justify-between">
          <h1 className="font-bold">Bored Ape NFT</h1>
          <h1 className="font-bold">Price</h1>
        </div>

        <div className="flex justify-between font-mono">
          <p>#345</p>
          <p>0.01 ETH</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black p-3 text-2xl text-center">
        Tailwind Test
      </h1>

      <Card10 />
    </>
  );
}

export default App;