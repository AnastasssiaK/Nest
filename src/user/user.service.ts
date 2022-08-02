import {Injectable} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";

@Injectable()
export class UserService {
    private users = [];

    getAll() {
        return this.users;
    }

    getOneUserById(id: string) {
        //Number(id) -> convert string in number
        return this.users.find(user => user.id == id);
    }

    createUser(user: CreateUserDto) {
        this.users.push({
            ...user,
            id: new Date().valueOf(),
        });
        return user;
    }

    updateUser(id: string, data: UpdateUserDto) {
            const newUser = this.users.findIndex(user => user.id == id);
            this.users[newUser] = {...this.users[newUser], ...data};
            return this.users[newUser];
    }

    deleteUser(id: string) {
        const userForDelete = this.users.find(user => user.id == id)
        this.users.splice(userForDelete, 1);
        return this.users;
    }
}
