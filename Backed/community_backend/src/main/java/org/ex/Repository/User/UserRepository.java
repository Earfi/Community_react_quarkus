package org.ex.Repository.User;

import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import jakarta.enterprise.context.ApplicationScoped;
import org.ex.Model.User.User;

@ApplicationScoped
public class UserRepository implements PanacheRepositoryBase<User,Integer> {
    public User findByUsername(String username) {
        return find("username", username).firstResult();
    }
}
