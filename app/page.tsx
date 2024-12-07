//Components
import PageHeading from "@/components/PageHeading";
import ListItems from "@/components/ListItems";

export const metadata = {
  title: "Testing",
};

export default function Page() {
  return (
    <>
      <PageHeading
        mainHeading="Principal testing page"
        paragraph="Principal test page for next.js"
        headingLevel={1}
      />
      <PageHeading
        mainHeading="Secondary testing page"
        paragraph="Secondary test page for next.js"
        headingLevel={2}
      />

      <ListItems items={["Name", "Surname", "Pack"]} />

      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Name" />
        </div>
        <div>
          <label htmlFor="surname">Surname</label>
          <input id="surname" type="text" placeholder="Surname" />
        </div>
        <div>
          <label htmlFor="packy">Pack</label>
          <input id="packy" type="text" defaultValue="Premium" />
        </div>
        <button data-testid="submit-button">Submit</button>
      </form>
    </>
  );
}
