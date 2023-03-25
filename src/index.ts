import 'reflect-metadata';
import { createConnection, getManager } from 'typeorm';
import { User } from './entity/User';

const main = async () => {
    await createConnection();
    const manager = getManager();

    const clearResult = await manager.clear(User);
    console.log('clearResult', clearResult);

    const insertResult = await manager.insert(User, [{
        lastName: 'あい',
        firstName: 'うえお',
        age: 20,
    }, {
        lastName: 'かき',
        firstName: 'くけこ',
        age: 30,
    }]);
    console.log('insertResult', insertResult);

    const findAllResult = await manager.find(User);
    console.log('findAllResult', findAllResult);

    const findOneResult = await manager.findOne(User, 2);
    console.log('findOneResult', findOneResult);

    const findOneFaileResult = await manager.findOne(User, 3);
    console.log('findOneFaileResult', findOneFaileResult);

    process.exit();
};
main();
