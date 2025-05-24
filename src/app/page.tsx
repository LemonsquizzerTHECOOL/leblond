import { Collage } from "../components/collage/Collage";
import { Sidenav } from "../components/Sidenav";

export default function HomePage() {
  return (
    <main className="min-h-screen min-w-screen">
      <div className="flex flex-row h-screen">
        <Sidenav></Sidenav>

        <div className="h-full w-full overflow-y-auto">
          <Collage></Collage>
        </div>
      </div>
    </main>
  );
}