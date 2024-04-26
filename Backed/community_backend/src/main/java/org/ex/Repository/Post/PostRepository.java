package org.ex.Repository.Post;

import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import jakarta.enterprise.context.ApplicationScoped;
import org.ex.Model.Posts;

@ApplicationScoped
public class PostRepository implements PanacheRepositoryBase<Posts,Integer> {

}
