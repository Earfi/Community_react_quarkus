package org.ex.Dto.Product;

import org.ex.Model.User.User;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class ListAllProductDTO {
    private Integer id;
    private String img;
    private String titleCart;
    private String title;
    private String descriptions;
    private String category;
    private BigDecimal weight;
    private BigDecimal price;
    private String rating;
    private String stock;
    private String outStock;
    private LocalDateTime create;
    private LocalDateTime update;
    private Integer userId;

    public ListAllProductDTO(Integer id, String img, String titleCart, String title, String descriptions,
                             String category, BigDecimal weight, BigDecimal price, String rating, String stock,
                             String outStock, LocalDateTime create, LocalDateTime update, Integer userId) {
        this.id = id;
        this.img = img;
        this.titleCart = titleCart;
        this.title = title;
        this.descriptions = descriptions;
        this.category = category;
        this.weight = weight;
        this.price = price;
        this.rating = rating;
        this.stock = stock;
        this.outStock = outStock;
        this.create = create;
        this.update = update;
        this.userId = userId;
    }

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
