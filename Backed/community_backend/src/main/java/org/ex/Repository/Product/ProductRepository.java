package org.ex.Repository.Product;

import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import jakarta.enterprise.context.ApplicationScoped;
import org.ex.Model.Product.Product;

@ApplicationScoped
public class ProductRepository implements PanacheRepositoryBase <Product,Integer> {
}
