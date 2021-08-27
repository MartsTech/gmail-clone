import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import styled from "styled-components";

interface HomeSectionsItemProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  color: string;
  selected?: boolean;
}

const HomeSectionsItem: React.FC<HomeSectionsItemProps> = ({
  Icon,
  title,
  color,
  selected = false,
}) => {
  return (
    <StyledContainer color={color} selected={selected}>
      <Icon />
      <StyledTitle>{title}</StyledTitle>
    </StyledContainer>
  );
};

export default HomeSectionsItem;

const StyledContainer = styled.div<{ color: string; selected: boolean }>`
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 12.5rem;
  cursor: pointer;
  border-bottom-style: solid;

  border-bottom-color: ${({ color }) => color};
  border-bottom-width: ${({ selected }) => (selected ? "3px" : 0)};
  background-color: ${({ selected }) => selected && "whitesmoke"};
  color: ${({ selected, color }) => (selected ? color : "gray")};

  @media (max-width: 640px) {
    width: 10rem;

    :nth-child(3) {
      display: none;
    }
  }
`;

const StyledTitle = styled.h4`
  font-size: 0.875rem;
  margin-left: 1rem;
`;
