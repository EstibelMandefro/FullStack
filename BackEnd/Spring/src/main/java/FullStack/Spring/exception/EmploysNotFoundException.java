package FullStack.Spring.exception;

public class EmploysNotFoundException extends RuntimeException{
    public EmploysNotFoundException(Integer id){
        super("Could not find with this id "+id);
    }
}
