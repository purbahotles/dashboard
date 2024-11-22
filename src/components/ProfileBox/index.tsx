"use client";
import React from 'react';
import Image from 'next/image';

function ProfileBox() {
  return (
    <div className="mx-auto mb-5">
      <div className="flex items-center rounded-lg p-4 w- bg-white dark:bg-dark-2">
        <Image
          src="/images/user/user-03.png"
          width={80}
          height={80}
          className="overflow-hidden rounded-full"
          alt="profile"
        />
        <div className="ml-4 text-black dark:text-white gap-4">
          <h1 className="text-lg font-bold text-blue mb-5">Yohannes Affandy (Jojo)</h1>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-start">
            <div className="flex flex-col space-y-2 md:border-r md:border-gray-300 pr-4">
              <div className="flex items-center">
                  <svg width="40" height="40" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <circle cx="22.5" cy="22.5" r="22.5" fill="#E2F0FF"/>
                    <rect x="5" y="5" width="35" height="35" fill="url(#pattern0_6757_11666)"/>
                    <defs>
                    <pattern id="pattern0_6757_11666" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_6757_11666" transform="scale(0.015625)"/>
                    </pattern>
                    <image id="image0_6757_11666" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAzklEQVR4nO2YMQ7DQAgE+cX+v+RbfARXaZNYdm65eEZyZxm8Am6PCAAAAACAtyirJz/xazTgJxEgqYC2tcALW+Ah8cOdgDt+uBNwxw93Au748SmBs8fV1fdjNUKAogJEC5SvB93IPYTcCAGKCtDCITjueqzFxyACJBXQW7WA63sIkFRA0wI5YAbo5vv9uD2BEKCoANEChQ8QRqhwgsIKFz4gvjQuGKHECfYjrPBZ2AckC5FmI5Qbr8R0cVm5/VpcCFBUgJ7UAgAAAAAQ/8EBnYCyOPLLw7EAAAAASUVORK5CYII="/>
                    </defs>
                  </svg>
                <span className='font-bold ml-3'>Loan Market Office Dev</span>
              </div>
              <div className="flex items-center">
                <div className='bg-blue-100 p-2 rounded-full'>
                  <svg width="20" height="20" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.79688 -4.76837e-07V16H0.898437V-4.76837e-07H3.79688ZM12.3574 16H6.93555V-4.76837e-07H12.4668C14.0553 -4.76837e-07 15.4199 0.320312 16.5605 0.960938C17.7064 1.59635 18.5866 2.51042 19.2012 3.70312C19.8158 4.89583 20.123 6.32292 20.123 7.98437C20.123 9.65104 19.8132 11.0833 19.1934 12.2812C18.5788 13.4792 17.6908 14.3984 16.5293 15.0391C15.373 15.6797 13.9824 16 12.3574 16ZM9.83398 13.4922H12.2168C13.3314 13.4922 14.2611 13.2891 15.0059 12.8828C15.7507 12.4714 16.3105 11.8594 16.6855 11.0469C17.0605 10.2292 17.248 9.20833 17.248 7.98437C17.248 6.76042 17.0605 5.74479 16.6855 4.9375C16.3105 4.125 15.7559 3.51823 15.0215 3.11719C14.2923 2.71094 13.3861 2.50781 12.3027 2.50781H9.83398V13.4922ZM24.4941 14.0781C24.0202 14.0781 23.6139 13.9115 23.2754 13.5781C22.9368 13.2396 22.7702 12.8333 22.7754 12.3594C22.7702 11.8906 22.9368 11.4896 23.2754 11.1562C23.6139 10.8229 24.0202 10.6562 24.4941 10.6562C24.9525 10.6562 25.3509 10.8229 25.6895 11.1562C26.0332 11.4896 26.2077 11.8906 26.2129 12.3594C26.2077 12.6771 26.1243 12.9661 25.9629 13.2266C25.8066 13.487 25.5983 13.6953 25.3379 13.8516C25.0827 14.0026 24.8014 14.0781 24.4941 14.0781ZM24.4941 6.14844C24.0202 6.14844 23.6139 5.98177 23.2754 5.64844C22.9368 5.3099 22.7702 4.90365 22.7754 4.42969C22.7702 3.96094 22.9368 3.5599 23.2754 3.22656C23.6139 2.88802 24.0202 2.71875 24.4941 2.71875C24.9525 2.71875 25.3509 2.88802 25.6895 3.22656C26.0332 3.5599 26.2077 3.96094 26.2129 4.42969C26.2077 4.74219 26.1243 5.02865 25.9629 5.28906C25.8066 5.54948 25.5983 5.75781 25.3379 5.91406C25.0827 6.07031 24.8014 6.14844 24.4941 6.14844Z" fill="#17A9E2"/>
                  </svg>
                </div>
                <span className='font-bold ml-3'>LM9990001</span>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <a
                href="mailto:it@loanmarket.co.id"
                className="flex items-center hover:underline"
              >
                <svg width="40" height="40" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <circle cx="22.5" cy="22.5" r="22.5" fill="#E2F0FF"/>
                  <rect x="5" y="5" width="35" height="35" fill="url(#pattern0_6757_11669)"/>
                  <defs>
                  <pattern id="pattern0_6757_11669" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_6757_11669" transform="scale(0.015625)"/>
                  </pattern>
                  <image id="image0_6757_11669" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABkElEQVR4nO2XS07DMBRFTdhCZUuVkAAJ2BnDdsgwy0me1SXwGdCugzhkBfymRkkjgVBC7NSOneoeycPG9nnXfi5jAAAAAAAAAAAAAC2CSn1Mg9kiIlg0BBASoKM9AjxXn4LUHUt1wkKh9QmX6lbk6s2/gFy9d4og9cQ36pJNTD1nPXfnhjvWaj2B+PvR7OVcUHnfk4avydLwU/XOgggqt4vN65VzAcwscttFVl172PZ+TbK44Hn5YHIk/QhoqdPwz0Lcp8Gw6r9/4lWA8aIcpGGg6r2y/QvwnYYRVQ8iwHCxu6WsbphN1Uk9HiJ1WgE2cZX6lPXh8FgFEXBIGlxUPQ4BNhuq02AgbMxlGlxAQ6oTQcVq36M7NpeXz83o7evFamw7jUOAQRpcVj1aAQ3DUXf6iIpPwHAarFrlbAU0pDrhUq05qY9mSLV2/UcqbgEty6w6qwfzwCwE+AQCCAnQOAKEO0DjEiR0AY02SHgH6OkfEoHBO4AcvwPEzAcE2CIiqBoSQAGPAAAAAAAAAIAdM9+yMxQ/dj/paAAAAABJRU5ErkJggg=="/>
                  </defs>
                </svg>
                <span className='font-bold ml-3'>it@loanmarket.co.id</span>
              </a>
              <a
                href="tel:6281234567890"
                className="flex items-center hover:underline"
              >
                <svg width="40" height="40" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <circle cx="22.5" cy="22.5" r="22.5" fill="#E2F0FF"/>
                  <rect x="5" y="5" width="35" height="35" fill="url(#pattern0_6757_11674)"/>
                  <defs>
                  <pattern id="pattern0_6757_11674" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_6757_11674" transform="scale(0.015625)"/>
                  </pattern>
                  <image id="image0_6757_11674" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFWUlEQVR4nO1aW2hcRRieNLWiFWvSnJlNGouXqhDxircH3/RB8dEKWhSx+uCTVRBEUFIUL2irIEW8F1Oy+8/YWCpSUYul4J0StUQsMeme/99NYr21tLZeWntkTjYxO2fmZDfpds9Z9oNlCZnZc75/Zr7/Now10UQTTTTRRNXoere4VEh6UQD+KAAPcolfclm4kwVBC2t0eFC4jEv8RUgKzA8Hen/FtuFTWaOiSxUvEkATNvLTRpC4rSGN0LG5cIEAGo8j//8HB9iOYCFrFHg5PF8AFi2r/ZKnaAUH3BMxAuAm1hssYGlHV654Ngfaa1nl16dEr13RMiFpxKIJG1NthHYnMXzTJKYNJYBGLWPfSKV3EH0Ti21bO25VhfLP5RIpehzoBZYqBEELl5izkJdMBa1xU7Um2PRCAK1naUFG+Sst5GE28rO5S0/SwywNEJI+NlZva7VuLaP8Hg64z/AMR0W2cC1LOgTQgRkvfdxT+cxcfodnC5dywF+NnfQOSzRe3XWKoeJH5qPinsLrjV0wzJIODuSXvfRct+2OYKFecSN4+polHdzwAFziWyeCfOkIPMaSDk/RTcYxOLxkS/6s+ZIXgLt1fMESjyBoCXP9MgL+AxXNVUGrAMxaIsI9S7PYxdICIfGRiHjNFge4t/0Pc/UkdYMYGOEc6O8yIopWxXoPoK0NQX4KAvA1g8z3zl3QGywQksaMAGo0teQ1+GY8L4zeyld1NXOAAz1jjP2pW9FpLM3gQBsNLSh2vjd2um3ssoFCNwf6yxC/B1n6CyJ4xCiGrHWN54AbDAP8trwf21iawSU9XR4Y0Z8dueKFriJK1GD0Cksz2jcNn2lJb7e7cgQB+KhxbI4L5d/C0gwBdLulyHGPO6HCb42xE6kKhGzQjQ8jR/hDl8ttYzNAVwvAY4YbHUq1HvBJt3jI2N6fu4olQuKTkcBI4s5Uu0ah6F7LUXjKGRwBfhAZL+nTzv6xjmqeG+4oieu4JCUAn9d/s3pBSBwwRU7XEW1jdRYpJA1ajDCia4dz8ULTwhrjjmveHeaABeOFDnFFl9jGZ9S4p8Noy8454Cn/rrhnhV3oqPEqiklqCqHoGh0PGCK31xX7h0aTuNNGQpfbdfJVPfk6GyEj8W7Ly3znUvoeNbRIV5esJID2c4VrtAt1kddRJQe6T38nxgjCvkqfufKF0pzVusrkMMRoKHQW8p3gX6nn6+/kGEEFrRFRnCTyUVz5S8cPXOInlWzxmeSnkCgj9KihRTZ3xwG/0mc/bm4G8DYO+LPTAED7XS7PU8XLzb5DSVOeZScbntp3hpD4hcVd7e4Y8Dvj5uqYQPcOo6IaXfnI3CTthOX92GYzApeU16tVYeq9QetDJeRnMwIH6mUnG6JvYrGQ9KHlOBzmku6o5Df0jnCl29UawRWg1RST7i6q5KUzvV7/vxbPdRhhkNUFKvQO6xziNiiyeHGtjFDW3JX471RsURdwRatsPl8LXlgvrPDOQVV3G8oLuf+c6GdUjY5s/gr7RatQqHZlsngVqw15/dnOElNWk/S2XRfwmAB62ZYPzIe8buxwKFzHkoSM8lfagpeSIQ5ySY9X20C1rjzg0bp4gErAs6NCAPVN5vSWYxHeRca1lXSkPSjcqs+5uaMqdbl1BQe8UTddnTmApN854HMilz+nIVbeGTMoXOO6gT6tERK38Jx/g64/6poil/hQ6snPRJsaXaJri1oHYjPD0H2Wt99ST34muhW1C8AndBYYZ4iGJB+5qivxft1LiCdP45lc4WbWsAiCFn32w2s3pcvYYWQJ+I1uwVV1d6kh0Jvi6/dNNNFEEyxB+A+bnbjO2NoW1AAAAABJRU5ErkJggg=="/>
                  </defs>
                </svg>
                <span className='font-bold ml-3'>6281234567890</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProfileBox;