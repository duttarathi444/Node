const faker = require('faker');
const User = require('../schema/user.schema');
const Post = require('../schema/post.schema');

module.exports.seed = async (log = true) => {
    if (log) {
        console.log('Connected to database...');
        console.log('Seeder started...');
    }

    // TODO: Task #1

    await Promise.all(
        Array.from(Array(100).keys()).map(async () => {
            const resp = await User.create({
                name: faker.name.firstName()
            }).then(res => {
                console.log(res);
                return res;
            });
            if (log) console.log("Created user's name: ", resp.name);

            return await Promise.all(
                Array.from(Array(2).keys()).map(async () => {
                    return await Post.create({
                        userId: resp._id,
                        title: faker.lorem.sentence(),
                        description: faker.lorem.paragraph(10)
                    });
                })
            );
        }));

    if (log) console.log('Seeder completed... Exiting...');
}