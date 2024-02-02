import type { NextPage } from "next";
import NameLink from "@azure-fundamentals/components/NameLink";

const Home: NextPage = () => {
  return (
    <div className="mx-auto w-5/6 sm:w-2/3 lg:w-2/3 xl:w-2/4 text-center">
      <h2 className="text-white text-5xl text-leading font-bold uppercase mt-14">
        Welcome!
      </h2>
      <p className="text-white text-lg mt-4 mb-14 px-5 leading-6">
        Select a Microsoft Azure exam from the list bellow.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:mx-16">
        <NameLink
          href="/modes"
          heading="MICROSOFT AZURE AZ-900"
          paragraph="Microsoft Azure Fundamentals"
          wrapperClassNames="hover:bg-[#C7D2E2]"
          headingClassNames="group-hover:from-[#fff] group-hover:to-[#fff]"
        />
        <NameLink
          href="/practice"
          heading="MICROSOFT AZURE AI-900"
          paragraph="Microsoft Azure AI Fundamentals"
          wrapperClassNames="hover:bg-[#C7D2E2]"
          headingClassNames="group-hover:from-[#fff] group-hover:to-[#fff]"
        />
        <NameLink
          href="/practice"
          heading="MICROSOFT AZURE AZ-900"
          paragraph="Microsoft Azure Fundamentals"
          wrapperClassNames="hover:bg-[#C7D2E2]"
          headingClassNames="group-hover:from-[#fff] group-hover:to-[#fff]"
        />
        <NameLink
          href="/practice"
          heading="MICROSOFT AZURE AZ-900"
          paragraph="Microsoft Azure Fundamentals"
          wrapperClassNames="hover:bg-[#C7D2E2]"
          headingClassNames="group-hover:from-[#fff] group-hover:to-[#fff]"
        />
      </div>
    </div>
  );
};

export default Home;
