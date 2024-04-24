package org.ex.Model.Product;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;
import org.ex.Model.User.User;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "products")
public class Product extends PanacheEntityBase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "img_path")
    private String img;
    @Column(name = "title_cart")
    private String titleCart;
    @Column(name = "title")
    private String title;
    @Column(name = "descriptions")
    private String descriptions;
    @Column(name = "category")
    private String category;
    @Column(name = "weight", columnDefinition = "DECIMAL(5, 2)")
    private BigDecimal weight;
    @Column(name = "price", columnDefinition = "DECIMAL(9, 2)")
    private BigDecimal price;
    @Column(name = "rating", columnDefinition = "DECIMAL(3, 1)")
    private String rating;
    @Column(name = "stock")
    private String stock;
    @Column(name = "out_stock")
    private String outStock;
    @Column(name = "created_at")
    private LocalDateTime create;
    @Column(name = "updated_at")
    private LocalDateTime update;

//    @ManyToOne
//    @JoinColumn(name = "user_id")
@Column(name = "user_id")
    private Integer userId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getTitleCart() {
        return titleCart;
    }

    public void setTitleCart(String titleCart) {
        this.titleCart = titleCart;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescriptions() {
        return descriptions;
    }

    public void setDescriptions(String descriptions) {
        this.descriptions = descriptions;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public BigDecimal getWeight() {
        return weight;
    }

    public void setWeight(BigDecimal weight) {
        this.weight = weight;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public String getStock() {
        return stock;
    }

    public void setStock(String stock) {
        this.stock = stock;
    }

    public String getOutStock() {
        return outStock;
    }

    public void setOutStock(String outStock) {
        this.outStock = outStock;
    }

    public LocalDateTime getCreate() {
        return create;
    }

    public void setCreate(LocalDateTime create) {
        this.create = create;
    }

    public LocalDateTime getUpdate() {
        return update;
    }

    public void setUpdate(LocalDateTime update) {
        this.update = update;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }
}
