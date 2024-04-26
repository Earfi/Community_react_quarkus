package org.ex.Service.Product;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import org.ex.Dto.Product.CreateProductDTO;
import org.ex.Dto.Product.ListAllProductDTO;
import org.ex.Model.Product.Product;
import org.ex.Model.User.User;
import org.ex.Repository.Product.ProductRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@ApplicationScoped
public class ProductService {

    @Inject
    ProductRepository repository;

    public List<ListAllProductDTO> getAllProducts() {
        List<Product> product = repository.listAll();
        return product.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    private ListAllProductDTO convertToDTO(Product product) {
        return new ListAllProductDTO(
                product.getId(),
                product.getImg(),
                product.getTitleCart(),
                product.getTitle(),
                product.getDescriptions(),
                product.getCategory(),
                product.getWeight(),
                product.getPrice(),
                product.getRating(),
                product.getStock(),
                product.getOutStock(),
                product.getCreate(),
                product.getUpdate(),
                product.getUserId()
                );
    }

    public ListAllProductDTO getProductById(Integer id) {
        Product product = repository.findById(id);
        if (product != null) {
            return convertToDTO(product);
        }
        return null;
    }

    @Transactional
    public ListAllProductDTO createProduct(CreateProductDTO proDto) {
        Product product = new Product();
        setProductFieldsCreate(product, proDto);
        product.persist();
        return convertToDTO(product);
    }

    private void setProductFieldsCreate(Product product, CreateProductDTO proDto) {
        product.setImg(proDto.getImg());
        product.setTitleCart(proDto.getTitleCart());
        product.setTitle(proDto.getTitle());
        product.setDescriptions(proDto.getDescriptions());
        product.setCategory(proDto.getCategory());
        product.setWeight(proDto.getWeight());
        product.setPrice(proDto.getPrice());
        product.setRating(null);
        product.setStock(proDto.getStock());
        product.setOutStock(null);
        product.setCreate(LocalDateTime.now());
        product.setUpdate(LocalDateTime.now());
        product.setUserId(proDto.getUserId());
    }

    @Transactional
    public ListAllProductDTO updateProduct(ListAllProductDTO dto) {
        User user = User.findById(dto.getUserId());
        Product product = Product.findById(dto.getId());
        if (user != null) {
            updateProductFields(product, dto);
            user.persist();
            return convertToDTO(product);
        }
        return null;
    }

    private void updateProductFields(Product product, ListAllProductDTO proDto) {
        product.setImg(proDto.getImg());
        product.setTitleCart(proDto.getTitleCart());
        product.setTitle(proDto.getTitle());
        product.setDescriptions(proDto.getDescriptions());
        product.setCategory(proDto.getCategory());
        product.setWeight(proDto.getWeight());
        product.setPrice(proDto.getPrice());
        product.setRating(proDto.getRating());
        product.setStock(proDto.getStock());
        product.setOutStock(proDto.getOutStock());
        product.setCreate(proDto.getCreate());
        product.setUpdate(LocalDateTime.now());
        product.setUserId(proDto.getUserId());
    }

    @Transactional
    public void removeProduct(Integer userId) {
        Optional<Product> userOptional = Product.findByIdOptional(userId);
        userOptional.ifPresent(Product::delete);
    }


}
