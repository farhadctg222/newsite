document.getElementById("post-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;

    var blogPost = document.createElement("article");
    blogPost.innerHTML = "<h3>" + title + "</h3><p>" + content + "</p>";

    document.getElementById("blog-posts").appendChild(blogPost);

    // Clear form inputs
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
});
