import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import ButtonM from '../components/ButtonM';

export default function DetalhesCarrinho({ route, navigation }) {
  const { pacote } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.detailCard}>
          <Text style={styles.title}>{pacote.nome}</Text>
          <Text style={styles.description}>{pacote.descricao}</Text>
          
          <View style={styles.divider} />
          
          <Text style={styles.sectionTitle}>O que está incluso:</Text>
          <Text style={styles.listItem}>• 3 Garrafas selecionadas por especialistas</Text>
          <Text style={styles.listItem}>• 1 Guia de degustação para iniciantes</Text>
          <Text style={styles.listItem}>• Frete grátis na primeira entrega</Text>

          <View style={styles.divider} />

          <Text style={styles.totalText}>Total da Assinatura:</Text>
          <Text style={styles.price}>{pacote.preco}</Text>
        </View>

        <ButtonM 
          title="IR PARA O PAGAMENTO" 
          onPress={() => navigation.navigate('Pagamento', { pacote })} 
          style={styles.checkoutButton}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF9F1C', // Fundo Laranja Obrigatório
  },
  scrollContainer: {
    padding: 20,
    flexGrow: 1,
  },
  detailCard: {
    backgroundColor: '#FFF',
    padding: 20,
    borderWidth: 5,        // Regra da inicial M
    borderRadius: 5,       // Regra da inicial M
    borderColor: '#333',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  divider: {
    height: 1,
    backgroundColor: '#DDD',
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  listItem: {
    fontSize: 15,
    color: '#555',
    marginBottom: 5,
  },
  totalText: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111',
    marginTop: 5,
  },
  checkoutButton: {
    marginTop: 'auto',
  }
});
