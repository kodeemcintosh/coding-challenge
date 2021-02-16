
import { TicketStatus } from '@typeDefs/ticket-status';
import { TicketType } from '@typeDefs/ticket-type';

export class Ticket {
  id: string;
  type: TicketType;
  status: TicketStatus;
  message: string;

  constructor(id: string, type: string, status: string, message: string) {
    this.id = id;
    this.type = <TicketType>type;
    this.status = <TicketStatus>status;
    this.message = message;
  }
}
