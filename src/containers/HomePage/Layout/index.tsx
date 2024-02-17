import { IHomePageLayout } from '@/containers/HomePage/data'
import S from './styles';
import { Header } from '@/components/Header';

export const HomePage = ({ data }: IHomePageLayout) => (
  <S.Container id={`HomePage`}>
    <Header />
  </S.Container>
)
