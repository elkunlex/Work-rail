import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Import the missing Input component

export default function Home() {
  return (
    <div>
      <Input placeholder="Enter text" aria-label="Input Field" />
      <Button variant="primary">
        Click me
      </Button>
    </div>
  );
}