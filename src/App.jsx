import { Body } from "./body/Body";
import { Header } from "./header/Header";

export const App = () => {
  return(
    <section className="w">
      <Header />
      <Body />
    </section>
  );
}