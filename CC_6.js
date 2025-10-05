class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `${this.name} works in the ${this.department} department.`;
  }
}

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  describe() {
    return `${this.name} manages the ${this.department} department with a team of ${this.teamSize} people.`;
  }
}


class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    console.log("Employee List:");
    this.employees.forEach(emp => {
      console.log(emp.describe());
    });
  }
}

const company = new Company();

const emp1 = new Employee("Alice", "Finance");
const emp2 = new Employee("Jamal", "Marketing");
const mgr1 = new Manager("Sophia", "Engineering", 10);
const mgr2 = new Manager("Carlos", "Sales", 6);

company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(mgr1);
company.addEmployee(mgr2);

company.listEmployees();