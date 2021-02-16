
import { TicketStatus } from '@typeDefs/ticket-status';
import { TicketType } from '@typeDefs/ticket-type';
import { FC } from 'react';

interface TicketItemProps {
  id: string;
  status: TicketStatus;
  type: TicketType;
  message: string;

  updateTicket: Function;
}


export const TicketItem: FC<TicketItemProps> = ({ id, status, type, message, updateTicket }) => {
  const handleResolve = () => updateTicket(id, 'RESOLVED');
  const handleBlock = () => updateTicket(id, 'BLOCKED');
  return(
    <>
      <div className="row m-4 p-4 display-inline bg-gray-100 rounded-lg shadow-sm hover:shadow-md">
        <div className="col text-center hidden sm:block">
          <a className="grid mx-auto mb-3 py-1 2lg:w-3/5 rounded-md shadow-md bg-green-300">
              <label className="inline-block font-medium text-gray-600 mx-1 text-sm lg:text-md">
                Status
              </label>
              <label className="inline-block font-medium text-2xl text-white">
                {status}
              </label>
          </a>
        </div>

        <div className="col-span-12 sm:col-start-5 sm:col-end-13 px-3 sm:px-0">
            <div className="flex justify-between items-center hidden sm:block">
                <span className="font-light text-gray-600">
                  Type:&nbsp;
                </span>

                <a className="inline-block rounded-full text-white 
                    bg-blue-400 
                    text-xs font-bold 
                    mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                    opacity-90 hover:opacity-100">
                      {type}
                </a>
            </div>

            <div className="mt-2">
                <p className="mt-2 text-gray-600 text-sm md:text-md font-bold pb-5"> ID: {id}</p>

                <a className="sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold hover:underline">{message}</a>
            </div>

            <div className="grid grid-cols-2 mt-4 my-auto">
                <div className="col-span-12 lg:col-span-8">
                    <button onClick={handleBlock} className="inline-block rounded-full text-white 
                        bg-red-400 hover:bg-red-500 duration-300 
                        text-xs font-bold 
                        mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                        opacity-90 hover:opacity-100">
                        Block
                    </button>
                    <button onClick={handleResolve} className="inline-block rounded-full text-white 
                        bg-indigo-400 hover:bg-indigo-500 duration-300 
                        text-xs font-bold 
                        mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                        opacity-90 hover:opacity-100">
                        Resolve
                    </button>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
