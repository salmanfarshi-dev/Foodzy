import React from "react";
import PageBreadcrumb from "../Components/PageBreadcrumb";
import { Accordion, AccordionItem } from "@heroui/react";

function Faq() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <section>
      <PageBreadcrumb title="Faq" />
      <div className="max-w-360 mx-auto px-4 md:px-6 lg:px-0 py-4 md:py-16 lg:py-20">
        <div className="flex flex-col md:flex-row gap-5 items-start justify-between">
          <div className=" md:w-[43%] overflow-hidden">
            <img src="/aboutbanner.png" alt="" className="h-full w-full" />
          </div>

          <div className="md:w-[50%]">
            <Accordion variant="splitted">
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="What Facilities Does Your Hotel Have?"
                className="bg-transparent shadow border border-border1 text-xs md:text-sm text-[#7A7A7A] tracking-[0.48px] leading-[24.5px]"
                classNames={{
                  title: "text-sm md:text-[16px] font-semibold",
                  content: "",
                }}
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 1"
                title="How Do I Book A Room For My Vacation?"
                className="bg-transparent shadow border border-border1 text-xs md:text-sm text-[#7A7A7A] tracking-[0.48px] leading-[24.5px]"
                classNames={{
                  title: "text-sm md:text-[16px] font-semibold",
                }}
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 1"
                title="How We are best among others?"
                className="bg-transparent shadow border border-border1 text-xs md:text-sm text-[#7A7A7A] tracking-[0.48px] leading-[24.5px]"
                classNames={{
                  title: "text-sm md:text-[16px] font-semibold",
                }}
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 1"
                title="Is There Any Fitness Center In Your Hotel?"
                className="bg-transparent shadow border border-border1 text-xs md:text-sm text-[#7A7A7A] tracking-[0.48px] leading-[24.5px]"
                classNames={{
                  title: "text-sm md:text-[16px] font-semibold",
                }}
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Accordion 1"
                title="What Type Of Room Service Do You Offer?"
                className="bg-transparent shadow border border-border1 text-xs md:text-sm text-[#7A7A7A] tracking-[0.48px] leading-[24.5px]"
                classNames={{
                  title: "text-sm md:text-[16px] font-semibold",
                }}
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="6"
                aria-label="Accordion 1"
                title="What Facilities Does Your Hotel Have?"
                className="bg-transparent shadow border border-border1 text-xs md:text-sm text-[#7A7A7A] tracking-[0.48px] leading-[24.5px]"
                classNames={{
                  title: "text-sm md:text-[16px] font-semibold",
                }}
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="7"
                aria-label="Accordion 1"
                title="What Facilities Does Your Hotel Have?"
                className="bg-transparent shadow border border-border1 text-xs md:text-sm text-[#7A7A7A] tracking-[0.48px] leading-[24.5px]"
                classNames={{
                  title: "text-sm md:text-[16px] font-semibold",
                }}
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="8"
                aria-label="Accordion 1"
                title="How Do I Book A Room For My Vacation?"
                className="bg-transparent shadow border border-border1 text-xs md:text-sm text-[#7A7A7A] tracking-[0.48px] leading-[24.5px]"
                classNames={{
                  title: "text-sm md:text-[16px] font-semibold",
                }}
              >
                {defaultContent}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
