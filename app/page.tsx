"use client";

//Components
import PageHeading from "@/components/PageHeading";
import ListItems from "@/components/ListItems";
import Counter from "./counter";
//Hooks
import { useState, useEffect } from "react";

export default function Page() {
  const [sent, setSent] = useState<boolean>(false);
  const [showFastMsg, setShowFastMsg] = useState<boolean>(false);

  useEffect(() => {
    const fastMsgTimeout = setTimeout(() => {
      setShowFastMsg(true);
    }, 1500);

    return () => clearTimeout(fastMsgTimeout);
  }, []);

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
          <label htmlFor="pack">Pack</label>
          <input id="pack" type="text" defaultValue="Premium" />
        </div>
        {sent ? (
          <button disabled>Sent</button>
        ) : (
          <button data-testid="submit-button" onClick={() => setSent(true)}>
            Submit
          </button>
        )}
        {showFastMsg && <p>Submit faster!!!</p>}
      </form>
      <Counter />
    </>
  );
}
