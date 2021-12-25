import { createClient } from "contentful";
import type { GetServerSideProps, NextPage } from "next";
import BaseLayout from "../src/layout/BaseLayout";
import BasePage from "../src/layout/BasePage";

const Contact: NextPage = ({ data }: any) => {
  const { content } = data.fields.details;
  return (
    <BaseLayout
    //   title="Yoga and Fitness Blogs for Women"
    //   description={data.fields.name}
    >
      <BasePage className="py-10">
        <div className="space-y-10">
          <h1 className="max-w-2xl m-auto text-4xl font-extrabold text-white text-center">
            {data.fields.name}
          </h1>
          <img
            className="rounded-3xl max-w-3xl w-full m-auto"
            src={data.fields.projectImage.fields.file.url}
            alt={data.fields.projectImage.fields.title}
          />
        </div>
      </BasePage>
      <BasePage className="py-10" background="bg-dark">
        <div className="max-w-3xl m-auto p-8 overflow-hidden bg-light rounded-3xl space-y-10">
          {content.map((item: any, index: number) => {
            let value;
            if (item.nodeType === "embedded-asset-block") {
              value = item.data;
            } else {
              [{ value }] = item.content;
            }
            return (
              <div key={index}>
                {item.nodeType === "paragraph" ? (
                  <p className="text-lg m-auto text-justify font-thin text-black">
                    {value}
                  </p>
                ) : item.nodeType === "embedded-asset-block" ? (
                  <img
                    className="rounded-photo max-w-xl w-full m-auto"
                    src={value.target.fields.file.url}
                    alt={value.target.fields.file.title}
                  />
                ) : (
                  <h2 className="max-w-2xl m-auto text-2xl text-black text-center">
                    {value}
                  </h2>
                )}
              </div>
            );
          })}
        </div>
      </BasePage>
    </BaseLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let data;
  const client = createClient({
    accessToken: process.env.NEXT_DELIVERYKEY!,
    space: process.env.NEXT_SPACEID!,
  });
  const project = await client.getEntries({
    content_type: "project",
  });
  project.items.map((item: any) => {
    if (context.params?.id === item.fields.slug) {
      data = item;
    }
  });

  return {
    props: {
      data,
    },
  };
};

export default Contact;
