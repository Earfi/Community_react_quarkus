package org.ex.Resource.Post;

import jakarta.ws.rs.FormParam;
import jakarta.ws.rs.core.MediaType;
import org.jboss.resteasy.annotations.providers.multipart.PartType;

import java.io.File;
import java.io.InputStream;

public class PostImageAndDataForm {
    @FormParam("title")
    private String title;

    @FormParam("file")
    @PartType(MediaType.APPLICATION_OCTET_STREAM)
    private File file;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public File getFile() {
        return file;
    }

    public void setFile(File file) {
        this.file = file;
    }
}