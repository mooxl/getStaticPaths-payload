import { CollectionConfig } from "payload/types";
import formatSlug from "../utilities/formatSlug";

export const News: CollectionConfig = {
  slug: "news",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: (): boolean => true, // Everyone can read Pages
  },
  fields: [
    {
      name: "title",
      label: "Page Title",
      type: "text",
      required: true,
    },
    {
      name: "text",
      type: "text",
      required: true,
    },
  ],
};

export default News;
