package org.ex.Repository.User;

import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import io.quarkus.panache.common.Page;
import jakarta.enterprise.context.ApplicationScoped;
import org.ex.Model.User.User;

import java.util.List;

@ApplicationScoped
public class UserRepository implements PanacheRepositoryBase<User,Integer> {
    public User findByUsername(String username) {
        return find("username", username).firstResult();
    }

    public long count() {
        return findAll().count();
    }
}
