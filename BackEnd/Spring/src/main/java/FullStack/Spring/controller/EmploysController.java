package FullStack.Spring.controller;

import FullStack.Spring.exception.EmploysNotFoundException;
import FullStack.Spring.model.Employs;
import FullStack.Spring.repository.EmploysRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/employs")
public class EmploysController {

    @Autowired
    private EmploysRepository employsRepository;

    @PostMapping
    public Employs newEmploy(@RequestBody Employs newEmploy){
        return employsRepository.save(newEmploy);
    }
    @GetMapping
    List<Employs> getALlEmploys(){
        return employsRepository.findAll();

    }


    @GetMapping("/{id}")
    Employs getUserById(@PathVariable Integer id) {
        return employsRepository.findById(id)
                .orElseThrow(() -> new EmploysNotFoundException(id));

    }

    @PutMapping("/{id}")
    Employs updateEmployee(@RequestBody Employs employeeDetails, @PathVariable Integer id) {
        return employsRepository.findById(id)
                .map(employee -> {
                    employee.setFirstName(employeeDetails.getFirstName());
                    employee.setLastName(employeeDetails.getLastName());
                    employee.setEmail(employeeDetails.getEmail());
                    return employsRepository.save(employee);
                })
                .orElseThrow(() -> new EmploysNotFoundException(id));


    }

    @DeleteMapping("/{id}")
    String deleteEmploy(@PathVariable Integer id){
        if(!employsRepository.existsById(id)){
            throw new EmploysNotFoundException(id);
        }
        employsRepository.deleteById(id);
        return "Employee with id "+id+" has been deleted success ";

    }


}
