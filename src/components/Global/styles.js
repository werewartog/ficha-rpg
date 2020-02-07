import styled from 'styled-components/native';
// import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #1f1916;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.View`
  margin-bottom: 25px;
`;

export const Title = styled.Text`
  color: #d8c203;
  font-weight: bold;
  font-size: 16px;
  margin: 0 5px;
`;

export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 17px;
`;

export const PickerView = styled.View`
  flex: 1;
  background-color: #823b38a8;
  color: #fff;
  height: 50px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
`;

export const Picker = styled.Picker`
  color: #fff;
`;
export const InputBox = styled.TextInput`
  flex: 1;
  background-color: #823b38a8;
  color: #fff;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
`;
