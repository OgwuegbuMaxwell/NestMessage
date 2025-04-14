import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";

// @Injectable() will mark this class for registration inside the DI Container
// The registration will occur automatically
@Injectable() 
export class MessagesRepository {
    async findOne(id: string) {
        const contents = await readFile('messages.json', 'utf-8')
        const messages = JSON.parse(contents)

        return messages[id];

    }

    async findAll() {
        const contents = await readFile('messages.json', 'utf-8')
        const messages = JSON.parse(contents)

        return messages;
    }

    async create(content: string) {
        const contents = await readFile('messages.json', 'utf-8')
        const messages = JSON.parse(contents)

        // generate random id
        const id = Math.floor(Math.random() * 999)

        // The goal
        // {
        //     12: {id: 12, content: "the message"},
        //     80: {id: 80, content: "the message"}
        // }

        // Solution
        messages[id] = {id, content};

        // Then turn it back to string and write it back into messages.json file
        await writeFile('messages.json', JSON.stringify(messages))


    }
}