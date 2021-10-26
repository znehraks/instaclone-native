import styled from "styled-components/native";
export const TextInput = styled.TextInput`
  background: rgba(255, 255, 255, 0.15);
  width: 100%;
  padding: 15px 7px;
  margin-bottom: 8px;
  border-radius: 4px;
  color: white;
  margin-bottom: ${(props) => (props.lastOne ? "15" : 8)}px;
`;
