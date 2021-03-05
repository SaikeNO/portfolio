import React from "react";

import { ListItem } from "./style";

const projects = [
  { id: 1, name: "TO DO APP" },
  { id: 2, name: "AppLab" },
  { id: 3, name: "Weather App" },
  { id: 4, name: "Speedcars" },
];

const WorksList = ({ SetIdProject }) => {
  const ListOfProjects = projects.map((project, id) => (
    <ListItem
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: id * 0.3 }}
      key={project.id}
      onClick={() => SetIdProject(project.id)}
    >
      <span>#{project.id}</span>
      <span>{project.name}</span>
    </ListItem>
  ));
  return <ul>{ListOfProjects}</ul>;
};

export default WorksList;
