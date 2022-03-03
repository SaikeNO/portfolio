import React from "react";

import { ListItem, StyledList } from "./style";
import { itemVariants } from "../../styles/variants";

const projects = [
  { id: 1, name: "TO DO APP" },
  { id: 2, name: "AppLab" },
  { id: 3, name: "Minesweeper" },
  { id: 4, name: "EkoSolutions" },
];

const WorksList = ({ SetIdProject }) => {
  const ListOfProjects = projects.map((project, id) => (
    <ListItem
      variants={itemVariants}
      key={project.id}
      onClick={() => SetIdProject(project.id)}
    >
      <span>#{project.id}</span>
      <span>{project.name}</span>
    </ListItem>
  ));
  return <StyledList>{ListOfProjects}</StyledList>;
};

export default WorksList;
