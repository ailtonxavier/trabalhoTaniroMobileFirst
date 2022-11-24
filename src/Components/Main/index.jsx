import { AreaMain } from "./styled";
import { Card01, Card02, Card03, Card04, Card05, Card01_aside, Card02_aside, Card03_aside, Card04_aside  }  from "./cards/Cards";

export default () => {
  return(
    <AreaMain>
      <main>
        <section className="container">
          <article className="subcontainer">
            <Card01 />
            <Card02 />
            <Card03 />
            <Card04 />
            <Card05 />
          </article>
          <aside className="aside">
            <article id="ultimas">
            <h2 className="h2_main">Ultimas</h2>
            <Card01_aside />
            <Card02_aside />
            <Card03_aside />
            <Card04_aside />
            </article>
          </aside>
        </section>
      </main>
    </AreaMain>
  );
}