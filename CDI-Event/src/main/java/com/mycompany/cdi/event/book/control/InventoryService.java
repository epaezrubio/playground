package com.mycompany.cdi.event.book.control;

import com.mycompany.cdi.event.book.entity.Book;
import javax.enterprise.context.RequestScoped;
import javax.enterprise.event.Observes;

@RequestScoped //@Dependent Scope does not work
public class InventoryService {

    public void onCreateNewBook(@Observes @NewBook Book book){
        System.out.println("Created new book: " + book);
    }
    
    public void onDeleteBook(@Observes @RemoveBook Book book){
        System.out.println("Removed book: " + book);
    }
}
