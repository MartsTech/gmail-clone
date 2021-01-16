import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import clsx from "clsx";
import React from "react";
import styles from "../styles/SidebarOption.module.css";

interface SidebarOptionProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  number: number;
  selected?: boolean;
}

export const SidebarOption: React.FC<SidebarOptionProps> = ({
  Icon,
  title,
  number,
  selected,
}) => {
  return (
    <div
      className={clsx(styles.sidebarOption, {
        [styles.active]: selected,
      })}
    >
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};
