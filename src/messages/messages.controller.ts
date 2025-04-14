import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    messagesService: MessagesService;

    constructor() {
        // DONT DO THIS ON REAL APP, USE DEPENDENCY INJECTION
        this.messagesService = new MessagesService();
    }

    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessages(@Body() body: CreateMessageDto) {
        return this.messagesService.create(body.content)
    }

    @Get('/:id')
    getMessage(@Param('id') id: string) {
        return this.messagesService.findOne(id);
    }

}

// {
//     "12": {
//       "content": "hi there!",
//       "id": 12
//     },
//     "13": {
//       "content": "How are You?",
//       "id": 13
//     },
//     "14": {
//       "content": "Hope your cool",
//       "id": 14
//     }
//   }
  
