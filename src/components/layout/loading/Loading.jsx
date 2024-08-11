import styled from "styled-components";
import loading from "../../../assets/svg/loading.svg";

const DivLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  img {
    width: 80px;
  }
`;

const Loading = () => {
  return (
    <DivLoading>
      <img src={loading} />
    </DivLoading>
  );
};

export default Loading;
