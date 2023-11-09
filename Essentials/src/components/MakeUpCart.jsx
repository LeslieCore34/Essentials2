import { useTheContext } from "../context/context";

export default function MakeUp() {
  const { api } = useTheContext();
  console.log(api);

  return (
    <div>
      <h1>Make up Name</h1>
      <p>Make up Price</p>
    </div>
  );
}
