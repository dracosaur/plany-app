import { ILoginPage } from '@/containers/LoginPage/data';
import { LoginPage as Layout } from './Layout';

export default function LoginPage (props: ILoginPage) {
  const layoutProps = {
    ...props,
  }
  
  return <Layout {...layoutProps} />;
}