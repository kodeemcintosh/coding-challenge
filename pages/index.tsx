
import { FC, useState } from 'react';
import iso from 'isomorphic-fetch';
import { Header } from '@components/header';
import { Footer } from '@components/footer';
import { TicketItem } from '@components/ticket-item';
import { Ticket } from '@typeDefs/ticket';

export async function getServerSideProps () {
  const data = await iso(`http://0.0.0.0:3000/api/reports`);
  const { reports } = await data.json();

  return {
    props: {
      reports
    }
  };
}

interface IndexPageProps {
  reports: Ticket[];
}

const IndexPage: FC<IndexPageProps> = ({ reports }) => {
  const [ tickets, setTickets ] = useState(reports ?? []);

  const handleUpdateTicket = async (id: string, state: string) => {
    const data = await fetch(`http://localhost:3000/api/reports/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origins': '*'
      },
      body: JSON.stringify({
        ticketState: state
      })
    });
    const { reports } = await data.json();
    setTickets(reports);
  }

  return (
    <>
      <Header />
      <div className="flex mx-20 justify-center">
        <div className="bg-white rounded-lg shadow-sm hover:shadow-lg duration-500 px-2 sm:px-6 md:px-2 py-2 my-4 w-4/5">
            {tickets?.map(({ id, type, status, message }: any) => {
              return(
                <TicketItem
                  key={`ticket-${id})`}
                  id={id}
                  type={type}
                  status={status}
                  message={message}
                  updateTicket={handleUpdateTicket}
                />
              )
            })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default IndexPage;
