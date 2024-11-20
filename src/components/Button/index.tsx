import { ReactNode } from "react";
import styled from "styled-components";
type BtnProps = {
  isLoading: boolean;
};
const Btn = styled.button<BtnProps>`
  background-color: ${(props) => (props.isLoading ? "gray" : "red")};
  padding: 25px 30px;
`;

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};
function Button({ children, isLoading, onClick }: Props) {
  return (
    <div>
      <Btn
        onClick={onClick}
        disabled={isLoading} // className={`btn btn-${isLoading ? `Secondary` : `Primary`}`}
        isLoading={isLoading}
      >
        {isLoading ? "Cargando..." : children}
      </Btn>
    </div>
  );
}

export default Button;
