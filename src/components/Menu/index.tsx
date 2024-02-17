import { IMenu } from "@/components/Menu/data";
import { Menu as Layout } from "./Layout";

export const Menu = (props: IMenu ) => {
  const layoutProps = {
    ...props,
  };

  return <Layout {...layoutProps} />;
};