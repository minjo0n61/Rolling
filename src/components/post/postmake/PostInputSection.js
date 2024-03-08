import styled from 'styled-components';
import { bold24, regular12, regular16 } from '../../../styles/fontStyle';

function PostInputSection({
  user,
  handleInput,
  handleBlur,
  inputError,
}) {
  return (
    <InputSection>
      <InputTitle>To.</InputTitle>
      <Input
        placeholder="받는 사람 이름을 입력해 주세요"
        value={user}
        onChange={handleInput}
        onBlur={handleBlur}
        error={inputError}
      />
      {inputError && <ErrorMessage>값을 입력해 주세요.</ErrorMessage>}
    </InputSection>
  );
}

const InputSection = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
`;

const InputTitle = styled.p`
  color: var(--gray-900);
  ${bold24}
`;

const Input = styled.input`
  display: flex;
  width: 720px;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--gray300);
  border: ${(props) => props.error && '2px solid var(--error)'};
  background: var(--white);

  &::placeholder {
    color: var(--gray500);
    ${regular16}
  }

  @media (max-width: 768px) {
    width: 320px;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  ${regular12}
`;

export default PostInputSection;
