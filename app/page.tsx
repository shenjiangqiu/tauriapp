import Image from "next/image";
import InputView from "./read_file";
import Greet from "./greet";
export default function Home() {
  return (
    <main >
      <InputView />
      <Greet />
    </main>
  );
}
