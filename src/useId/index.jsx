import { useId } from "react";

export default function UsingUseId() {
  const id = useId();
  const anotherId = useId();
  return (
    <div>
      {id}: {anotherId}
    </div>
  );
}
