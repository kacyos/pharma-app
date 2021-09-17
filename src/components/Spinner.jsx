import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";

export default function Spinner () {
  const override = css`
  display: block;  
  margin: 15% auto;
`;

  return (
    <RingLoader css={override} color="#002fbd" loading={true} size={60} />
  )
}
