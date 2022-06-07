import React  from "react";
import {
  View,
  Text,
  Image,
  Alert,
  ActivityIndicator
} from 'react-native';

import { ButtonIcon } from "../../components/ButtonIcon";
import {Background} from '../../components/Background'
import { UseAuth } from "../../hooks/auth";

import IllustrationImg from '../../assets/illustration.png';
import{ styles } from './styles';
import { theme } from "../../global/styles/theme";


export function SignIn(){
  const { signIn, loading}= UseAuth();
  
  async function  handleSignIn(){
    try{
      await signIn();    
    }catch(error){
      
      Alert.alert(error as string);

    }
  }

  return(
    <Background>
      <View style={styles.container}>
          <Image 
            source={IllustrationImg }
            style={styles.image} 
            resizeMode="stretch"
          />


          <View style={styles.content}>
            <Text style={styles.title}>
              Conecte-se {'\n'}
              e orgnize suas  {'\n'}
              jogatinas {'\n'}
            </Text>
            
            <Text style={styles.subtitle}>
              Crie grupos para jogar seus games {'\n'}
              favoritos com seus amigos
              
            </Text>
            { 
              loading ?  <ActivityIndicator color={theme.colors.primary} />:
              <ButtonIcon 
                title="Entrar com Discord"
                onPress={handleSignIn}
              />
            
            }
          </View>
      </View>
    </Background>
  );
}
