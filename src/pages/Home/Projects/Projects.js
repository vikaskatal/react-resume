import React from "react";
import { ReactComponent as IconArrow } from "../../../assets/images/arrow.svg";
import { Link } from "react-router-dom";
import { WorkList } from "../../../constants";
import {
  ListContainer,
  Title,
  List,
  ListItem,
  ProjectTitle,
} from "./Projects.styles";

const Projects = () => {
  return (
    <ListContainer>
      <Title>Projects</Title>

      <List>
        {WorkList.length > 0 &&
          WorkList.map(({ title, tag, id }) => (
            <ListItem key={id} to={`work/${id}`} as={Link}>
              <ProjectTitle>
                {" "}
                {title} <span> {tag} </span>{" "}
              </ProjectTitle>
              <span className="arr">
                <IconArrow />
              </span>
            </ListItem>
          ))}
      </List>
    </ListContainer>
  );
};

export default Projects;
