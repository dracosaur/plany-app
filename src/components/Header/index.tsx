import { IHeader } from "@/components/Header/data";
import { Header as Layout } from "./Layout";

export const Header = (props: IHeader ) => {
  const layoutProps = {
    ...props,
  };

  return <Layout {...layoutProps} />;
};