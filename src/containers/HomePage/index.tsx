import { IHomePage } from '@/containers/HomePage/data';
import { HomePage as Layout } from './Layout';

export default function HomePage (props: IHomePage) {
  const layoutProps = {
    ...props,
  }
  
  return <Layout {...layoutProps} />;
}