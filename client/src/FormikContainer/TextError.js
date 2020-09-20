import React from 'react';

import styled from 'styled-components';

const ErrorText = styled.div`
  background: #c51244 !important;
  padding: 10px !important;
  border-radius: 0 !important;
  position: relative;
  display: inline-block !important;
  box-shadow: 1px 1px 1px #aaaaaa;
  margin-top: 10px;
`;

const TextError = (props) => {
  return <ErrorText>{props.children}</ErrorText>;
};

export default React.memo(TextError);
