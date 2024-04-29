package org.ex.Repository.Post;

import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import jakarta.enterprise.context.ApplicationScoped;
import org.ex.Model.Posts;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@ApplicationScoped
public class PostRepository implements PanacheRepositoryBase<Posts, Integer> {
    public List<Posts> findTop4ByOrderByLikesDesc() {
        return findAll().stream()
                .sorted(Comparator.comparingInt(Posts::getLikes).reversed())
                .limit(4)
                .collect(Collectors.toList());
    }
}