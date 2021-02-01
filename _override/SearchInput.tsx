import * as React from 'react';
import styled from 'styled-components';

export default function UserSearchInput() {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
      <StyledButton
          isFocused={isFocused}
          onClick={() => {
            setIsFocused(!isFocused);
          }}
      >
        Bug(unintentional scroll safari)
      </StyledButton>
  );
}
const StyledButton = styled.button`
  width: ${({ isFocused }) => (isFocused ? '600px' : '300px')};
`;
