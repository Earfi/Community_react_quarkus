package org.ex.Resource.User;

import io.quarkus.elytron.security.common.BcryptUtil;
import jakarta.annotation.security.PermitAll;
import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.apache.commons.io.FileUtils;
import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.ex.Dto.User.CreateUserDTO;
import org.ex.Dto.User.InfoCardUserDto;
import org.ex.Dto.User.ListAllUserDTO;
import org.ex.Service.User.UserService;
import org.jboss.resteasy.annotations.providers.multipart.MultipartForm;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

@Path("/user")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserResource {

    @ConfigProperty(name = "profile.image.upload.dir")
    String uploadDir;

    @Inject
    UserService service;

    @GET
    @RolesAllowed({"Admin","User"})
//    @RolesAllowed({"Admin"})
    public List<ListAllUserDTO> getAllUsers() {
        return service.getAllUsers();
    }

    @GET
    @Path("/{id}")
    @RolesAllowed({"Admin","User"})
    public Response getUserById(@PathParam("id") Integer id){
        ListAllUserDTO user = service.getUserById(id);
        return Response.ok(user).build();
    }

    @POST
    @Path("/create")
    @PermitAll
    public Response createUser(CreateUserDTO dto){
        if (service.existsByUsername(dto.getUsername())) {
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity("Username already exists")
                    .build();
        }

        ListAllUserDTO user = service.createUser(dto);
        return Response.ok(user).status(201).build();
    }

    @DELETE
    @RolesAllowed({"Admin"})
    @Path("/delete/{id}")
    public Response deleteUser(@PathParam("id") Integer id){
        service.removeUser(id);
        return Response.status(204).build();
    }

    @POST
    @Path("/{userId}/profile")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Produces(MediaType.APPLICATION_JSON)
    @RolesAllowed({"Admin","User"})
    @Transactional
    public Response uploadProfileImage(
            @PathParam("userId") Integer userId,
            @MultipartForm ProfileImageUploadForm form
    ) {
        try {
            ListAllUserDTO user = service.getUserById(userId);
            if (user == null) {
                return Response.status(Response.Status.NOT_FOUND).entity("User not found").build();
            }

            String imagePath = saveProfileImage(form.getFile(), user.getUsername());

            user.setProfile(imagePath);

            String password = user.getPassword();
            if (password != null) {
                String hashedPassword = BcryptUtil.bcryptHash(password);
                user.setPassword(hashedPassword);
            } else {
                // ดำเนินการในกรณีที่รหัสผ่านเป็น null
                // ตรวจสอบว่าคุณต้องการทำอะไรบ้าง
            }

            service.updateUser(userId, user);

            return Response.ok().entity("Profile image uploaded successfully").build();
        } catch (IOException e) {
            e.printStackTrace();
            return Response.serverError().entity("Failed to upload profile image").build();
        }
    }

    private String saveProfileImage(byte[] fileBytes, String username) throws IOException {
        if (fileBytes == null) {
            throw new IllegalArgumentException("File bytes cannot be null");
        }

        String fileName = username + ".jpg";
        String directoryPath = uploadDir + File.separator + username;
        String filePath = directoryPath + File.separator + "profile" + File.separator + fileName;

        if (!Files.exists(Paths.get(directoryPath))) {
            Files.createDirectories(Paths.get(directoryPath));
        }

        FileUtils.writeByteArrayToFile(new File(filePath), fileBytes);
        return filePath;
    }

    @GET
    @Path("/{userId}/profile")
//    @RolesAllowed({"Admin","User"})
    @PermitAll
    @Produces("image/jpeg")
    public Response getProfileImage(@PathParam("userId") Integer userId) {
        ListAllUserDTO user = service.getUserById(userId);

        String imagePath = user.getProfile();

        File imageFile = new File(imagePath);
        if (!imageFile.exists()) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }

        Response.ResponseBuilder responseBuilder = Response.ok(imageFile);
        responseBuilder.type("image/jpeg");
        return responseBuilder.build();
    }

    @GET
    @Path("/count")
    public long countUsers() {
        return service.countUsers();
    }

    @GET
    @Path("/card/info")
    public List<InfoCardUserDto> InfoCardAllUser() {
        return service.InfoCardAllUser();
    }

    @GET
    @Path("/card/info/{id}")
    public InfoCardUserDto InfoCardUser(@PathParam("id") Integer id) {
        return service.InfoCardUser(id);
    }
}
