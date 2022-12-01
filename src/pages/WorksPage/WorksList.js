import React from "react";

import { ListItem, StyledList } from "./style";
import { itemVariants } from "../../styles/variants";

const projects = [
  { id: 1, name: "TO DO APP" },
  { id: 2, name: "AppLab" },
  { id: 3, name: "Minesweeper" },
  { id: 4, name: "PZZ Białystok" },
];

const WorksList = ({ SetIdProject }) => {
  const ListOfProjects = projects.map(({ id, name }) => (
    <ListItem variants={itemVariants} key={id} onClick={() => SetIdProject(id)}>
      <span>#{id}</span>
      <span>{name}</span>
    </ListItem>
  ));
  return <StyledList>{ListOfProjects}</StyledList>;
};

export default WorksList;
