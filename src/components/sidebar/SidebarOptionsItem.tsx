import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import styled from "styled-components";

interface SidebarOptionsItemProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  count: number;
  selected?: boolean;
}

const SidebarOptionsItem: React.FC<SidebarOptionsItemProps> = ({
  Icon,
  title,
  count,
  selected = false,
}) => {
  return (
    <StyledContainer selected={selected}>
      <StyledIconContainer>
        <Icon />
      </StyledIconContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledCount>{count}</StyledCount>
    </StyledContainer>
  );
};

export default SidebarOptionsItem;

const StyledContainer = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  height: 2.5rem;
  padding: 0 0.75rem;
  border-top-right-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
  cursor: pointer;

  color: ${({ selected }) => (selected ? "#c04b37" : "#818181")};
  background-color: ${({ selected }) => selected && "#fcecec"};
  font-weight: ${({ selected }) => selected && 800} !important;

  > p {
    display: ${({ selected }) => selected && "inline"};
  }

  :hover {
    color: #c04b37;
    background-color: #fcecec;
    font-weight: 800 !important;

    > p {
      display: inline;
    }
  }
`;

const StyledIconContainer = styled.div`
  padding: 0.5rem;
`;

const StyledTitle = styled.h3`
  flex: 1;
  margin-left: 0.5rem;
  font-size: 0.875rem;
  font-weight: 400;
`;

const StyledCount = styled.p`
  font-weight: 300;
  display: none;
`;
