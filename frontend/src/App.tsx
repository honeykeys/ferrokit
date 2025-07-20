import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

function App() {
  const [message, setMessage] = useState("...");

  useEffect(() => {
    fetch("http://localhost:8000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Could not reach backend"));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-100">
      <h1 className="text-3xl font-bold">Hello World 👋</h1>
      <Button variant="default">{message}</Button>
    </div>
  );
}

export default App;

