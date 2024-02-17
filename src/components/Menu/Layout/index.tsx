import S from './styles'

import { IMenuLayout } from '@/components/Menu/data'

export const Menu = ({ data }: IMenuLayout ) => (
  <S.Container id={`Menu`}>
    <S.UserContainer>
      <S.UserAvatar></S.UserAvatar>
    </S.UserContainer>
    <S.MenuContent>
      <S.FilterContainer>
        <S.SelectButton id="month-select">
          <option value="1">Janeiro</option>
          <option value="2">Fevereiro</option>
          <option value="3">Março</option>
          <option value="4" selected>Abril</option>
        </S.SelectButton>
        <S.SelectButton id="year-select">
          <option value="2023">2023</option>
          <option value="2024" selected>2024</option>
        </S.SelectButton>
      </S.FilterContainer>
      <S.WelcomeContainer>
        <S.Name>Olá, <br /><small>Marcelooo</small></S.Name>
        <S.Button>Adicionar valor</S.Button>
      </S.WelcomeContainer>
    </S.MenuContent>
    <S.Footer>
      <S.BubaContainer></S.BubaContainer>
    </S.Footer>
  </S.Container>
)