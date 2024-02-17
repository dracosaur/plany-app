import S from './styles'

import { IMenuLayout } from '@/components/Menu/data'

export const Menu = ({ data }: IMenuLayout ) => (
  <S.Container id={`Menu`}>
    <S.Text>{`Menu`}</S.Text>
  </S.Container>
)