import Link from "next/link";
import React, { useState } from "react";

interface AppUser {
  users: User[];
}
interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  image: string;
}
const UsersPage = async () => {
  const res = await fetch("https://dummyjson.com/users?limit=5", {
    cache: "no-store",
  });
  const appUsers: AppUser = await res.json();
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <div className="relative flex max-w-[900px] h-[430px] w-full flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
          <div className="flex h-fit w-full items-center justify-between rounded-t-2xl bg-white px-4 pb-[20px] pt-4 shadow-2xl shadow-gray-100 dark:!bg-navy-700 dark:shadow-none">
            <h4 className="text-lg font-bold text-navy-700 dark:text-white">
              Users
            </h4>

            <Link href={`/home/`}>
              <p> See all</p>
            </Link>
          </div>
          <div className="w-full overflow-x-scroll px-4 md:overflow-x-hidden">
            <table
              role="table"
              className="w-full min-w-[500px] overflow-x-scroll"
            >
              <thead>
                <tr role="row">
                  <th role="columnheader" title="Toggle SortBy">
                    <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                      Name
                    </div>
                  </th>
                  <th role="columnheader" title="Toggle SortBy">
                    <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                      Artworks
                    </div>
                  </th>
                  <th role="columnheader" title="Toggle SortBy">
                    <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                      Rating
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody role="rowgroup" className="px-4">
                {appUsers.users.map((user) => (
                  <tr role="row" key={user.id}>
                    <td className="py-3 text-sm" role="cell">
                      <div className="flex items-center gap-2">
                        <div className="h-[30px] w-[30px] rounded-full">
                          <img
                            src={user.image}
                            className="h-full w-full rounded-full"
                            alt=""
                          />
                        </div>
                        <p className="text-sm font-medium text-navy-700 dark:text-white">
                          {user.firstName} {user.lastName}
                        </p>
                      </div>
                    </td>
                    <td className="py-3 text-sm" role="cell">
                      <p className="text-md font-medium text-gray-600 dark:text-white">
                        {user.age}
                      </p>
                    </td>
                    <td className="py-3 text-sm" role="cell">
                      <div className="mx-2 flex font-bold">
                        <div className="h-2 w-16 rounded-full bg-gray-200 dark:bg-navy-700">
                          <div className="flex h-full items-center justify-center rounded-md bg-brand-500 dark:bg-brand-400"></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
