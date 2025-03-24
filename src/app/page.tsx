import HomePage from "./home/page";
import NavBar from "./components/NavBar";
import SchedulePage from "./schedule/page";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <SchedulePage />
    </div>
  );
}
