/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.mycompany.cdi.event.book.control;

import javax.interceptor.AroundInvoke;
import javax.interceptor.Interceptor;
import javax.interceptor.InvocationContext;

/**
 *
 * @author qaiser
 */
@Interceptor
public class Logger {
    
    @AroundInvoke
    public Object process(InvocationContext context) throws Exception{
        System.out.println(context.getMethod().getName()+" was called");
        return context.proceed();
    }
}
