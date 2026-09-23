import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native';
import InputM from '../components/InputM';
import ButtonM from '../components/ButtonM';

export default function Pagamento({ route, navigation }) {
  const { pacote } = route.params;
  
  const [endereco, setEndereco] = useState('');
  const [cartao, setCartao] = useState('');
  const [validade, setValidade] = useState('');
  const [cvv, setCvv] = useState('');

  const handleFinalizar = () => {
    if (!endereco || !cartao || !validade || !cvv) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos para finalizar a assinatura.');
      return;
    }
    
    // Simular processamento e ir para a confirmação
    navigation.navigate('Confirmacao', { pacote });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Resumo</Text>
          <Text style={styles.summaryText}>{pacote.nome}</Text>
          <Text style={styles.summaryPrice}>{pacote.preco}</Text>
        </View>

        <Text style={styles.sectionTitle}>Endereço de Entrega</Text>
        <InputM 
          placeholder="Rua, Número, Bairro..." 
          value={endereco}
          onChangeText={setEndereco}
        />

        <Text style={styles.sectionTitle}>Dados do Cartão</Text>
        <InputM 
          placeholder="Número do Cartão" 
          value={cartao}
          onChangeText={setCartao}
          keyboardType="numeric"
        />
        
        <View style={styles.row}>
          <View style={styles.halfInput}>
            <InputM 
              placeholder="MM/AA" 
              value={validade}
              onChangeText={setValidade}
            />
          </View>
          <View style={styles.halfInput}>
            <InputM 
              placeholder="CVV" 
              value={cvv}
              onChangeText={setCvv}
              keyboardType="numeric"
              secureTextEntry
            />
          </View>
        </View>

        <ButtonM 
          title="CONFIRMAR ASSINATURA" 
          onPress={handleFinalizar} 
          style={styles.payButton}
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
  summaryCard: {
    backgroundColor: '#FFF',
    padding: 15,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: '#333',
    marginBottom: 25,
  },
  summaryTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  summaryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  summaryPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  payButton: {
    marginTop: 20,
  }
});
