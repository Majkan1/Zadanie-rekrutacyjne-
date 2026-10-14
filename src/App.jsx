import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Download from "./components/Download/Download";
export default function App() {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Features/>
        <Download/>
      </main>
    </>
  );
}
