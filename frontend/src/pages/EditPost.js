import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { postsAPI, uploadAPI } from '../services/api';

const EditPost = () => {
  const { isAuthenticated } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    tags: '',
    image: null
  });
  const [imageUrl, setImageUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch post data on mount
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await postsAPI.getPost(id);
        const post = response.data;
        setFormData({
          title: post.title,
          content: post.content,
          tags: post.tags?.join(', ') || '',
          image: null
        });
        setImageUrl(post.image_url || '');
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  const handleImageUpload = async () => {
    if (!formData.image) return;
    try {
      setUploading(true);
      const response = await uploadAPI.uploadFile(formData.image);
      setImageUrl(response.data.url);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.content.trim()) return;

    try {
      setSubmitting(true);
      const tags = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
      const postData = {
        title: formData.title,
        content: formData.content,
        tags,
        image_url: imageUrl
      };

      await postsAPI.updatePost(id, postData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error updating post:', error);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="container text-center">
        <h1>Please login to edit posts</h1>
        <a href="/login" className="btn btn-primary">Login</a>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container text-center">
        <p>Loading post...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Edit Post</h1>

        <form onSubmit={handleSubmit} className="card">
          <div className="form-group">
            <label className="form-label">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="form-input"
              rows="10"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Tags (comma-separated)</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="form-input"
              placeholder="e.g., technology, programming, web development"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="form-input"
            />
            {(formData.image || imageUrl) && (
              <div className="mt-4">
                {formData.image && (
                  <button
                    type="button"
                    onClick={handleImageUpload}
                    disabled={uploading}
                    className="btn btn-secondary"
                  >
                    {uploading ? 'Uploading...' : 'Upload Image'}
                  </button>
                )}
                {imageUrl && (
                  <div className="mt-2">
                    <img 
                      src={`http://localhost:8000${imageUrl}`} 
                      alt="Preview" 
                      className="w-32 h-32 object-cover rounded"
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={submitting}
              className="btn btn-primary"
            >
              {submitting ? 'Updating...' : 'Update Post'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="btn btn-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
