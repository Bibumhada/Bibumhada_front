import styled from 'styled-components';
import BottomSheet from './BottomSheet';

export const ShareBottomSheet = styled(BottomSheet)`
  ul {
    padding: 5px 40px 35px;
    display: flex;
    flex-direction: column;
  }

  li {
    button {
      width: 100%;
      padding: 30px;
      display: flex;
      align-items: center;
    }

    img {
      display: inline-block;
      margin-right: 26px;
    }

    p {
      /* margin: 0 auto; */
      font-size: var(--sm);
      font-weight: var(--font-bold);
    }
  }

  .line {
    display: block;
    width: 100%;
    border: 1px #d9d9d9 solid;
  }

  .shareViaLink {
    padding-left: 9px;
  }
`;
export const CopiedModal = styled.p`
  width: 70%;
  padding: 15px 15px;
  border-radius: 10px;
  background-color: #fff;
  position: fixed;
  text-align: center;
  font-size: var(--lg);

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
