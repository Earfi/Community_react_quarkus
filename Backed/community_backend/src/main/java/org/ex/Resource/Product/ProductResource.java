package org.ex.Resource.Product;

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
import org.ex.Dto.Product.CreateProductDTO;
import org.ex.Dto.Product.ListAllProductDTO;
import org.ex.Dto.User.ListAllUserDTO;
import org.ex.Model.Product.Product;
import org.ex.Service.Product.ProductService;
import org.ex.Service.User.UserService;
import org.jboss.resteasy.annotations.providers.multipart.MultipartForm;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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



    @POST
    @Path("/{proId}/{userId}/img")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Produces(MediaType.APPLICATION_JSON)
    @RolesAllowed({"Admin","User"})
    @Transactional
    public Response uploadProfileImage(
            @PathParam("proId") Integer proId,
            @PathParam("userId") Integer userId,
            @MultipartForm ImageUploadForm form
    ) {
        try {
            ListAllUserDTO user = uService.getUserById(userId);
            ListAllProductDTO product = service.getProductById(proId);
//            if(form.getFile().length >5){
//                return Response.ok("Can include a maximum of 5 pictures.").build();
//            }
            if (user == null) {
                return Response.status(Response.Status.NOT_FOUND).entity("User not found").build();
            }

            String imagePath = saveProfileImage(form.getFile(), product.getId(),user.getUsername());
            product.setImg(imagePath);

            service.updateProduct(product);

            return Response.ok().entity("Product image uploaded successfully").build();
        } catch (IOException e) {
            e.printStackTrace();
            return Response.serverError().entity("Failed to upload product image").build();
        }
    }

    private String saveProfileImage(byte[] fileBytes, Integer productId, String username) throws IOException {
        if (fileBytes == null) {
            throw new IllegalArgumentException("File bytes cannot be null");
        }

        char[] fileNames = {'a', 'b', 'c', 'd', 'e'};
        String directoryPath = uploadDir + File.separator + username ;
        String productDirectoryPath = directoryPath + File.separator + "product" + File.separator + productId;

        if (!Files.exists(Paths.get(directoryPath))) {
            Files.createDirectories(Paths.get(directoryPath));
        }

        if (!Files.exists(Paths.get(productDirectoryPath))) {
            Files.createDirectories(Paths.get(productDirectoryPath));
        }
        Set<String> existingFileNames = new HashSet<>(); // เก็บชื่อไฟล์ที่มีอยู่แล้ว

        for (int i = 0; i < fileBytes.length; i++){
            for (int y = 0; y < fileNames.length; y++) {
                String fileName = fileNames[y] + ".jpg";
                if (!existingFileNames.contains(fileName)) {
                    String filePath = productDirectoryPath + File.separator + fileName;
                    FileUtils.writeByteArrayToFile(new File(filePath), new byte[]{fileBytes[i]});
                    existingFileNames.add(fileName);
                    break;
                }
            }
        }


        return productDirectoryPath;
    }


}
