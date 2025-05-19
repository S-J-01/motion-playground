import Image from "next/image";
import FirstButton from "../components/FirstButton";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="flex flex-row h-screen justify-center items-center border-2 border-red-400">
     <Card/>
     <div>
      Hello from front page greeting branch
     </div>
    </div>
  );
}
