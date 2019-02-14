import React, { useState } from 'react';
import styled from 'styled-components';

import { ClosedCaret, OpenCaret } from '../helper/Caret';

// -----------------------------------------------------------------------------------------
// --------------------------------------- Helper ------------------------------------------
// -----------------------------------------------------------------------------------------
import reverseStr from '../helper/reverseStr';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const FlexWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;
const Indentation = styled.div`padding-left: 10px;`;

const RecursiveComponent = ({ testData, len }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const renderChildren = () => {
    if (testData.children) {
      return testData.children.map((obj, idx, arr) => {
        return (
          <Indentation key={obj.id}>
            <RecursiveComponent testData={obj} len={arr.length} />
          </Indentation>
        );
      });
    }
  };

  return (
    <div>
      <FlexWrapper>
        <div onClick={toggleIsOpen} style={{ cursor: 'pointer', width: '20px' }}>
          {testData.children && isOpen && <OpenCaret />}
          {testData.children && !isOpen && <ClosedCaret />}
        </div>

        <div> {len === 3 ? reverseStr(testData.name) : testData.name}</div>
      </FlexWrapper>
      <div>{isOpen && renderChildren()}</div>
    </div>
  );
};

export default RecursiveComponent;
