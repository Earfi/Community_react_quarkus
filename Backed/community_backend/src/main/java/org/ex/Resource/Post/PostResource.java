package org.ex.Resource.Post;

import io.quarkus.elytron.security.common.BcryptUtil;
import jakarta.annotation.security.PermitAll;
import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.apache.commons.io.FileUtils;
import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.ex.Dto.Post.CreatePostDTO;
import org.ex.Dto.Post.ListAllPostDTO;
import org.ex.Dto.User.ListAllUserDTO;
import org.ex.Model.Posts;
import org.ex.Resource.User.ProfileImageUploadForm;
import org.ex.Service.Post.PostService;
import org.ex.Service.User.UserService;
import org.jboss.resteasy.annotations.providers.multipart.MultipartForm;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Base64;
import java.util.List;

@Path("/posts")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class PostResource {

    @ConfigProperty(name = "post.image.upload.dir")
    String uploadDir;

    @Inject
    PostService service;

    @Inject
    UserService uService;

    @GET
    @PermitAll
    public List<ListAllPostDTO> getAllPosts() {
        return service.getAllPosts();
    }

    @GET
    @Path("all/{id}")
    @PermitAll
    public List<ListAllPostDTO> getPostsByUserId(@PathParam("id") Integer id) {
        return service.getPostsByUserId(id);
    }

    @GET
    @Path("/popular")
    @Produces(MediaType.APPLICATION_JSON)
    public List<ListAllPostDTO> getPopularPosts() {
        return service.get4PostsPopular();
    }

    @GET
    @Path("/{id}")
    @PermitAll
    public Response getPostById(@PathParam("id") Integer id){
        ListAllPostDTO post = service.getPostById(id);
        return Response.ok(post).build();
    }

    @POST
    @Path("/{user_id}/create")
    @RolesAllowed({"Admin","User"})
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    public Response createPostWithImage(
            @PathParam("user_id") Integer id,
            @MultipartForm PostImageAndDataForm formData) {
        try {
            String imagePath = savePostImage(formData.getFile(), id);

            CreatePostDTO dto = new CreatePostDTO();
            dto.setTitle(formData.getTitle());
            dto.setImgPath(imagePath);

            ListAllPostDTO post = service.createPost(dto, id);

            return Response.ok(post).status(201).build();
        } catch (IOException e) {
            e.printStackTrace();
            return Response.serverError().entity("Failed to create post").build();
        }
    }

    private String savePostImage(File file, Integer userId) throws IOException {
        if (file == null || file.length() == 0) {
            throw new IllegalArgumentException("File is empty");
        }

        String directoryPath = uploadDir + File.separator + userId;
        if (!Files.exists(Paths.get(directoryPath))) {
            Files.createDirectories(Paths.get(directoryPath));
        }
        String fileName = file.getName();
        String imagePath = directoryPath + File.separator + fileName;

        Files.copy(file.toPath(), Paths.get(imagePath));

        return imagePath;
    }

    @POST
    @Path("/{postId}/{userId}/img")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Produces(MediaType.APPLICATION_JSON)
    @RolesAllowed({"Admin","User"})
    @Transactional
    public Response uploadPostImage(
            @PathParam("postId") Integer postId,
            @PathParam("userId") Integer userId,
            @MultipartForm PostImageUploadForm form
    ) {
        try {
            ListAllUserDTO user = uService.getUserById(userId);
            ListAllPostDTO post = service.getPostById(postId);

            if (post == null) {
                return Response.status(Response.Status.NOT_FOUND).entity("Post not found").build();
            }

            String imagePath = savePostImage(form.getFile(), post.getId(),user.getUsername());

            post.setImgPath(imagePath);

            service.updatePost(postId, post);

            return Response.ok().entity("Post image uploaded successfully").build();
        } catch (IOException e) {
            e.printStackTrace();
            return Response.serverError().entity("Failed to upload post image").build();
        }
    }

    private String savePostImage(byte[] fileBytes, Integer postId, String username) throws IOException {
        if (fileBytes == null) {
            throw new IllegalArgumentException("File bytes cannot be null");
        }

        String fileName = postId + ".jpg";
        String directoryPath = uploadDir + File.separator + username;
        String filePath = directoryPath + File.separator + "post" + File.separator + fileName;

        if (!Files.exists(Paths.get(directoryPath))) {
            Files.createDirectories(Paths.get(directoryPath));
        }

        FileUtils.writeByteArrayToFile(new File(filePath), fileBytes);
        return filePath;
    }

    @GET
    @Path("/{post_id}/img")
    @Produces("image/jpeg")
    public Response getImageByPostId(@PathParam("post_id") Integer postId) {
        Posts postEntity = Posts.findById(postId);
        if (postEntity == null || postEntity.getImgPath() == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }

        File imageFile = new File(postEntity.getImgPath());

        if (!imageFile.exists()) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }

        byte[] imageData;
        try {
            imageData = Files.readAllBytes(imageFile.toPath());
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }

        return Response.ok(imageData).build();
    }



//    @GET
//    @Path("/{postId}/img")
//    @PermitAll
//    @Produces("image/jpeg")
//    public Response getPostImage(@PathParam("postId") Integer postId) {
//        ListAllPostDTO post = service.getPostById(postId);
//
//        String imagePath = post.getImgPath();
//
//        File imageFile = new File(imagePath);
//        if (!imageFile.exists()) {
//            return Response.status(Response.Status.NOT_FOUND).build();
//        }
//
//        Response.ResponseBuilder responseBuilder = Response.ok(imageFile);
//        responseBuilder.type("image/jpeg");
//        return responseBuilder.build();
//    }

    @DELETE
    @RolesAllowed({"Admin","User"})
    @Path("/delete/{id}")
    public Response deletePost(@PathParam("id") Integer id){
        service.removePost(id);
        return Response.status(204).build();
    }
}
