import { useState } from "react";

interface EmployeeFormProps {
  onAddEmployee: (firstName: string, department: string) => void;
}

export function EmployeeForm({ onAddEmployee }: EmployeeFormProps) {
  const [firstName, setFirstName] = useState("");
  const [department, setDepartment] = useState("Finance");
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (firstName.trim().length < 3) {
      setError("First name must be at least 3 characters.");
      return;
    }

    setError("");
    onAddEmployee(firstName.trim(), department);
    setFirstName("");
    setDepartment("Finance");
  }

  return (
    <section className="employee-form">
      <h2>Add New Employee</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="department">Department:</label>
          <select
            id="department"
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
          >
            <option value="Finance">Finance</option>
            <option value="Technology">Technology</option>
          </select>
        </div>

        {error && <p>{error}</p>}

        <button type="submit">Add Employee</button>
      </form>
    </section>
  );
}