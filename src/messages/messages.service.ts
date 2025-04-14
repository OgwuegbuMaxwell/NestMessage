import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

// @Injectable() will mark this class for registration inside the DI Container
// The registration will occur automatically
@Injectable() 
export class MessagesService {
    constructor(public messagesRepo: MessagesRepository) {}

    findOne(id: string) {
        return this.messagesRepo.findOne(id)
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    create(conetent: string) {
        return this.messagesRepo.create(conetent);
    }



}








// import { MessagesRepository } from "./messages.repository";
// export class MessagesService {
//     messagesRepo: MessagesRepository;

//     constructor() {
//         // Service is creating its own dependencies
//         // DONT DO THIS ON REAL APP, USE DEPENDENCY INJECTION
//         this.messagesRepo = new MessagesRepository();
//     }

//     findOne(id: string) {
//         return this.messagesRepo.findOne(id)
//     }

//     findAll() {
//         return this.messagesRepo.findAll();
//     }

//     create(conetent: string) {
//         return this.messagesRepo.create(conetent);
//     }



// }