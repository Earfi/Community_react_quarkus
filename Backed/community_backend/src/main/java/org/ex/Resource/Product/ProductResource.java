package org.ex.Resource.Product;

import jakarta.annotation.security.PermitAll;
import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.ex.Dto.Product.CreateProductDTO;
import org.ex.Dto.Product.ListAllProductDTO;
import org.ex.Service.Product.ProductService;
import org.ex.Service.User.UserService;

import java.util.List;

@Path("/product")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ProductResource {

    @ConfigProperty(name = "product.image.upload.dir")
    String uploadDir;

    @Inject
    ProductService service;

    @Inject
    UserService uService;

    @GET
    @PermitAll
    public List<ListAllProductDTO> getAllProducts() {
        return service.getAllProducts();
    }

    @GET
    @Path("/{id}")
    @PermitAll
    public Response getProductById(@PathParam("id") Integer id){
        ListAllProductDTO user = service.getProductById(id);
        return Response.ok(user).build();
    }

    @POST
    @Path("/create")
    @RolesAllowed({"Admin","User"})
    public Response createProduct(CreateProductDTO dto){
        ListAllProductDTO user = service.createProduct(dto);
        return Response.ok(user).status(201).build();
    }

    @DELETE
    @RolesAllowed({"Admin","User"})
    @Path("/delete/{id}")
    public Response deleteProduct(@PathParam("id") Integer id){
        service.removeProduct(id);
        return Response.status(204).build();
    }



//    @POST
//    @Path("/{userId}/product")
//    @Consumes(MediaType.MULTIPART_FORM_DATA)
//    @Produces(MediaType.APPLICATION_JSON)
//    @RolesAllowed({"Admin","User"})
//    @Transactional
//    public Response uploadProfileImage(
//            @PathParam("userId") Integer userId,
//            @MultipartForm ProfileImageUploadForm form
//    ) {
//        try {
//            ListAllUserDTO user = uService.getUserById(userId);
//            if (user == null) {
//                return Response.status(Response.Status.NOT_FOUND).entity("User not found").build();
//            }
//
//            String imagePath = saveProfileImage(form.getFile(), user.getUsername());
//
//
//            String password = user.getPassword();
//            if (password != null) {
//                String hashedPassword = BcryptUtil.bcryptHash(password);
//                user.setPassword(hashedPassword);
//            } else {
//                // ดำเนินการในกรณีที่รหัสผ่านเป็น null
//                // ตรวจสอบว่าคุณต้องการทำอะไรบ้าง
//            }
//
//            service.updateProduct(userId , , user);
//
//            return Response.ok().entity("Profile image uploaded successfully").build();
//        } catch (IOException e) {
//            e.printStackTrace();
//            return Response.serverError().entity("Failed to upload profile image").build();
//        }
//    }
//
//    private String saveProfileImage(byte[] fileBytes, String username) throws IOException {
//        if (fileBytes == null) {
//            throw new IllegalArgumentException("File bytes cannot be null");
//        }
//
//        String fileName = username + ".jpg";
//        String directoryPath = uploadDir + File.separator + username;
//        String filePath = directoryPath + File.separator + "profile" + File.separator + fileName;
//
//        if (!Files.exists(Paths.get(directoryPath))) {
//            Files.createDirectories(Paths.get(directoryPath));
//        }
//
//        FileUtils.writeByteArrayToFile(new File(filePath), fileBytes);
//        return filePath;
//    }

}
