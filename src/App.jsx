import { Body } from "./body/Body";
import { Header } from "./header/Header";

export const App = () => {
  return(
    <section className="w">
      <div className="w-full grid-cols-1 grid-flow-row px-4">
        <div className="w-full">
          <Header />
        </div>
        <div className="w-full">
          <Body />
        </div>
      </div>
    </section>
  );
}