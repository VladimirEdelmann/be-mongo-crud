import Post from './Post.js';
import PostService from './PostService.js';

class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body);
            res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAll(req, res) {
        try {
            const posts = await Post.find();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id);

            return res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async update(req, res) {
        const post = req.body;
        const updatedPost = await PostService.update(post);

        return res.json(updatedPost);
    }

    async delete(req, res) {
        const post = await PostService.delete(req.params.id);

        return res.json(post);
    }
}

export default new PostController();
