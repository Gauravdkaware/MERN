let spinner = document.querySelector(".customSpinner");
let projectContainer = document.querySelector(".container");
let projectDetails = document.querySelector("#projectDetails");
let projects = [];
let view = "table";
let filterProjects = [];
let departments = [];
let priorities = [];

function hideSpinner() {
  spinner.style.display = "none";
}

fetchProjects("table");

async function fetchProjects(view) {
  try {
    let res = await fetch(
      "https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects",
    );
    let result = await res.json();
    projects = result || [];
    createDepartmentsArray();
    createPrioritiesArray();
    filterView(projects, view);
    projectContainer.style.display = "block";
  } catch (error) {
    console.log(error);
  } finally {
    hideSpinner();
  }
}

function filterView(projects, view) {
  if (view == "card") {
    showCardView(projects);
  } else {
    showTableView(projects);
  }
}

function showTableView(projects) {
  view = "table";
  projectDetails.innerHTML = `
    <div class="col-12">
      <div class="table-responsive">
        <table class="table table-hover table-bordered table-striped">
          <thead class="table-dark">
            <tr>
              <th>Project Name</th>
              <th>Details</th>
              <th>Priority</th>
              <th>Department</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            ${projects
              .map(
                (project) => `
                  <tr>
                    <td>${project.ProjectName}</td>
                    <td>${project.Details || "N/A"}</td>
                    <td>${project.priority || "N/A"}</td>
                    <td>${project.Department || "N/A"}</td>
                    <td>${project.status || "N/A"}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function showCardView(projects) {}

async function showProjectDetails(id) {
  let projectBody = document.querySelector("#projectBody");
  let projectTitle = document.querySelector("#projectTitle");

  projectTitle.textContent = "Loading Project Details...";
  projectBody.innerHTML = `
    <div class="text-center p-4">
      <div class="spinner-border" role="status"></div>
      <p class="mt-2">Loading project...</p>
    </div>
  `;

  bootstrap.Modal.getOrCreateInstance(
    document.querySelector("#projectModal"),
  ).show();

  try {
    let res = await fetch(
      `https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects?id=${id}`,
    );
    if (!res.ok) {
      throw new error("Failed to fetch project details");
    }
    let result = await res.json();
    let project = result;

    if (!project) {
      throw new Error("Project not found");
    }
    projectTitle.textContent = project.ProjectName;

    projectBody.innerHTML = `
      <p><strong>Details:</strong> ${project.Details || "Not available"}</p>
      <p><strong>Department:</strong> ${project.Department || "Not available"}</p>
      <h6>Status</h6>
      <p>${project.status || "Not available"}</p>
    `;
  } catch {
    projectTitle.textContent = "Error";
    projectBody.textContent = error.message;
  }
}

function searchByName() {
  let searchKey = document.querySelector("#searchKey").value;
  filterProjects = projects.filter(
    (project) =>
      (project.ProjectName || "")
        .toLowerCase()
        .includes((searchKey || "").toLowerCase()) ||
      (project.Details || "")
        .toLowerCase()
        .includes((searchKey || "").toLowerCase()),
  );
  filterView(filterProjects, view);
}

function createDepartmentsArray() {
  departments = [
    ...new Set(projects.map((project) => project.Department).filter(Boolean)),
  ];
  let departmentSelect = document.querySelector("#departmentSelect");

  departmentSelect.innerHTML =
    `<option value="all">All Departments</option>` +
    departments
      .map(
        (department) => `<option value="${department}">${department}</option>`,
      )
      .join("");
}

function filterByDepartment(department) {
  if (department === "all") {
    filterProjects = projects;
  } else {
    filterProjects = projects.filter(
      (project) => project.Department === department,
    );
  }
  filterView(filterProjects, view);
}

function createPrioritiesArray() {
  priorities = [
    ...new Set(projects.map((project) => project.priority).filter(Boolean)),
  ];
  let prioritySelect = document.querySelector("#prioritySelect");
  prioritySelect.innerHTML =
    `<option value="all">All Priorities</option>` +
    priorities
      .map((priority) => `<option value="${priority}">${priority}</option>`)
      .join("");
}

function filterByPriority(priority) {
  if (priority === "all") {
    filterProjects = projects;
  } else {
    filterProjects = projects.filter(
      (project) => project.priority === priority,
    );
  }
  filterView(filterProjects, view);
}

function filterByStatus(status) {
  console.log(status);
  if (status === "all") {
    filterProjects = projects;
  } else {
    filterProjects = projects.filter((project) => project.status === status);
  }
  filterView(filterProjects, view);
}
