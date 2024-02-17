import S from './styles'

import { IHeaderLayout } from '@/components/Header/data'

export const Header = ({ data }: IHeaderLayout ) => (
  <S.Container id={`Header`}>
    <S.Text>{`Header`}</S.Text>
  </S.Container >
)