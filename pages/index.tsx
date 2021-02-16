
import { FC, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import { Header } from '@components/header';
import { Footer } from '@components/footer';
import { TicketItem } from '@components/ticket-item';

export async function getServerSideProps () {
  const data = await fetch('http://localhost:3000/api/reports');
  const { reports } = await data.json();

  return {
    props: {
      reports
    }
  }
}

interface IndexPageProps {
  reports: any;
}

const IndexPage: FC<IndexPageProps> = ({ reports }) => {
  const [ tickets, setTickets ] = useState(reports);

  const handleUpdateTicket = async (id: string, state: string) => {
    const response = await fetch(`http://localhost:3000/api/reports/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origins': '*'
      },
      body: JSON.stringify({
        ticketState: state
      })
    });
    const { reports } = await response.json();
    setTickets(reports);
  }

  return (
    <>
      <Header />
      <div className="flex mx-20 justify-center">
        <div className="bg-white rounded-lg shadow-sm hover:shadow-lg duration-500 px-2 sm:px-6 md:px-2 py-4 my-6 w-4/5">
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
