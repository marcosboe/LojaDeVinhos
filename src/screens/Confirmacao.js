import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import ButtonM from '../components/ButtonM';

export default function Confirmacao({ route, navigation }) {
  const { pacote } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconCircle}>
          <Text style={styles.iconText}>✓</Text>
        </View>
        
        <Text style={styles.title}>Assinatura Concluída!</Text>
        <Text style={styles.subtitle}>Bem-vindo(a) ao MundoVino.</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Seu Pacote</Text>
          <Text style={styles.cardText}>{pacote.nome}</Text>
          <Text style={styles.cardPrice}>{pacote.preco}</Text>
        </View>

        <Text style={styles.infoText}>
          Enviaremos as atualizações da sua primeira caixa de vinhos para o seu e-mail.
        </Text>

        <ButtonM 
          title="VOLTAR AO CATÁLOGO" 
          onPress={() => navigation.navigate('Catalogo')} 
          style={styles.homeButton}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF9F1C', // Fundo Laranja Obrigatório
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFF',
    borderWidth: 5,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  iconText: {
    fontSize: 40,
    color: '#333',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#444',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#FFF',
    width: '100%',
    padding: 20,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: '#333',
    marginBottom: 20,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
    marginTop: 10,
  },
  infoText: {
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
    marginBottom: 40,
  },
  homeButton: {
    width: '100%',
  }
});
