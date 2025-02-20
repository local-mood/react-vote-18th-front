import styled from "styled-components";
import { SELECT_TYPE } from "../../constants/select-vote-type";

interface VoteResultProps {
  type: SELECT_TYPE.PartLeader | SELECT_TYPE.Demoday;
  mainText: string;
  subText: string;
  rank: number;
  voteNum: number;
}

export default function VoteResult({
  type,
  mainText,
  subText,
  rank,
  voteNum,
}: VoteResultProps) {
  return (
    <VoteResultWrapper $type={type} $rank={rank}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Ranking $type={type} $rank={rank}>
          {rank}
        </Ranking>
        <MainText $rank={rank}>{mainText}</MainText>
        <SubText $rank={rank}>{subText}</SubText>
      </div>
      <VoteNum $type={type} $rank={rank}>
        {voteNum}
      </VoteNum>
    </VoteResultWrapper>
  );
}

const VoteResultWrapper = styled.div<{ $type: SELECT_TYPE; $rank: number }>`
  width: ${(props) =>
    props.$type === SELECT_TYPE.PartLeader ? "49.2rem" : "77.4rem"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 2rem;
  border: 3px solid ${(props) => props.theme.colors.mainColor};
  background-color: ${(props) =>
    props.$rank === 1
      ? props.theme.colors.mainColor
      : props.theme.colors.white};
  padding: 1.3rem 2.2rem;
`;

const Ranking = styled.div<{ $type: SELECT_TYPE; $rank: number }>`
  width: ${(props) =>
    props.$type === SELECT_TYPE.PartLeader ? "5.5rem" : "8.6rem"};
  height: 5.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  color: ${(props) =>
    props.$rank === 1
      ? props.theme.colors.mainColor
      : props.theme.colors.white};
  background-color: ${(props) =>
    props.$rank === 1
      ? props.theme.colors.white
      : props.theme.colors.mainColor};
  ${(props) => props.theme.fontStyles.headLine1};
  font-size: 3rem;
`;

const MainText = styled.div<{ $rank: number }>`
  margin: 0 3.6rem;
  color: ${(props) =>
    props.$rank === 1 ? props.theme.colors.white : props.theme.colors.black};
  ${(props) => props.theme.fontStyles.headLine1};
`;

const SubText = styled.div<{ $rank: number }>`
  color: ${(props) =>
    props.$rank === 1 ? props.theme.colors.white : props.theme.colors.black};
  ${(props) => props.theme.fontStyles.body0};
`;

const VoteNum = styled.div<{ $type: SELECT_TYPE; $rank: number }>`
  color: ${(props) =>
    props.$rank === 1
      ? props.theme.colors.white
      : props.theme.colors.mainColor};
  ${(props) => props.theme.fontStyles.headLine1};
`;
