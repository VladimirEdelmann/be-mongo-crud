import Post from './Post.js';

class PostService {
    async create(post) {
        const createdPost = await Post.create(post);
        return createdPost;
    }

    async getAll() {
        const posts = await Post.find();
        return res.json(posts);
    }

    async getOne(id) {;
        if (!id) {
            throw new Error('There is no id');
        }

        const post = await Post.findById(id);

        return post;
    }

    async update(post) {
        if (!post._id) {
            throw new Error('There is no id');
        }

        const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });

        return updatedPost;
    }

    async delete(id) {
        try {
            if (!id) {
                throw new Error('There is no id');
            }

            const post = await Post.findByIdAndDelete(id);

            return post;
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new PostService();
