import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const adminPath2 = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: "ADMIN_DASHBOARD",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-admin",
        element: <CreateFaculty />,
      },
      {
        name: "Create Admin",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
];
const newArray = adminPath2.reduce((acc, item) => {
  acc.push(item);
  return acc;

});
