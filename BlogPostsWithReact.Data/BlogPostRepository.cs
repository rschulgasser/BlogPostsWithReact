using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogPostsWithReact.Data
{
    public class BlogPostRepository
    {

        private readonly string _connectionString;

        public BlogPostRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<BlogPost> GetPosts()
        {
            using var context = new BlogPostDataContext(_connectionString);
            return context.BlogPosts.Include(c => c.Comments).OrderByDescending(c=>c.DateCreated).ToList();
        }
        public void AddPost(BlogPost post)
        {
            using var context = new BlogPostDataContext(_connectionString);
            context.BlogPosts.Add(post);
            context.SaveChanges();

        }

        public BlogPost GetPostById(int id)
        {
            using var context = new BlogPostDataContext(_connectionString);
            return context.BlogPosts.Include(c=>c.Comments).FirstOrDefault(p => p.Id == id);
        }
        public void AddComment(Comment comment)
        {
            using var context = new BlogPostDataContext(_connectionString);
            context.Comments.Add(comment);
            context.SaveChanges();
        }

        public BlogPost GetBlogPost(int id)
        {
            using var context = new BlogPostDataContext(_connectionString);
            return context.BlogPosts.Include(c=>c.Comments).ThenInclude(c=>c.CommenterName).Include(c => c.Comments).ThenInclude(c=>c.Content).OrderByDescending(c => c.DateCreated).FirstOrDefault(f=>f.Id==id);
        }

        public int GetMostRecentId()
        {
            using var context = new BlogPostDataContext(_connectionString);
            return context.BlogPosts.OrderByDescending(c => c.DateCreated).FirstOrDefault().Id;
        }
        public List<Comment> GetComments(int id)
        {
            using var context = new BlogPostDataContext(_connectionString);

            return context.Comments.Where(c => c.BlogPostId == id).ToList();
        
        }
    }
}
