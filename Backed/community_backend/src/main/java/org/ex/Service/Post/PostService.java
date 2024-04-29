package org.ex.Service.Post;

import io.quarkus.elytron.security.common.BcryptUtil;
import io.quarkus.hibernate.orm.panache.PanacheQuery;
import io.quarkus.panache.common.Sort;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import org.ex.Dto.Post.CreatePostDTO;
import org.ex.Dto.Post.ListAllPostDTO;
import org.ex.Dto.User.InfoCardUserDto;
import org.ex.Dto.User.ListAllUserDTO;
import org.ex.Dto.User.UserInfo;
import org.ex.Model.Comments;
import org.ex.Model.Posts;
import org.ex.Model.User.User;
import org.ex.Repository.Post.PostRepository;
import org.ex.Service.User.UserService;
import org.jboss.logging.annotations.Pos;

import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@ApplicationScoped
public class PostService {
    @Inject
    PostRepository repository;

    @Inject
    UserService uService;

    public List<ListAllPostDTO> getAllPosts() {
        PanacheQuery<Posts> query = Posts.findAll(Sort.by("create").descending());
        List<Posts> postEntities = query.list();
        return postEntities.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<ListAllPostDTO> getPostsByUserId(Integer userId) {
        List<Posts> post = repository.list("userId", userId);
        return post.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<ListAllPostDTO> get4PostsPopular() {
        return repository.findTop4ByOrderByLikesDesc()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }


    private ListAllPostDTO convertToDTO(Posts posts) {
        InfoCardUserDto user = uService.InfoCardUser(posts.getUserId());
        return new ListAllPostDTO(
                posts.getId(),
                posts.getTitle(),
                posts.getImgPath(),
                posts.getLikes(),
                posts.getComments(),
                posts.getShares(),
                posts.getCreate(),
                posts.getUpdate(),
//                new UserInfo(
                        user.getId(),
                        user.getFullName(),
                        user.getProfile()
//                )
        );
    }

    public ListAllPostDTO getPostById(Integer id) {
        Posts posts = repository.findById(id);
        if (posts != null) {
            return convertToDTO(posts);
        }
        return null;
    }

    @Transactional
    public ListAllPostDTO createPost(CreatePostDTO postDTO, Integer id) {
        Posts posts = new Posts();
        setPostFieldsCreate(posts, postDTO, id);
        posts.persist();
        return convertToDTO(posts);
    }

    private void setPostFieldsCreate(Posts posts, CreatePostDTO postDTO, Integer id) {
        posts.setTitle(postDTO.getTitle());
        posts.setImgPath(postDTO.getImgPath());

        posts.setLikes(0);
        posts.setComments(0);
        posts.setShares(0);
        posts.setUserId(id);
        posts.setCreate(LocalDateTime.now());
        posts.setUpdate(LocalDateTime.now());
    }

    @Transactional
    public ListAllPostDTO updatePost(Integer postId, ListAllPostDTO dto) {
        Posts post = Posts.findById(postId);
        if (post != null) {
            updatePostFields(post, dto);
            post.persist();
            return convertToDTO(post);
        }
        return null;
    }

    private void updatePostFields(Posts post, ListAllPostDTO postDto) {
        post.setTitle(postDto.getTitle());
//        post.setImgPath(postDto.getImgPath());
        post.setLikes(postDto.getLikes());
        post.setComments(postDto.getComments());
        post.setShares(postDto.getShares());
        post.setUserId(postDto.getUserId());
        post.setCreate(postDto.getCreate());
        post.setUpdate(LocalDateTime.now());
    }


    //-------------------------------------------------------
    //-------------------------------------------------------
    //-------------------------------------------------------
    @Transactional
    public void removePost(Integer postId) {
        Optional<Posts> postOptional = Posts.findByIdOptional(postId);
        postOptional.ifPresent(post -> {
            Comments.delete("id", post.getId());
            post.delete();
        });
    }
}
