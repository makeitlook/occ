import AnimatedDiv from "@/components/AnimatedDiv/AnimatedDiv";
import PageLayout from "@/components/Layouts/PageLayout";

export default function Home() {
  return (
    <PageLayout title="Home">
      <section id="home">
        <AnimatedDiv>
          Welcome to OCC Events & Catering. We offer bespoke catering for all
          occasions, specialising in authentic Indian and Afghan menus.
        </AnimatedDiv>
      </section>
    </PageLayout>
  );
}
