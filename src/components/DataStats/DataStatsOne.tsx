import React from "react";
import { dataStats } from "@/types/dataStats";

const dataStatsList = [
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect x="0.352966" y="0.352936" width="44.9976" height="44.9976" fill="url(#pattern0_6757_11588)"/>
        <defs>
        <pattern id="pattern0_6757_11588" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_6757_11588" transform="scale(0.015625)"/>
        </pattern>
        <image id="image0_6757_11588" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACMUlEQVR4nO2WzU4UQRDHywNc5KRsF4hPsNGj+gZ6MZwI70DkLQiJN+TI1US2qhNO+gzKYYGQkMCB4FZxIB5MiJ+cHNLrR2YGlx10Z3emqV/SySTd09317/pXN4BhGIZhGIZhdEHWZBQNqgKaAGoZgGYBLd2blbUaDqk4mQBsGZBcawsMCxOALQMSswAPoQY0/d44el10LJuO5UtoyPIOWZ+FPojZArfX5Q6ybveqvI51a3KjMw0xCtAMJ39J8H9EIG3DWnsMYhMAvS4WvYMbXhYgNgEcy2Yu3V/f8joTWvjOzEfy9qrr/+9Dp/wMIPmcHh8C/903s3F8NyfApwgF0NP0+BB0bwH0ND4BuHvVXbBACN6RvonfAr54EQxvAhgypQsAa+0xZNntGzzJTpTXYOBnusvHXsGHvnRxjEqABukTR3LQLwMc6X6jJY8hGgGS5AaSLiPJj8I1oDtWlqIogo70+T9vlHS51gI4L7P5k3es35F1Bb0+xJcnN7stfJO++NWXzYRW52ktBWj6vXHH+j7rbxEkvddrTuf1vmPRXE04+tutUHkBkGX+wslfEnxGBNKz9L9TvjMHJTNwARxLKzdmpehmHOlqzgqvoHYCkB5lTpH0QeHNrB8/ys1/CPUTQL6l+xv+w0TRzYSxudrxFUqmlFugTpgAbBmQmAV4oO8AvdJDZNBU4CGk10sAjKyZAP3ACpySZQCP0AL9KH2Biq8Po97AqNc3DMMwDMMwIBLOAW5XnXVpwXWOAAAAAElFTkSuQmCC"/>
        </defs>
      </svg>
    ),
    color: "#E2F0FF",
    title: "CONTACT",
    value: "51",
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect x="0.352936" y="0.352936" width="44.9976" height="44.9976" fill="url(#pattern0_6757_11598)"/>
        <defs>
        <pattern id="pattern0_6757_11598" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_6757_11598" transform="scale(0.015625)"/>
        </pattern>
        <image id="image0_6757_11598" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABC0lEQVR4nO2YQY7CMBAE/Qqa36HltE+jn2V/YwWDxN5gtYBEPEOoknxIDolVseOeaQ0AAOBh5BFTxqH/bN137WMF+CLhtHH/bh8rwAUlaLaAahJ0Nbmln19OgrIEVJGg6QL68Y/r/avfW1fAYXzdSMhcCZos4HKvkgQlCCglQUkCykhQooASEpR5DP47+nFK7aCyAn4LqFfP570ELDCfGxDgycbvsLoV8CwIMCsg2ALmHxD8BM0pEByDJgfE+oLHHcgBJgcEOcDkgCAHmBwQ5ACTA6ItjQhCgyQoovCgFhDF0KAaFOXwoB/QkqEfYPoBQT/A9AMirR+gYgMBS6MCX5kV4MQtAAAAbT2cAcCNbw6bLt/+AAAAAElFTkSuQmCC"/>
        </defs>
      </svg>
    ),
    color: "#E2F0FF",
    title: "LOAN",
    value: "56",
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect x="0.352997" y="0.352997" width="44.9976" height="44.9976" fill="url(#pattern0_6757_11606)"/>
        <defs>
        <pattern id="pattern0_6757_11606" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_6757_11606" transform="scale(0.015625)"/>
        </pattern>
        <image id="image0_6757_11606" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADgklEQVR4nO2ZPWhUQRDHByH4Wd7Nvohg4Vep4kfsRK01inaC1oLWgils/EibCEoqJcS7fQ+1iGBloa0EtUsMxmT2zo+olbEwKRKZVLcjSe75MrfvjveDhSO3y/xn3u68vX8ACgoKCgoKWsPQWFeUzFwwMY2gdeMY029jaY4/89/Ktnae50AnglXqNZYmTeyWVh2WJjGhM9Ax3FzagNbdXTNxvwiLGLs7vBbaHUybvFcIdxs6YNsvNiaF1v1B6wZMpdZjhr9uXR6VWg/GNMjfyZ1gLJ2GtmRorOufM2+pXra1/SstKSf1AzzH3wn0oS0bY7Tc7f0nv1ryjUWQO2H57dBumJhGRAEGml2Llu6JXjAM7QZamvCSSNzR5tfWjonijUO7YSzNeds4md3W7FqeK3rHL2g3jHiltXp9cEynFgAtzf73xUZ/fGtBAZx/WcnRYG2qye9I3ObQSa41dj6c3qRWAKxMmdAJrrkLKlNGrQClan2vv+VoYqW5UljaWM2ul/eN0pPaHtAiqtBhrwAxvcmaQNb1rKFxXndCh9LGahqTzJwUwl6GLgBr8Oba2gnQAq076wejZ1kTyLqeNXi7skq9oEUU02W/B7hHWRPIup41NM4rW7qUNlbTGOuuiR4wmIMeMOjNTdxV0AIT6vOPgLsFgWEN4qHcUAuG1vX7T4auQ2BYgziW/XrBrHvgnbeErkBgWIPYlffVghlLj0W1L0JgWIPYlSN6wWL3XLwGgzu2rMHvAW5ULRjG9LoxWJS44xAY1iCu56/UgpmY3nv37sr0QQgMaxC78p1aMLTuk9cEq7QLAsMaRBOcUguGln76R+BLGQLDGsQ94IdaMLRuvjHY7heTGyEwrEG8meZb4gahtv2UwaZTcYVQuEFo6TvkBNai7gqVhBtkYvcRcgJrUXeFIuEGmdi9hZzAWtRdISPcINULR0pYi7orhMINUr1ypoS1qLtCkXCDVH90ZPxXvIorZIQbpPqzMyWsRd0VQuEGqRoPGY0aFVcIZZCE+iAntOThGOEG8ZGAnNCS42mEG8RNEXJCSxo0CjcIE3cOcgJrUX9Fo3CDsDpzCnICa1G/pBnhBkXWHYGcwFrUXSEUbtD2pL4PcgJrUXeFULhBeR4qrpCJ3ULoxFKMhXVNvnv085YcJJVqsIO1bgUoPZ3pDp1Q2lFOpqN1K0BBQUFBAXQmfwFRT2U+0Vz3lwAAAABJRU5ErkJggg=="/>
        </defs>
      </svg>
    ),
    color: "#E2F0FF",
    title: "PRODUCT",
    value: "80",
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect x="0.352936" y="0.352936" width="44.9976" height="44.9976" fill="url(#pattern0_6757_11616)" />
        <defs>
          <pattern id="pattern0_6757_11616" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_6757_11616" transform="scale(0.015625)" />
          </pattern>
          <image id="image0_6757_11616" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC8UlEQVR4nO1Zu24UMRQ1WQIFRXiN70LoSJVv4BcoKXgIaKMg8Qmh4Aco06YI15ZWSATRUCBByAMtVBQIsZB7U9AQiUeChIQY5BVI+5idmZ3xzHgWH8mVPT7nHtvXd71CeHh4eHh4eFQBWPl0zDTxvwFa7yUouiORPgPyF4l876TmWTHpCDTPmWAl0g9QHPY2ifwTkFeaemdeTBoCTRekYg1IvwYDH2pIv0HxE0C6KGqNpXDKBAFIG4lBj26vA6Tr4ml4WNQqsWm+Bcid+JXmTnfcOGNdTpjQm9higpGKXw2t6r/dovhFwo746lzCDGISW5ZznSZfOJEwg4KFBvfpvE1jy01saO9uT3u0Ck2Yc4/fHTWTS6S3secb+YPUdLuIZFWZBkC+K5H24klpu4l0SeiwIYqGDhuGy3AmaNoz2nPzgTPnL1seyk0CBWVgm0LjbqI880YbsNoBYQHWhQohjLbCDYCUbeSES+GURL46ZKzmK6avNB1VGDDz4OPxhCt03YyZTAN02ABFm4nfIm1E3Sa1NwA03Uz7bbegccWAURiXSCp62TteKn54apXOmmpRKl7r76OtpPlKC9SaAQNXVG+ZPNvaPddnANLBxBkASN9GGVAGvwtHYGvgCKzlMaF2BoDixagkJRXt/70dFuf1myNF8VsHjCnABGdeg+Iytuk/3do5UwS/dUAGASY4idyONQG5LZbb00XwWwVkFbDcng40LXTf/5C+R9YBmhYK47cFsCQgqg7oVoMl8WeGTQGDdYC5MsvkL6sQOkhdCCnat83vggHbUXWACV4iP+qfjzZt81sHjCmgqehGXPbvN2f3mm1+64BxBXR/Dif+82PaeprH1foZIIQ4oTszgPw8phB6ZsYUxW8VkFVAGB4yz18RwV82fYXz2wLkFFD197kB3gCudAVqvwPqzi+qFlA1v6haQOn8kLKKc6V5A2wDHFhVvwNUBUcAHFjNSncCOBCEN0D5HRA6kww9PDw8PDw8xKTgD67yO4P7NiEEAAAAAElFTkSuQmCC" />
        </defs>
      </svg>
    ),
    color: "#E2F0FF",
    title: "BANK",
    value: "30",
  },
];

const DataStatsOne: React.FC<dataStats> = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {dataStatsList.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-2 bg-white dark:bg-gray-dark rounded-lg shadow-md p-6"
          >
            <div
              className="w-16 h-16 flex items-center justify-center rounded-full"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </div>

            <div className="grid text-center items-center justify-center">
              <h1 className="text-black text-lg font-bold dark:text-white">{item.title}</h1>
              <p className="text-2xl font-bold text-blue mt-2 dark:text-white">{item.value}</p>
            </div>
            
          </div>
          
        ))}
      </div>
    </>
  );
};

export default DataStatsOne;
