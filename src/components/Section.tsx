import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import React from "react";
import clsx from "clsx";
import styles from "../styles/Section.module.css";

interface SectionProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  color: string;
  selected?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  Icon,
  title,
  color,
  selected,
}) => {
  return (
    <div
      className={clsx(styles.section, {
        [styles.selected]: selected,
      })}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
};
