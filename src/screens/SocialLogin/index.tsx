import React, { useCallback, useContext, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import LogoSvg from '../../image/google.svg'
import { SignInSocialButton } from '../../components/SignInSocialButton';
import {
  Container,
  Header,
  TetleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
  Input,
  Button,
  TextButton
} from './styles'
import { Alert, Platform } from 'react-native';
import AppContext from '../../Provider';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

export function SocialLogin() {
  const [email, SetEmail] = useState<string>()
  const [password, SetPassword] = useState<string>()
  const [loading, setLoading] = useState<boolean>(false);

  const { signInWithGoogle, userData } = useContext(AppContext)
  const {navigate} = useNavigation() as any

  useFocusEffect(useCallback(()=>{
      if(userData){
        navigate("Mapa")
      }
    
  },[]))

  async function handleSignInWithGoogle() {

    try {
      await signInWithGoogle()
    } catch (error) {
      Alert.alert("não foi possivel conect conta google")
    }
    /* setLoading(true);
     const { user, error } = await supabase.auth.signIn({
       email: email,
       password: password,
     });
     if (!error && !user) {
       setLoading(false);
       alert("Check your email for the login link!");
     }
     if (error) {
       setLoading(false);
       alert(error.message);
     }
 
     setLoading(false);
     console.log(user)*/
  }

  return (
    <Container>
      <Header>
        <TetleWrapper>
          <Title>
            Controle suas {'\n'}
            finanças de forma{'\n'}
            muito simples.
          </Title>

          <SignInTitle>
            Faça seu login com{'\n'}
            uma das contas abaixo
          </SignInTitle>
        </TetleWrapper>
      </Header>
      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            title='Entrar com Google'
            type="google"
            onPress={handleSignInWithGoogle}
          />

          {
            Platform.OS !== 'ios' && <SignInSocialButton
              title='Entrar com Apple'
              type="apple"
            />
          }

        </FooterWrapper>
      </Footer>
    </Container>
  )
}