import React from "react";

import { ListItem } from "./style";

const projects = [
  { id: 1, name: "TO DO APP" },
  { id: 2, name: "AppLab" },
];

const WorksList = ({ SetIdProject }) => {
  const ListOfProjects = projects.map((project) => (
    <ListItem key={project.id} onClick={() => SetIdProject(project.id)}>
      <span>#{project.id}</span>
      <span>{project.name}</span>
    </ListItem>
  ));
  return <ul>{ListOfProjects}</ul>;
};

export default WorksList;
