import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Image, SafeAreaView } from 'react-native';
import InputM from '../components/InputM';
import ButtonM from '../components/ButtonM';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    // Simples validação de e-mail
    if (!email.includes('@')) {
      Alert.alert('Erro', 'Por favor, insira um e-mail válido.');
      return;
    }
    
    // Sucesso, vai pro catálogo
    navigation.navigate('Catalogo');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Placeholder para logo */}
        <Text style={styles.logoText}>MundoVino</Text>
        <Text style={styles.subtitleText}>Assinatura de Vinhos para Iniciantes</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>E-mail</Text>
        <InputM 
          placeholder="Digite seu e-mail" 
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Senha</Text>
        <InputM 
          placeholder="Digite sua senha" 
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <ButtonM title="ENTRAR" onPress={handleLogin} />

        <ButtonM 
          title="Não tem conta? Cadastre-se" 
          onPress={() => navigation.navigate('Cadastro')}
          style={styles.linkButton}
          textStyle={styles.linkButtonText}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF9F1C', // Fundo Laranja Obrigatório
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitleText: {
    fontSize: 16,
    color: '#444',
    marginTop: 5,
  },
  formContainer: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '600',
    color: '#333',
  },
  linkButton: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginTop: -5,
  },
  linkButtonText: {
    color: '#333',
    textDecorationLine: 'underline',
  }
});
