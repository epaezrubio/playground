package com.mycompany.cdi.event.book.boundary;

import com.mycompany.cdi.event.book.control.NewBook;
import com.mycompany.cdi.event.book.control.RemoveBook;
import com.mycompany.cdi.event.book.entity.Book;
import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.enterprise.context.RequestScoped;
import javax.enterprise.event.Event;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;

@Stateless
@TransactionAttribute(TransactionAttributeType.NEVER)
@Path("/books")
public class BookService {

    @Inject @NewBook
    Event<Book> booksCreatedEvent;

    @Inject @RemoveBook
    Event<Book> booksRemovedEvent;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void createNewBook(Book book) {
        //...
        booksCreatedEvent.fire(book);
    }

    @DELETE
    @Path("{id}")
    public void deleteBook(@PathParam("id") int bookId) {
        //...
        Book book = fetchBookFromDatabase();
        booksRemovedEvent.fire(book);
    }

    private Book fetchBookFromDatabase() {
        Book book = new Book();
        book.setId(99);
        book.setTitle("JEE 7");
        return book;
    }

}
