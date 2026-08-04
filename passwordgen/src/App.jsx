import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumber] = useState(false);
  const [charAllowed, setChar] = useState(false);
  const [password, setPassword] = useState("");

  // Password Generator
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_-+={}[]";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // Generate Password Automatically
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  // Copy Password
  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("✅ Password Copied!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 p-4">
      <div className="w-full max-w-xl rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          🔐 Password Generator
        </h1>

        {/* Password Input */}
        <div className="flex overflow-hidden rounded-xl bg-white shadow-lg">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Generated Password"
            className="flex-1 px-4 py-3 text-lg text-gray-800 outline-none"
          />

          <button
            onClick={copyPassword}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 transition duration-300"
          >
            Copy
          </button>
        </div>

        {/* Slider */}
        <div className="mt-8">
          <div className="flex justify-between text-white mb-2">
            <span>Password Length</span>
            <span>{length}</span>
          </div>

          <input
            type="range"
            min={6}
            max={30}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-blue-500 cursor-pointer"
          />
        </div>

        {/* Options */}
        <div className="flex justify-between mt-8 flex-wrap gap-4">

          <label className="flex items-center gap-2 text-white cursor-pointer">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumber((prev) => !prev)}
              className="w-5 h-5 accent-blue-500"
            />
            Numbers
          </label>

          <label className="flex items-center gap-2 text-white cursor-pointer">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setChar((prev) => !prev)}
              className="w-5 h-5 accent-pink-500"
            />
            Symbols
          </label>

        </div>

        {/* Generate Button */}
        <button
          onClick={passwordGenerator}
          className="w-full mt-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-pink-600 text-white font-bold text-lg transition-all duration-300 shadow-lg hover:scale-105"
        >
          Generate Password
        </button>

      </div>
    </div>
  );
}

export default App;