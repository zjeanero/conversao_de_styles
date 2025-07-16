import styled from 'styled-components'

export const HeroContainer = styled.form`
  position: relative;
  height: 360px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.corPrincipal};
    content: '';
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    .form {
      height: auto;
      padding: 24px 0;
    }
  }
`

export const HeroTitle = styled.h2`
  position: relative;
  color: ${(props) => props.theme.corSecundaria};
  font-size: 48px;
  font-family: Gloock, serif;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
