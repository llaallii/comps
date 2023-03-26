import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "hdlsajd",
      label: "can i use react on a project?",
      content:
        "you can use react on any project you want.you can use react on any project you want.you can use react on any project you want.you can use react on any project you want.",
    },
    {
      id: "dakhjsd",
      label: "can i use react on a project?",
      content:
        "you can use react on any project you want.you can use react on any project you want.you can use react on any project you want.you can use react on any project you want.",
    },
    {
      id: "askhdb",
      label: "can i use react on a project?",
      content:
        "you can use react on any project you want.you can use react on any project you want.you can use react on any project you want.you can use react on any project you want.",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
