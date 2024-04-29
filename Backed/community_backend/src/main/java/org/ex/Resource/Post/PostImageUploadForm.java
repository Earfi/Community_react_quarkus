package org.ex.Resource.Post;

import jakarta.ws.rs.FormParam;
import jakarta.ws.rs.core.MediaType;
import org.jboss.resteasy.annotations.providers.multipart.PartType;

public class PostImageUploadForm {
    @FormParam("image")
    @PartType(MediaType.APPLICATION_OCTET_STREAM)
    public byte[] image;

    public byte[] getFile() {
        return image;
    }

    public void setFile(byte[] image) {
        this.image = image;
    }
}
