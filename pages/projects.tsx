import { createClient } from "contentful";
import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import BaseLayout from "../src/layout/BaseLayout";
import BasePage from "../src/layout/BasePage";

const Projects: NextPage = ({ company }: any) => {
  console.log(company);
  return (
    <div>
      <BaseLayout
        title="Projects"
        description="I Create Neat and Interactive Websites.I like to brainstorm new ideas and contributing Social projects"
      >
        <BasePage background="bg-dark" className="pt-20">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-light text-4xl">Projects Worked on</h1>
          </div>
        </BasePage>
        {company.items.map((data: any, index: number) => {
          return (
            <BasePage
              background="bg-dark"
              className="py-10 flex flex-col justify-center"
              key={index}
            >
              <div className="max-w-5xl">
                <h2 className="text-light text-2xl mb-5">
                  At {data.fields.name}
                </h2>
                <p className="text-light text-xl mb-5 text-justify">
                  {data.fields.description}
                </p>
              </div>
              <div className="flex flex-wrap max-w-5xl justify-center">
                {data.fields.projects.map((obj: any, index: number) => {
                  return (
                    <Link href={obj.fields.description} key={index}>
                      <a className="hover:scale-105 m-5 transition-all">
                        <img
                          src={obj.fields.file.url}
                          alt={obj.fields.title}
                          className="max-w-md rounded-3xl"
                        />
                        <p className="text-light text-xl text-center">
                          {obj.fields.title}
                        </p>
                      </a>
                    </Link>
                  );
                })}
              </div>
            </BasePage>
          );
        })}
      </BaseLayout>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const client = createClient({
    accessToken: process.env.NEXT_DELIVERYKEY!,
    space: process.env.NEXT_SPACEID!,
  });
  const company = await client.getEntries({
    content_type: "company",
  });

  return {
    props: {
      company,
    },
  };
};

export default Projects;
