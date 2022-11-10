import { h, Component } from 'preact';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';
import 'preact-material-components/Theme/style.css';


export function Cardpic() {
  return (
    <div>
      <div class="grid grid-cols-3">
        <div class="flex justify-start">
          <div class="max-w-sm w-full">
            <div class="bg-white shadow-xl rounded-lg overflow-hidden">
              <div class="bg-cover bg-center h-48 p-4" style="background-image: url('../pic/k2c.PNG')">
                <div class="flex justify-start">
                  <svg class="h-6 w-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                  </svg>
                </div>
              </div>
              <div class="p-4">
                <p class="uppercase tracking-wide text-sm font-bold text-gray-700">Web aplication project</p>
                <p class="text-3xl text-gray-900">Kcal 2 Cool</p>
                <p class="text-gray-700">K2C is online calories calculator Web aplication<br/>&nbsp;</p>
              </div>
              <div class="flex p-4 border-t border-gray-300 text-gray-700">
                <div class="bg-cover bg-center w-10 h-10 rounded-full mr-3" style="background-image: url('../pic/PHP.png')">
                </div>

                <div class="bg-cover bg-center w-10 h-10 rounded-full mr-3" style="background-image: url('../pic/mysql.png')">
                </div>

                <div class="bg-cover bg-center w-10 h-10 rounded-full mr-3" style="background-image: url('../pic/javascript.png')">
                </div>

                <div class="bg-cover bg-center w-10 h-10 rounded-full mr-3" style="background-image: url('../pic/html.png')">
                </div>

                <div class="bg-cover bg-center w-10 h-10 rounded-full mr-3" style="background-image: url('../pic/css.png')">
                </div>

              </div>
              <div class="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                <div class="text-xs uppercase font-bold text-gray-600 tracking-wide">View full site</div>
                <div class="flex items-center pt-2">

                  <div>
                    <Button ripple raised>
                      <a href="https://www.deebuk.ac.th/k2c/">Kcal2Cool</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>

        <div class="flex justify-center">
          <div class="max-w-sm w-full">
            <div class="bg-white shadow-xl rounded-lg overflow-hidden">
              <div class="bg-cover bg-center h-48 p-4" style="background-image: url('../pic/game.PNG')">
                <div class="flex justify-start">
                  <svg class="h-6 w-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                  </svg>
                </div>
              </div>
              <div class="p-4">
                <p class="uppercase tracking-wide text-sm font-bold text-gray-700">Game project</p>
                <p class="text-3xl text-gray-900">Little Astronaunt</p>
                <p class="text-gray-700">My first 2D-Platformer game that win 1st in National highschool</p>
              </div>
              <div class="flex p-4 border-t border-gray-300 text-gray-700">
                <div class="bg-cover bg-center w-10 h-10 rounded-full mr-3" style="background-image: url('../pic/flash.jpg')">
                </div>

                <div class="bg-cover bg-center w-10 h-10 rounded-full mr-3" style="background-image: url('../pic/AS.png')">
                </div>

              </div>
              <div class="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                <div class="text-xs uppercase font-bold text-gray-600 tracking-wide">View Certificate</div>
                <div class="flex items-center pt-2">

                  <div>
                    <Button ripple raised>
                      <a href="https://drive.google.com/file/d/1_utzD7agr7gDH8JqjtyHZ-U3O1OCnDZt/view?usp=sharing">Certificate</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>

        <div class="flex justify-end">
          <div class="max-w-sm w-full">
            <div class="bg-white shadow-xl rounded-lg overflow-hidden">
              <div class="bg-cover bg-center h-48 p-4" style="background-image: url('../pic/phan.PNG')">
                <div class="flex justify-start">
                  <svg class="h-6 w-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                  </svg>
                </div>
              </div>
              <div class="p-4">
                <p class="uppercase tracking-wide text-sm font-bold text-gray-700">Web application Project</p>
                <p class="text-3xl text-gray-900">Phangnga-Sportclub</p>
                <p class="text-gray-700">This website is gather news about sport in my province</p>
              </div>
              <div class="flex p-4 border-t border-gray-300 text-gray-700">
                <div class="bg-cover bg-center w-10 h-10 rounded-full mr-3" style="background-image: url('../pic/readyplanet.png')">
                </div>

                <div class="bg-cover bg-center w-10 h-10 rounded-full mr-3" style="background-image: url('../pic/html.png')">
                </div>

              </div>
              <div class="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                <div class="text-xs uppercase font-bold text-gray-600 tracking-wide">View Full site</div>
                <div class="flex items-center pt-2">

                  <div>
                    <Button ripple raised>
                      <a href="https://www.phangngasports.com/">Phangnga-Sportclub</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>

      </div>

    </div>
  );
}