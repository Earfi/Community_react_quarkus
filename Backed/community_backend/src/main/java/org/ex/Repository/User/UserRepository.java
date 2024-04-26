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

//    public List<Object[]> findInfoCardUserById(Integer id) {
//        return find("select id, username, profile from User where id = ?1", id)
//                .project(Object[].class)
//                .list();
//    }
//
//    public List<Object[]> findInfoCard10User() {
//        return findAll()
//                .project(Object[].class)
//                .page(Page.ofSize(10))
//                .list();
//    }

    public long count() {
        return findAll().count();
    }
}
