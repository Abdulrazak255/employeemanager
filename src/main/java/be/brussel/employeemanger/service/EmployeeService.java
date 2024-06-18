package be.brussel.employeemanger.service;

import be.brussel.employeemanger.exceptions.UserNotFoundException;
import be.brussel.employeemanger.model.Employee;
import be.brussel.employeemanger.repositoy.Employee_Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;
import java.util.UUID;

@Service
public class EmployeeService {
    private final Employee_Repository employeeRepository ;

    @Autowired
    public EmployeeService(Employee_Repository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    public List <Employee> findAllEmployees ()
    {
        return employeeRepository.findAll();
    }

    public Employee addEmployee (Employee employee)
    {
        employee.setEmployeeCode(UUID.randomUUID().toString());

        return employeeRepository.save(employee);
    }

    public Employee updateEmployee (Employee employee)
    {
        return employeeRepository.save(employee);
    }


    public Employee findEmployeeById (Long id)
    {
        return employeeRepository.findEmployeeById(id).orElseThrow( () -> new UserNotFoundException("The employee by id " + id + " is not exist "));
    }
    public void  deleteEmployee (Long id)
    {
        employeeRepository.deleteEmployeeById(id);
    }
}
