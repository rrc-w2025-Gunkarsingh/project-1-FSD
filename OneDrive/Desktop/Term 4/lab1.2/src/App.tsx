import { useState } from "react";
import "./App.css";
import { Header } from "./components/header";
import { Footer } from "./components/Footer";
import { EmployeeCard } from "./components/EmployeeCard";
import { EmployeeForm } from "./components/EmployeeForm";
import type { Employee } from "./types";

const initialEmployees: Employee[] = [
  {
    id: 1,
    name: "John Smith",
    position: "Financial Analyst",
    department: "Finance",
    email: "john.smith@example.com",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Software Developer",
    department: "Technology",
    email: "sarah.johnson@example.com",
  },
];

function App() {
  const [employees, setEmployees] =
    useState<Employee[]>(initialEmployees);

  function addEmployee(firstName: string, department: string) {
    const newEmployee: Employee = {
      id: Date.now(),
      name: firstName,
      position: "New Employee",
      department: department,
      email: `${firstName.toLowerCase()}@example.com`,
    };

    setEmployees((currentEmployees) => [
      ...currentEmployees,
      newEmployee,
    ]);
  }

  return (
    <>
      <Header />

      <main>
        <h1>Our Employees</h1>

        <h2>Finance</h2>

        <section className="employees">
          {employees
            .filter(
              (employee) => employee.department === "Finance"
            )
            .map((employee) => (
              <EmployeeCard
                key={employee.id}
                employee={employee}
              />
            ))}
        </section>

        <h2>Technology</h2>

        <section className="employees">
          {employees
            .filter(
              (employee) => employee.department === "Technology"
            )
            .map((employee) => (
              <EmployeeCard
                key={employee.id}
                employee={employee}
              />
            ))}
        </section>

        <EmployeeForm onAddEmployee={addEmployee} />
      </main>

      <Footer />
    </>
  );
}

export default App;