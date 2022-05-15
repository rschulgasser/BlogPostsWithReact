using BlogPostsWithReact.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogPostWithReact.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPosts : ControllerBase
    {
         private string _connectionString;

        public BlogPosts(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet]
        [Route("getposts")]
        public List<BlogPost> GetAll()
        {
            var repo = new BlogPostRepository(_connectionString);
            var s=repo.GetPosts();
            return s;
        }
        [HttpGet]
        [Route("getpostbyId")]
        public BlogPost GetPostById(int id)
        {
            var repo = new BlogPostRepository(_connectionString);
            var b= repo.GetPostById(id);
            return b;
        }
        [HttpPost]
        [Route("addcomment")]
        public void AddComment(Comment comment)
        {
            var repo = new BlogPostRepository(_connectionString);
            comment.DateCreated = DateTime.Now;
          repo.AddComment(comment);
        }
        [HttpPost]
        [Route("addpost")]
        public void AddPost(BlogPost blogPost)
        {
            var repo = new BlogPostRepository(_connectionString);
            blogPost.DateCreated = DateTime.Now;
            repo.AddPost(blogPost);
        }
        [HttpGet]
        [Route("getMostRecent")]
        public int GetMostRecent()
        {
            var repo = new BlogPostRepository(_connectionString);
           int u=repo.GetMostRecentId();
            return u;
        }
        [HttpGet]
        [Route("getcommentstbyId")]
        public List<Comment> Getcomments(int id)
        {
            var repo = new BlogPostRepository(_connectionString);
            var b = repo.GetComments(id);
            return b;
        }
    }
}
