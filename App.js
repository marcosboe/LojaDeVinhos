import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';
import Catalogo from './src/screens/Catalogo';
import DetalhesCarrinho from './src/screens/DetalhesCarrinho';
import Pagamento from './src/screens/Pagamento';
import Confirmacao from './src/screens/Confirmacao';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#FF9F1C' },
          headerTintColor: '#333',
          headerTitleStyle: { fontWeight: 'bold' },
          contentStyle: { backgroundColor: '#FF9F1C' }
        }}
      >
        <Stack.Screen name="Login" component={Login} options={{ title: 'MundoVino - Login' }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Criar Conta' }} />
        <Stack.Screen name="Catalogo" component={Catalogo} options={{ title: 'Nossos Pacotes' }} />
        <Stack.Screen name="DetalhesCarrinho" component={DetalhesCarrinho} options={{ title: 'Detalhes do Pacote' }} />
        <Stack.Screen name="Pagamento" component={Pagamento} options={{ title: 'Pagamento' }} />
        <Stack.Screen name="Confirmacao" component={Confirmacao} options={{ title: 'Pedido Confirmado', headerBackVisible: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
