import { IHomePageLayout } from '@/containers/HomePage/data'
import S from './styles';
import { Menu } from '@/components/Menu';

export const HomePage = ({ data }: IHomePageLayout) => (
  <S.Container id={`HomePage`}>
    <Menu />
  </S.Container>
)
