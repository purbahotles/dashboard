import { Chat } from "@/types/notification";
import React from 'react';

const Notification = ({ time, isRead, message, by }: Chat) => {
  return (
    <div className="flex items-center py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
      <div className="w-20 flex flex-col space-y-2">
        <div className="flex justify-between items-center relative">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            {time}
          </span>
          <div className="relative flex flex-col items-center">
            <p
              className={`h-4 w-4 mr-1 rounded-full ${
                isRead ? 'bg-gray-400' : 'bg-blue'
              }`}
            ></p>
            <div className="absolute top-full h-8 w-1 mt-1 bg-gray-400 transform -translate-x-1/2"></div>
          </div>
        </div>
      </div>

      <div className="ml-3">
        <p className="text-md font-bold text-black dark:text-gray-4">{message}</p>
        <p className="text-sm">{by}</p>
      </div>
    </div>
  );
};

const NotificationList = () => {
  const notifications = [
    {
      time: '2 hrs',
      isRead: true,
      message: 'admin_branch has updated',
      by: 'Harry Handoko - Contact|MYCRM'
    },
    {
      time: '2 hrs',
      isRead: false,
      message: 'admin_branch has updated',
      by: 'Harry Handoko - Contact|MYCRM'
    },
    {
      time: '2 hrs',
      isRead: true,
      message: 'admin_branch has updated',
      by: 'Harry Handoko - Contact|MYCRM'
    },
  ];

  return (
    <div className="grid grid-rows-1 bg-white dark:bg-dark-2 dark:text-white shadow-md rounded-md p-4">
      <h2 className="text-lg font-semibold mb-4 text-black dark:text-gray-4">NOTIFICATIONS</h2>
      <div>
        {notifications.map((notification, index) => (
          <Notification key={index} {...notification} />
        ))}
      </div>
    </div>
  );
};

export default NotificationList;