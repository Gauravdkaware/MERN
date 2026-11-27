import { useEffect, useState } from "react";
import { getProjects } from "../API/projectAPI";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");

  const projectsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  async function fetchData() {
    const data = await getProjects();
    setProjects(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Unique dropdown values
  const departments = [
    ...new Set(projects.map((p) => p.Department).filter(Boolean)),
  ];
  const priorities = [
    ...new Set(projects.map((p) => p.priority).filter(Boolean)),
  ];
  const statuses = [...new Set(projects.map((p) => p.status).filter(Boolean))];

  // Apply filters
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      (project.ProjectName || "")
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      (project.Details || "").toLowerCase().includes(search.toLowerCase());

    const matchesDepartment = !department || project.Department === department;
    const matchesPriority = !priority || project.priority === priority;
    const matchesStatus = !status || project.status === status;

    return (
      matchesSearch && matchesDepartment && matchesPriority && matchesStatus
    );
  });

  // Pagination
  const numOfPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = currentPage * projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, department, priority, status]);

  return (
    <>
      <div className="container mt-4">
        <h2 className="mb-3">Project List</h2>
        {/* Filters */}
        <div className="row mb-3">
          <div className="col-md-3 mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-md-3 mb-2">
            <select
              className="form-select"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="">All Departments</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-3 mb-2">
            <select
              className="form-select"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="">All Priorities</option>
              {priorities.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-3 mb-2">
            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">All Statuses</option>
              {statuses.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Project Name</th>
              <th>Project Details</th>
              <th>Department</th>
              <th>Priority</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {currentProjects.length > 0 ? (
              currentProjects.map((project, i) => (
                <tr key={project.id}>
                  <td>{startIndex + i + 1}</td>
                  <td>{project.ProjectName}</td>
                  <td>
                    <div className="details-text" title={project.Details}>
                      {project.Details}
                    </div>
                  </td>
                  <td>{project.Department}</td>
                  <td>{project.priority}</td>
                  <td>{project.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No projects found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <span>
            Showing {filteredProjects.length === 0 ? 0 : startIndex + 1} to
            {Math.min(endIndex, filteredProjects.length)} of
            {filteredProjects.length}
          </span>
          <nav>
            <ul className="pagination mb-0">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: numOfPages }, (_, index) => (
                <li
                  key={index}
                  className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${currentPage === numOfPages || numOfPages === 0 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === numOfPages || numOfPages === 0}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ProjectList;
