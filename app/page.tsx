import { Button } from "@nextui-org/button";

function openTab(url: string) {
  let newTab = document.createElement("a");
  newTab.href = url;
  newTab.target = "_blank";
  newTab.rel = "noopener noreferrer";
  newTab.click();
}

export default function Home() {
  function click() {
    openTab("https://test.halocoupons.com");
  }
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Button onClick={click}>openTab</Button>
    </section>
  );
}
