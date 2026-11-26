import { useEffect, useState } from "react";
import { getProjects } from "../API/projectAPI";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  async function fetchData() {
    const data = await getProjects();
    setProjects(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container mt-4">
        <h2 className="mb-3">Project List</h2>
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Project Name</th>
              <th>Project Details</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.id}</td>
                <td>{project.ProjectName}</td>
                <td>{project.Details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProjectList;
