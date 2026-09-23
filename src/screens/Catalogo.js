import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

const PACOTES = [
  {
    id: '1',
    nome: 'Pacote Iniciante - Suaves',
    descricao: 'Seleção de 3 vinhos suaves e fáceis de beber.',
    preco: 'R$ 99,90/mês'
  },
  {
    id: '2',
    nome: 'Pacote Descoberta - Tintos',
    descricao: 'Explore 3 vinhos tintos leves e frutados.',
    preco: 'R$ 129,90/mês'
  },
  {
    id: '3',
    nome: 'Pacote Refrescante - Brancos e Rosés',
    descricao: 'Ideal para dias quentes, 3 garrafas refrescantes.',
    preco: 'R$ 119,90/mês'
  },
];

export default function Catalogo({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate('DetalhesCarrinho', { pacote: item })}
      activeOpacity={0.8}
    >
      <Text style={styles.cardTitle}>{item.nome}</Text>
      <Text style={styles.cardDesc}>{item.descricao}</Text>
      <Text style={styles.cardPrice}>{item.preco}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Escolha sua Assinatura</Text>
      <FlatList
        data={PACOTES}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF9F1C', // Fundo Laranja Obrigatório
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    margin: 20,
    textAlign: 'center',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    marginBottom: 15,
    borderWidth: 5,        // Regra da inicial M
    borderRadius: 5,       // Regra da inicial M
    borderColor: '#333',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardDesc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
  }
});
